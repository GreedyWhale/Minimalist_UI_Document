---
title: Table 表格
---
# Table 表格
### 引入组件
```vue
<template>
  <m-table :columns="columns" :data-source="dataSource"></m-table>
</template>

<script>
  import { MTable } from "@csr/m_ui";

  export default {
    components: {
      MTable
    },
    data() {
      return {
        dataSource: [
          { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' },
          { key: 2, name: '小李', age: 9, score: 40, grade: '二年级' },
          { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级' },
          { key: 4, name: '老王', age: 30, score: 60, grade: '六年级' },
        ],
        columns: [
          {title: '姓名', field: 'name'},
          {title: '年龄', field: 'age'},
          {title: '分数', field: 'score'},
          {title: '年级', field: 'grade'}
        ]
      }
    }
  }
</script>
```
<table-demos></table-demos>
