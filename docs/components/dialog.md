---
title: Dialog 对话框
---
# Dialog 对话框
### 引入组件
```vue
<template>
  <div>
    <m-dialog v-model="visibleDialog" title="标题">
      内容
    </m-dialog>
    <m-button @click="visibleDialog = !visibleDialog">打开对话框</m-button>
  </div>
</template>

<script>
  import { MDialog, MButton } from "@csr/m_ui";
  export default {
    components: {
      MDialog,
      MButton
    },
    data() {
      return {
        visibleDialog: false
      }
    }
  }
</script>
```
<ClientOnly>
<dialog-demos></dialog-demos>
</ClientOnly>