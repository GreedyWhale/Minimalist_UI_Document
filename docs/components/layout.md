---
title: Layout 布局
---
# Layout 布局
### 引入组件
```vue
<template>
  <div>
    <m-layout>
      <m-header>header</m-header>
      <m-layout>
        <m-aside>aside</m-aside>
        <m-main>main</m-main>
      </m-layout>
      <m-footer>footer</m-footer>
    </m-layout>
  </div>
</template>

<script>
  import { MLayout, MMain, MHeader, MFooter, MAside } from "@csr/m_ui";
  export default { 
    components: {
      MLayout,
      MMain,
      MHeader,
      MFooter,
      MAside
    }
  }
</script>
```
<layout-demos></layout-demos>

:::tip
想要修改布局相关样式，直接使用css或者style进行修改。
:::