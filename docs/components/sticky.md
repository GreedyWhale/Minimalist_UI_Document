---
title: Sticky 粘性定位
---
# Sticky 粘性定位
### 引入组件
```vue
<template>
  <div>
    <m-sticky tag-id="sticky-wrapper">
      <div class="sticky-element">我是sticky定位的元素</div>
    </m-sticky>
  </div>
</template>

<script>
  import { MSticky} from "@csr/m_ui";
  export default {
    components: {
      MSticky
    }
  }
</script>
```
<sticky-demos></sticky-demos>