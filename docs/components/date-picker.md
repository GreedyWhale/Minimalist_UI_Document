---
title: DatePicker 日期选择器
---
# DatePicker 日期选择器
### 引入组件
```vue
<template>
  <div>
    <m-date-picker v-model="date"></m-date-picker>
  </div>
</template>

<script>
  import { MDatePicker } from "@csr/m_ui";
  export default {
    components: {
      MDatePicker
    },
    data() {
      return {
        date: ''
      }
    }
  }
</script>
```
<date-picker-demos></date-picker-demos>