---
title: Upload 上传
---
# Upload 上传
### 引入组件
```vue
<template>
  <m-upload
    action="https://img-node-server.herokuapp.com/upload" name="avatar"
    :default-file-list="fileList">
    <m-button>点击上传</m-button>
    <template v-slot:tips>
      示例代码中的上传地址在heroku上，所以需要科学上网才能上传成功
    </template>
  </m-upload>
</template>

<script>
  import { MUpload } from "@csr/m_ui";

  export default {
    components: {
      MUpload
    },
    data() {
      return {
        fileList: [
          {name: 'avatar0.jpg', url: 'http://img1.imgtn.bdimg.com/it/u=2627188576,3710023153&fm=26&gp=0.jpg'},
          {name: 'avatar1.jpg', url: 'http://img4.imgtn.bdimg.com/it/u=1142211080,3689420364&fm=15&gp=0.jpg'}
        ]
      }
    }
  }
</script>
```
<upload-demos></upload-demos>
