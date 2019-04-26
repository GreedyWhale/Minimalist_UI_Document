---
title: Collapse 折叠面板
---
# Collapse 折叠面板
### 引入组件
```vue
<template>
  <m-collapse>
    <m-collapse-item title="标题1" name="content1">
      内容1
    </m-collapse-item>
    <m-collapse-item title="标题2" name="content2">
      内容2
    </m-collapse-item>
    <m-collapse-item title="标题3" name="content3">
      内容3
    </m-collapse-item>
  </m-collapse>
</template>

<script>
  import { MCollapse, MCollapseItem } from "@csr/m_ui";
  export default {
    components: {
      MCollapse,
      MCollapseItem
    }
  }
</script>
```
<collapse-demos></collapse-demos>