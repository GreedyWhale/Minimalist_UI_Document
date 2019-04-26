---
title: Grid 网格
---
# Grid 网格
### 引入组件
```vue
<template>
  <div>
    <m-row>
      <m-col :span="8"><div></div></m-col>
      <m-col :span="8"><div></div></m-col>
      <m-col :span="8"><div></div></m-col>
    </m-row>
  </div>
</template>

<script>
  import { MRow, MCol } from "@csr/m_ui";
  export default {
    components: {
      MRow,
      MCol
    }
  }
</script>
```

<grid-demos></grid-demos>