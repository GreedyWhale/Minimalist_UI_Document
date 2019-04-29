<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-dialog v-model="visibleDialog" title="标题" zIndex="1000">
        内容
      </m-dialog>
      <m-button @click="visibleDialog = !visibleDialog">打开对话框</m-button>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">自定义按钮文案</h3>
    <div class="components-wrappper">
      <m-dialog
        v-model="visibleDialog1" title="标题" zIndex="1000" 
        confirm-button-text="朕，知道了" cancel-button-text="退下">
        内容
      </m-dialog>
      <m-button @click="visibleDialog1 = !visibleDialog1">打开对话框</m-button>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(buttonCode) }}</code></pre>
    </div>

    <h3 class="title">自定义头部</h3>
    <div class="components-wrappper">
      <m-dialog v-model="visibleDialog2" zIndex="1000" >
        <template v-slot:header>
          <div class="custom-header">
            <m-icon>
              <svg class="icon-font" aria-hidden="true"><use xlink:href="#icon-dog"></use></svg>
            </m-icon>
            自定义头部
          </div>
        </template>
        内容
      </m-dialog>
      <m-button @click="visibleDialog2 = !visibleDialog2">打开对话框</m-button>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(customCode) }}</code></pre>
    </div>

    <h3 class="title">隐藏按钮</h3>
    <div class="components-wrappper">
      <m-dialog v-model="visibleDialog3" zIndex="1000" title="标题" :visible-footer="false">
        内容
        <template v-slot:footer>
          <div @click="visibleDialog3 = !visibleDialog3">这是一段可以关闭弹窗的文字</div>
        </template>
      </m-dialog>
      <m-button @click="visibleDialog3 = !visibleDialog3">打开对话框</m-button>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(visibleCode) }}</code></pre>
    </div>

    <h3 class="title">延迟关闭</h3>
    <div class="components-wrappper">
      <m-dialog
        v-model="visibleDialog4" zIndex="1000" :visible-footer="false"
        :async="true">
        <template v-slot:header>
          <div class="custom-header">
            <m-icon>
              <svg class="icon-font" aria-hidden="true"><use xlink:href="#icon-dog"></use></svg>
            </m-icon>
            自定义头部
          </div>
        </template>
        内容
        <template v-slot:footer>
          <m-button :options="{isLoading: loading}" @click="closeDialog">关闭</m-button>
        </template>
      </m-dialog>
      <m-button @click="visibleDialog4 = !visibleDialog4">打开对话框</m-button>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(asyncCode) }}</code></pre>
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
          <td>v-model</td>
          <td>控制弹窗展示和隐藏</td>
          <td>boolean</td>
          <td></td>
        </tr>
        <tr>
          <td>title</td>
          <td>弹窗标题</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>zIndex</td>
          <td>弹窗的z-index值</td>
          <td>string</td>
          <td>1</td>
        </tr>
        <tr>
          <td>visibleFooter</td>
          <td>显示确认/取消按钮</td>
          <td>boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>async</td>
          <td>是否异步关闭</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>confirm-button-text</td>
          <td>确定按钮文字</td>
          <td>string</td>
          <td>确定</td>
        </tr>
        <tr>
          <td>cancel-button-text</td>
          <td>取消按钮文字</td>
          <td>string</td>
          <td>取消</td>
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
          <td>on-close</td>
          <td>点击关闭按钮时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>on-cancel</td>
          <td>点击取消按钮时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>on-confirm</td>
          <td>点击确定按钮时触发</td>
          <td>(event: Event)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MDialog, MButton } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";
import "../font";

export default {
  name: 'dialog-demos',
  components: {
    MDialog,
    MButton
  },
  methods: {
    closeDialog() {
      if(this.closeDialogTimer) {
        return;
      }
      this.loading = true;
      this.closeDialogTimer = setTimeout(() => {
        this.loading = false;
        this.visibleDialog4 = false;
        this.closeDialogTimer = null;
      }, 3000)
    },
  },
  beforeDestroy() {
    clearTimeout(this.closeDialogTimer)
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      visibleDialog: false,
      visibleDialog1: false,
      visibleDialog2: false,
      visibleDialog3: false,
      visibleDialog4: false,
      loading: false,
      closeDialogTimer: null,
      code: `
        <m-dialog v-model="visibleDialog" title="标题" zIndex="1000">
          内容
        </m-dialog>
        <m-button @click="visibleDialog = !visibleDialog">打开对话框</m-button>

        <script>
          export default {
            data() {
              return {
                visibleDialog: false
              }
            }
          }
        <\/script>
      `,
      buttonCode: `
        <m-dialog
          v-model="visibleDialog" title="标题" zIndex="1000"
          confirm-button-text="朕，知道了" cancel-button-text="退下">
          内容
        </m-dialog>
        <m-button @click="visibleDialog = !visibleDialog">打开对话框</m-button>

        <script>
          export default {
            data() {
              return {
                visibleDialog: false
              }
            }
          }
        <\/script>
      `,
      customCode: `
        <m-dialog v-model="visibleDialog" zIndex="1000" >
          <template v-slot:header>
            <div class="custom-header">
              <m-icon>
                <svg class="icon-font" aria-hidden="true"><use xlink:href="#icon-dog"></use></svg>
              </m-icon>
              自定义头部
            </div>
          </template>
          内容
        </m-dialog>
        <m-button @click="visibleDialog = !visibleDialog">打开对话框</m-button>

        <script>
          export default {
            data() {
              return {
                visibleDialog: false
              }
            }
          }
        <\/script>
      `,
      visibleCode: `
        <m-dialog v-model="visibleDialog3" zIndex="1000" title="标题" :visible-footer="false">
          内容
          <template v-slot:footer>
            <div @click="visibleDialog = !visibleDialog">这是一段可以关闭弹窗的文字</div>
          </template>
        </m-dialog>
        <m-button @click="visibleDialog = !visibleDialog">打开对话框</m-button>

        <script>
          export default {
            data() {
              return {
                visibleDialog: false
              }
            }
          }
        <\/script>        
      `,
      asyncCode: `
        <m-dialog
          v-model="visibleDialog" zIndex="1000" :visible-footer="false"
          :async="true">
          <template v-slot:header>
            <div class="custom-header">
              <m-icon>
                <svg class="icon-font" aria-hidden="true"><use xlink:href="#icon-dog"></use></svg>
              </m-icon>
              自定义头部
            </div>
          </template>
          内容
          <template v-slot:footer>
            <m-button :options="{isLoading: loading}" @click="closeDialog">关闭</m-button>
          </template>
        </m-dialog>
        <m-button @click="visibleDialog = !visibleDialog">打开对话框</m-button>

        <script>
          export default {
            data() {
              return {
                visibleDialog: false,
                loading: false,
                closeDialogTimer: null,
              }
            },
            methods: {
              closeDialog() {
                if(this.closeDialogTimer) {
                  return;
                }
                this.loading = true;
                this.closeDialogTimer = setTimeout(() => {
                  this.loading = false;
                  this.visibleDialog = false;
                  this.closeDialogTimer = null;
                }, 3000)
              }
            },
            beforeDestroy() {
              clearTimeout(this.closeDialogTimer)
            },
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
.custom-header {
  color: green;
}
</style>
