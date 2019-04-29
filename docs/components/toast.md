---
title: Toast 消息提示
---
# Toast 消息提示
### 引入组件
```vue
<template>
  组件方式
  <m-toast ref="toast">甜食是装在另一个胃里的</m-toast>
  <m-button @click="showToast">打开消息提示</m-button>
  插件方式
  <m-button :options="{color: 'green', type: 'solid'}" @click="showToast1">打开消息提示</m-button>
</template>

<script>
  import { MToast, MToastPlugin, MButton } from "@csr/m_ui";
  import Vue from "vue";
  Vue.use(MToastPlugin);
  export default {
    components: {
      MToast
    },
    methods: {
      showToast() {
        this.$refs.toast.showToast();
      },
      showToast1() {
        this.$toast('毕竟老夫也不是什么恶魔');
      }
    }
  }
</script>
```
<ClientOnly>
<toast-demos></toast-demos>
</ClientOnly>
