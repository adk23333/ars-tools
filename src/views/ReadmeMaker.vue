<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import {McElectType, McVersion, ReadmeItems} from "@/store/model";
import {getReadmeTemplate} from "@/net/api/readme";
import {MdPreview} from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import Mustache from 'mustache';
import {downloadFile} from '@/unit';

const data = reactive(new ReadmeItems())

let template = ''
const markdown_text = ref('')

getReadmeTemplate().then((res) => {
  template = res.toString()
})

function generator() {
  markdown_text.value = Mustache.render(template, data)
}

watch(data.versions, (newValue, _) => {
  newValue.forEach((value, index) => {
    const vers = McVersion[data.lang as keyof typeof McVersion].versions as string[]
    if (vers.indexOf(value) === -1) {
      data.versions.splice(index, 1)
    }
  })

})


</script>

<template>
  <v-container class="fill-height justify-center">
    <h2 class="text-center">模块README制作工具</h2>
    <v-divider class="mt-3 mb-6"/>
    <v-row>
      <v-col>
        <v-responsive class="text-left px-6" max-width="600">
          <h4>1. 作者</h4>
          <v-text-field
            clearable
            label="you nick name"
            variant="outlined"
            v-model="data.author"
            class="mt-3"
          ></v-text-field>

          <h4>2. 简介</h4>
          <v-textarea
            label="profile"
            variant="outlined"
            v-model="data.profile"
            class="mt-3"
          ></v-textarea>

          <h4>3. 链接</h4>
          <v-row v-for="i in data.links.length" class="mt-1">
            <v-col>
              <v-text-field
                clearable
                label="链接文字"
                variant="outlined"
                v-model="data.links[i-1][0]"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                clearable
                label="链接"
                variant="outlined"
                v-model="data.links[i-1][1]"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn
                @click="data.remove_links(i-1)"
                icon="mdi-close"
                class="mt-2"
                color="red-darken-1"
                density="comfortable"
                variant="text"></v-btn>
            </v-col>
          </v-row>
          <v-btn
            @click="data.append_link()"
            block
            variant="outlined"
          >加一条
          </v-btn>

          <h4>4. 游戏语言版本</h4>
          <v-radio-group inline v-model="data.lang">
            <v-radio :label="McVersion.JAVA.name" :value="McVersion.JAVA.name"></v-radio>
            <v-radio :label="McVersion.BE.name" :value="McVersion.BE.name"></v-radio>
          </v-radio-group>

          <h4>5. 适用版本</h4>
          <v-select
            chips
            label="selected versions"
            v-model="data.versions"
            :items="McVersion[data.lang as keyof typeof McVersion].versions"
            multiple
            variant="outlined"
            class="mt-3"
          ></v-select>

          <h4>6. 电路类型</h4>
          <v-radio-group inline v-model="data.elect_type">
            <v-radio
              v-for="i in Object.values(McElectType)"
              :label="i.name" :value="i.name"></v-radio>
          </v-radio-group>

          <h4>7. 延迟（gt）</h4>
          <v-range-slider
            v-model="data.delay"
            :max="ReadmeItems.MAX_DELAY"
            :min="0"
            :step="1"
            hide-details
            class="align-center"
          >
            <template v-slot:prepend>
              <v-text-field
                v-model="data.delay[0]"
                hide-details
                single-line
                type="number"
                variant="outlined"
                density="compact"
                style="width: 75px"
              ></v-text-field>
            </template>
            <template v-slot:append>
              <v-text-field
                v-model="data.delay[1]"
                hide-details
                single-line
                type="number"
                variant="outlined"
                style="width: 75px"
                density="compact"
              ></v-text-field>
            </template>
          </v-range-slider>

          <h4>8. 模块大小</h4>
          <v-slider
            v-model="data.size[0]"
            :max="ReadmeItems.MAX_SIZE"
            :step="1"
            label="X"
            hide-details
            class="ma-4"
          >
            <template v-slot:append>
              <v-text-field
                v-model="data.size[0]"
                type="number"
                style="width: 85px"
                density="compact"
                hide-details
                variant="outlined"
              ></v-text-field>
            </template>
          </v-slider>

          <v-slider
            v-model="data.size[1]"
            :max="ReadmeItems.MAX_SIZE"
            :step="1"
            label="Y"
            hide-details
            class="ma-4"
          >
            <template v-slot:append>
              <v-text-field
                v-model="data.size[1]"
                type="number"
                style="width: 85px"
                density="compact"
                hide-details
                variant="outlined"
              ></v-text-field>
            </template>
          </v-slider>

          <v-slider
            v-model="data.size[2]"
            :max="ReadmeItems.MAX_SIZE"
            :step="1"
            label="Z"
            hide-details
            class="ma-4"
          >
            <template v-slot:append>
              <v-text-field
                v-model="data.size[2]"
                type="number"
                style="width: 85px"
                density="compact"
                hide-details
                variant="outlined"
              ></v-text-field>
            </template>
          </v-slider>

          <h4>9. </h4>
          <v-divider class="mt-3"></v-divider>
          <v-row class="justify-center">
            <v-col cols="2">
              <v-btn
                @click="generator()"
                class="mt-3"
                color="primary"
              >预览
              </v-btn>
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <v-responsive max-width="800">
          <MdPreview :modelValue="markdown_text"/>
          <v-divider class="mt-3"></v-divider>
          <v-row class="justify-center">
            <v-col cols="2">
              <v-btn
                @click="downloadFile('README.md', markdown_text)"
                class="mt-3"
                color="primary"
              >下载README
              </v-btn>
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>

</style>
