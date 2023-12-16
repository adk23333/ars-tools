---
meta:
  title: {{title}} # 'title'
  description: {{profile}} # 'description'
  keywords: {{kws2str}} # [kw1, kw2, ...]
  links: {{links}} # [[text, link], ...] 
  lang: {{lang}} # 'JAVA'
  versions: {{versions}} # ['1.20', '1.19', ...]
  elect_type: {{elect_type}}
  delay: {{delay}} # [0, 0]
  size: {{size}} # [0, 0, 0]
  position: {{position}} # [0, 0, 0]
  params: {{params}} # [端口, 位宽, 位置, 延迟, 注释]
  sections: {{sections}} # [[指标项目, 参数], [指标项目, 参数]]
---

# “位宽” “模块名称”

## 简介

{{profile}}

## 信源链接

{{#links2strs}}
- {{.}}
{{/links2strs}}

## 模块信息

- 适用版本
    - {{{versions2str}}}
- 作者
    - {{author}}
- 存档位置
    - 1x1x1
- 电路类型
    - {{elect_type}}
- 电路大小
    - {{size2str}}
- 总延迟
    - {{delay2str}}

### 标签

## 模块参数列表

| 端口列表 | 位宽 | 位置 | 延迟 | 注释 |
|------|----|----|----|----|
|      |    |    |    |    |

## 模块指标列表

| 指标项目 | 参数 | 指标项目 | 参数 |
|------|----|------|----|
|      |    |      |    |

