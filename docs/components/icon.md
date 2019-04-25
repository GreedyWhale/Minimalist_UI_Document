---
title: Icon 图标
---
# Icon 图标
### 引入组件
```vue
<template>
  <div>
    <m-icon icon="tips"></m-icon>
  </div>
</template>

<script>
  import { MIcon } from "@csr/m_ui";
  components: {
    MIcon
  }
</script>
```
<icon-demos></icon-demos>

### 提示
::: tip
MIcon组件的图标是使用了iconfont的symbol引用实现的，要改变图标的颜色只需要改变当前使用MIcon组件元素css中的color即可，大小可通过设置css中的font-size来修改，
也可通过css中的width和height进行修改
:::