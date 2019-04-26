---
title: ButtonGroup 按钮组
---
# ButtonGroup 按钮
### 引入组件

```vue
<template>
  <div>
    <m-button-group>
      <m-button>按钮</m-button>
      <m-button>按钮</m-button>
    </m-button-group>
  </div>
</template>

<script>
  import { MButton, MButtonGroup } from "@csr/m_ui";
  export default {
    components: {
      MButton,
      MButtonGroup
    }
  }
</script>
```
<button-group-demos></button-group-demos>

### 注意
::: warning
MButtonGroup组件的子元素必须是MButton组件，按钮的样式等设置参考MButton组件
:::