<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row justify="center">
        <v-col cols="1">
          <v-icon icon="mdi-tools" size="64"/>
        </v-col>
        <v-col cols="2" class="text-left">
          <h1>工具箱</h1>
        </v-col>
      </v-row>

      <div class="py-14"/>

      <v-sheet class="d-flex flex-wrap justify-center">
        <v-sheet
          elevation="6"
          rounded="lg"
          class="pa-4 text-left mx-auto"
        >
          <h2 class="text-h5 mb-6">模块README模板</h2>

          <p class="mb-4 text-medium-emphasis text-body-2">
            这是一个制作模块介绍模板的工具
            <br/>
            如果你还不会使用它，点击 <a href="#" class="text-decoration-none text-info">
            模板工具使用指南
          </a>
          </p>

          <v-divider class="mb-4"></v-divider>

          <div class="text-end">
            <v-btn
              href="/rmm"
              class="text-none"
              color="success"
              rounded
              variant="flat"
              width="120"
              append-icon="mdi-arrow-right"
            >
              Continue!
            </v-btn>
          </div>
        </v-sheet>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>

</script>
