<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-upload
        action="https://img-node-server.herokuapp.com/upload" name="avatar"
        :default-file-list="fileList">
        <m-button>点击上传</m-button>
        <template v-slot:tips>
          示例代码中的上传服务部署在heroku上，所以需要科学上网才能上传成功
        </template>
      </m-upload>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">缩略图模式</h3>
    <div class="components-wrappper">
      <m-upload
        action="https://img-node-server.herokuapp.com/upload" name="avatar"
        :default-file-list="fileList" list-type="picture">
        <m-button>点击上传</m-button>
        <template v-slot:tips>
          示例代码中的上传服务部署在heroku上，所以需要科学上网才能上传成功
        </template>
      </m-upload>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(pictureCode) }}</code></pre>
    </div>

    <h3 class="title">卡片模式</h3>
    <div class="components-wrappper">
      <m-upload
        action="https://img-node-server.herokuapp.com/upload" name="avatar"
        :default-file-list="fileList" list-type="card">
        <m-button>点击上传</m-button>
        <template v-slot:tips>
          示例代码中的上传服务部署在heroku上，所以需要科学上网才能上传成功
        </template>
      </m-upload>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(cardCode) }}</code></pre>
    </div>

    <h3 class="title">手动上传</h3>
    <div class="components-wrappper">
      <m-upload
        action="https://img-node-server.herokuapp.com/upload" name="avatar"
        :default-file-list="fileList" :auto-upload="false">
        <m-button>选择图片</m-button>
        <template v-slot:tips>
          示例代码中的上传服务部署在heroku上，所以需要科学上网才能上传成功
        </template>
        <template v-slot:submit="slotProps">
          <div class="manual-upload">
            <m-button @click="slotProps.submit">手动上传</m-button>
          </div>
        </template>
      </m-upload>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(manualCode) }}</code></pre>
    </div>

    <h3 class="title">拖拽上传</h3>
    <div class="components-wrappper">
      <m-upload
        action="https://img-node-server.herokuapp.com/upload" name="avatar"
        :default-file-list="fileList">
        <div class="upload-box">
          拖拽上传
        </div>
        <template v-slot:tips>
          示例代码中的上传服务部署在heroku上，所以需要科学上网才能上传成功
        </template>
      </m-upload>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(dragCode) }}</code></pre>
    </div>

    <h3 class="title">API</h3>
    <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>action</td>
          <td>图片上传服务器地址，必传</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>name</td>
          <td>上传文件时的名称，作用和input控件中的name属性相同，必传</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>method</td>
          <td>上传文件时请求方法</td>
          <td>string</td>
          <td>POST</td>
        </tr>
        <tr>
          <td>auto-upload</td>
          <td>是否开启自动上传</td>
          <td>boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td>是否开启多选</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>accept</td>
          <td>
            限制允许的文件类型，详情查看：
            <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file">
            input type="file"</a>
          </td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>default-file-list</td>
          <td>默认展示的文件，该数组中的每一项必须包含以下属性：{ name: 'xxx', url: 'xxx'}</td>
          <td>array</td>
          <td></td>
        </tr>
        <tr>
          <td>before-remove</td>
          <td>文件删除之前的钩子，参数为(file: 删除的文件, fileList: 当前的文件列表)</td>
          <td>function</td>
          <td></td>
        </tr>
        <tr>
          <td>before-upload</td>
          <td>
            文件上传之前的钩子，参数为参数为(file: 上传的文件, fileList: 当前的文件列表)，
            若返回 false 或者返回 Promise 且被 reject，则停止上传。
          </td>
          <td>function</td>
          <td></td>
        </tr>
        <tr>
          <td>headers</td>
          <td>
            设置上传的请求头部
          </td>
          <td>object</td>
          <td></td>
        </tr>
        <tr>
          <td>with-credentials</td>
          <td>
            上传请求时是否携带 cookie	
          </td>
          <td>object</td>
          <td></td>
        </tr>
        <tr>
          <td>list-type</td>
          <td>
            文件列表展示类型，可选值：picture（缩略图模式），card（卡片模式）
          </td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>size</td>
          <td>
            上传文件大小，单位KB
          </td>
          <td>number</td>
          <td></td>
        </tr>
        <tr>
          <td>limit</td>
          <td>
            最大允许上传个数
          </td>
          <td>number</td>
          <td></td>
        </tr>
        <tr>
          <td>visible-file-list</td>
          <td>
            是否展示文件列表
          </td>
          <td>boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">事件</h3>
    <table class="table">
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
      </thead>
      <tbody>
         <tr>
          <td>on-drop</td>
          <td>将文件拖拽至上传区域后触发</td>
          <td>
            (file: 当前拖拽文件)
          </td>
        </tr>
        <tr>
          <td>selected-files</td>
          <td>选择完文件后触发</td>
          <td>
            (files: 选择的文件)
          </td>
        </tr>
        <tr>
          <td>on-remove</td>
          <td>文件删除后触发</td>
          <td>
            (file: 删除的文件, fileList: 当前文件列表)
          </td>
        </tr>
        <tr>
          <td>on-preview</td>
          <td>点击文件列表文件时触发</td>
          <td>
            (file: 点击的文件, fileList: 当前文件列表)
          </td>
        </tr>
        <tr>
          <td>on-exceeded-size</td>
          <td>上传文件大小超过指定大小时触发</td>
          <td>
            (file: 超过指定大小的文件, fileList: 当前文件列表)
          </td>
        </tr>
        <tr>
          <td>on-exceeded</td>
          <td>上传文件数量超出指定数量时触发</td>
          <td>
            (file: 当前上传文件, fileList: 当前文件列表)
          </td>
        </tr>
        <tr>
          <td>on-success</td>
          <td>文件上传成功时触发</td>
          <td>
            (res: 服务器返回的数据，file: 上传成功的文件, fileList: 当前文件列表)
          </td>
        </tr>
        <tr>
          <td>on-error</td>
          <td>文件上传失败时触发</td>
          <td>
            (err: 错误原因，file: 上传失败的文件, fileList: 当前文件列表)
          </td>
        </tr>
        <tr>
          <td>on-progress</td>
          <td>
            文件上传时触发，支持
            <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/upload">XMLHttp​Request​.upload</a>
            的浏览器才会触发
          </td>
          <td>
            (file: 上传的文件, fileList: 当前文件列表)
          </td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">submit slot</h3>
    <p>
      submit 插槽是一个带有slot-scope 特性的插槽，接收的 prop 对象中提供
      submit方法用于上传文件。
    </p>
  </div>
