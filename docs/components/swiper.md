---
title: Swiper 轮播
---
# Swiper 轮播
### 引入组件
```vue
<template>
  <div>
    <m-swiper>
      <m-swiper-item name="1">
        <div class="box box-red"></div>
      </m-swiper-item>
      <m-swiper-item name="2">
        <div class="box box-green"></div>
      </m-swiper-item>
      <m-swiper-item name="3">
        <div class="box box-yellow"></div>
      </m-swiper-item>
      <m-swiper-item name="4">
        <div class="box box-blue"></div>
      </m-swiper-item>
    </m-swiper>
  </div>
</template>

<script>
  import { MSwiper, MSwiperItem } from "@csr/m_ui";
  export default {
    components: {
      MSwiper,
      MSwiperItem
    }
  }
</script>
```
<swiper-demos></swiper-demos>