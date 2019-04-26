---
title: Tabs 标签页
---
# Tabs 标签页
### 引入组件
```vue
<template>
  <m-tabs :selected.sync="selected">
    <m-tabs-head>
      <m-tabs-item name="dayToDay">搞笑/日常</m-tabs-item>
      <m-tabs-item name="idol">偶像</m-tabs-item>
      <m-tabs-item name="inference">推理</m-tabs-item>
    </m-tabs-head>
    <m-tabs-body>
      <m-tabs-pane name="dayToDay">今日的风儿好喧嚣啊 </m-tabs-pane>
      <m-tabs-pane name="idol">为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！</m-tabs-pane>
      <m-tabs-pane name="inference">赌上爷爷的名义</m-tabs-pane>
    </m-tabs-body>
  </m-tabs>
</template>

<script>
  import { MTabs, MTabsHead, MTabsBody, MTabsItem, MTabsPane } from "@csr/m_ui";

  export default {
    components: {
      MTabs,
      MTabsHead,
      MTabsBody,
      MTabsItem,
      MTabsPane
    },
    data() {
      return {
        selected: 'dayToDay'
      }
    }
  }
</script>
```
<tabs-demos></tabs-demos>