</template>

<script>
import { MUpload, MButton } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";

export default {
  name: 'upload-demos',
  components: {
    MUpload,
    MButton
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      fileList: [
        {name: 'avatar0.jpg', url: 'http://img1.imgtn.bdimg.com/it/u=2627188576,3710023153&fm=26&gp=0.jpg'},
        {name: 'avatar1.jpg', url: 'http://img4.imgtn.bdimg.com/it/u=1142211080,3689420364&fm=15&gp=0.jpg'}
      ],
      code: `
        <m-upload
          action="https://img-node-server.herokuapp.com/upload" name="avatar"
          :default-file-list="fileList">
          <m-button>点击上传</m-button>
          <template v-slot:tips>
            示例代码中的上传服务部署在heroku上，所以需要科学上网才能上传成功
          </template>
        </m-upload>

        <script>
          export default {
            data() {
              return {
                fileList: [
                  {name: 'avatar0.jpg', url: 'http://img1.imgtn.bdimg.com/it/u=2627188576,3710023153&fm=26&gp=0.jpg'},
                  {name: 'avatar1.jpg', url: 'http://img4.imgtn.bdimg.com/it/u=1142211080,3689420364&fm=15&gp=0.jpg'}
                ]
              }
            }
          }
        <\/script>
      `,
      pictureCode: `
        <m-upload
          action="https://img-node-server.herokuapp.com/upload" name="avatar"
          :default-file-list="fileList" list-type="picture">
          <m-button>点击上传</m-button>
          <template v-slot:tips>
            示例代码中的上传服务部署在heroku上，所以需要科学上网才能上传成功
          </template>
        </m-upload>

        <script>
          export default {
            data() {
              return {
                fileList: [
                  {name: 'avatar0.jpg', url: 'http://img1.imgtn.bdimg.com/it/u=2627188576,3710023153&fm=26&gp=0.jpg'},
                  {name: 'avatar1.jpg', url: 'http://img4.imgtn.bdimg.com/it/u=1142211080,3689420364&fm=15&gp=0.jpg'}
                ]
              }
            }
          }
        <\/script>
      `,
      cardCode: `
        <m-upload
          action="https://img-node-server.herokuapp.com/upload" name="avatar"
          :default-file-list="fileList" list-type="card">
          <m-button>点击上传</m-button>
          <template v-slot:tips>
            示例代码中的上传服务部署在heroku上，所以需要科学上网才能上传成功
          </template>
        </m-upload>

        <script>
          export default {
            data() {
              return {
                fileList: [
                  {name: 'avatar0.jpg', url: 'http://img1.imgtn.bdimg.com/it/u=2627188576,3710023153&fm=26&gp=0.jpg'},
                  {name: 'avatar1.jpg', url: 'http://img4.imgtn.bdimg.com/it/u=1142211080,3689420364&fm=15&gp=0.jpg'}
                ]
              }
            }
          }
        <\/script>
      `,
      manualCode: `
        <m-upload
          action="https://img-node-server.herokuapp.com/upload" name="avatar"
          :default-file-list="fileList" :auto-upload="false">
          <m-button>选择图片</m-button>
          <template v-slot:tips>
            示例代码中的上传服务部署在heroku上，所以需要科学上网才能上传成功
          </template>
          <template v-slot:submit="slotProps">
            <div class="manual-upload">
              <m-button @click="slotProps.submit">手动上传</m-button>
            </div>
          </template>
        </m-upload>

        <script>
          export default {
            data() {
              return {
                fileList: [
                  {name: 'avatar0.jpg', url: 'http://img1.imgtn.bdimg.com/it/u=2627188576,3710023153&fm=26&gp=0.jpg'},
                  {name: 'avatar1.jpg', url: 'http://img4.imgtn.bdimg.com/it/u=1142211080,3689420364&fm=15&gp=0.jpg'}
                ]
              }
            }
          }
        <\/script>
      `,
      dragCode: `
        <m-upload
          action="https://img-node-server.herokuapp.com/upload" name="avatar"
          :default-file-list="fileList">
          <div class="upload-box">
            拖拽上传
          </div>
          <template v-slot:tips>
            示例代码中的上传服务部署在heroku上，所以需要科学上网才能上传成功
          </template>
        </m-upload>

        <script>
          export default {
            data() {
              return {
                fileList: [
                  {name: 'avatar0.jpg', url: 'http://img1.imgtn.bdimg.com/it/u=2627188576,3710023153&fm=26&gp=0.jpg'},
                  {name: 'avatar1.jpg', url: 'http://img4.imgtn.bdimg.com/it/u=1142211080,3689420364&fm=15&gp=0.jpg'}
                ]
              }
            }
          }
        <\/script>
      `
    }
  },
  mounted () {
    highlightCode()
  },
  updated () {
    highlightCode()
  }
}
</script>

<style scoped>
@import url('../general.css');
.manual-upload{
  display: inline-block;
  margin-left: 20px;
}
.upload-box {
  width: 200px;
  height: 100px;
  border: 1px dashed black; 
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
