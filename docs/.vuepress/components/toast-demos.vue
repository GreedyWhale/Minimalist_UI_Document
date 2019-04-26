<template>
  <div>
    <h3 class="title">基础用法</h3>
    <p>3秒后自动消失</p>
    <div class="components-wrappper">
      <p>组件方式</p>
      <m-toast ref="toast">甜食是装在另一个胃里的</m-toast>
      <m-button @click="showToast">打开消息提示</m-button>
      <p>插件方式</p>
      <m-button :options="{color: 'green', type: 'solid'}" @click="showToast1">打开消息提示</m-button>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">不同位置</h3>
    <div class="components-wrappper">
      <m-button @click="showToastWithPosition('上面的朋友', 'top')">上</m-button>
      <m-button @click="showToastWithPosition('左面的朋友', 'left')">左</m-button>
      <m-button @click="showToastWithPosition('中间的朋友', 'middle')">中</m-button>
      <m-button @click="showToastWithPosition('右面的朋友', 'right')">右</m-button>
      <m-button @click="showToastWithPosition('下面的朋友', 'bottom')">下</m-button>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(positionCode) }}</code></pre>
    </div>

    <h3 class="title">不同状态</h3>
    <div class="components-wrappper">
      <m-button @click="showToastWithStatus('成功', 'success')">成功</m-button>
      <m-button @click="showToastWithStatus('警告', 'warning')">警告</m-button>
      <m-button @click="showToastWithStatus('提示', 'tips')">提示</m-button>
      <m-button @click="showToastWithStatus('危险', 'danger')">危险</m-button>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(statusCode) }}</code></pre>
    </div>

    <h3 class="title">手动关闭</h3>
    <div class="components-wrappper">
      <m-button @click="showToastWithCloseButton">手动关闭</m-button>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(closeCode) }}</code></pre>
    </div>

    <h3 class="title">传入HTML</h3>
    <div class="components-wrappper">
      <m-button @click="showToastWithHTML">使用 HTML 片段</m-button>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(htmlCode) }}</code></pre>
    </div>

    <h3 class="title">API</h3>
    <table>
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>autoClose</td>
          <td>是否自动消失</td>
          <td>boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>delayTime</td>
          <td>显示毫秒数</td>
          <td>number</td>
          <td>3000</td>
        </tr>
        <tr>
          <td>position</td>
          <td>toast出现位置，可选值：top, left, right, bottom</td>
          <td>string</td>
          <td>top</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>图标名，可选值：tips, warning, danger, success</td>
          <td>string</td>
          <td>''</td>
        </tr>
        <tr>
          <td>enbleHtml</td>
          <td>是否开启接受HTML片段</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>showCloseButton</td>
          <td>是否展示关闭按钮</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>点击关闭按钮时，会调用传入的该函数</td>
          <td>function</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">事件</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>close</td>
          <td>toast关闭时触发</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MToast, MToastPlugin, MButton } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";
import Vue from "vue";
Vue.use(MToastPlugin);
export default {
  name: 'toast-demos',
  components: {
    MToast,
    MButton
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      code: `
        组件方式
        <m-toast ref="toast">甜食是装在另一个胃里的</m-toast>
        <m-button @click="showToast">打开消息提示</m-button>
        插件方式
        <m-button :options="{color: 'green', type: 'solid'}" @click="showToast1">打开消息提示</m-button>

        <script>
          import { MToast, MToastPlugin, MButton } from "@csr/m_ui";
          import Vue from "vue";
          Vue.use(MToastPlugin);
          export default {
            methods: {
              showToast() {
                this.$refs.toast.showToast();
              },
              showToast1() {
                this.$toast('毕竟老夫也不是什么恶魔');
              }
            }
          }
        <\/script>
      `,
      positionCode: `
        position 用于定义toast展示的位置
        <m-button @click="showToastWithPosition('上面的朋友', 'top')">上</m-button>
        <m-button @click="showToastWithPosition('左面的朋友', 'left')">左</m-button>
        <m-button @click="showToastWithPosition('中间的朋友', 'middle')">中</m-button>
        <m-button @click="showToastWithPosition('右面的朋友', 'right')">右</m-button>
        <m-button @click="showToastWithPosition('下面的朋友', 'bottom')">下</m-button>

        <script>
          import { MToast, MToastPlugin, MButton } from "@csr/m_ui";
          import Vue from "vue";
          Vue.use(MToastPlugin);
          export default {
            methods: {
              showToastWithPosition(content, position) {
                this.$toast(content, { position });
              }
            }
          }
        <\/script>
      `,
      statusCode: `
        icon 用于定义不同状态的图标
        <m-button @click="showToastWithStatus('成功', 'success')">成功</m-button>
        <m-button @click="showToastWithStatus('警告', 'warning')">警告</m-button>
        <m-button @click="showToastWithStatus('提示', 'tips')">提示</m-button>
        <m-button @click="showToastWithStatus('危险', 'danger')">危险</m-button>
        
        <script>
          import { MToast, MToastPlugin, MButton } from "@csr/m_ui";
          import Vue from "vue";
          Vue.use(MToastPlugin);
          export default {
            methods: {
              showToastWithStatus(content, icon) { this.$toast(content, { icon }); }
            }
          }
        <\/script>
      `,
      closeCode: `
        设置autoClose为false，showCloseButton 为true 即可手动关闭
        <m-button @click="showToastWithCloseButton">手动关闭</m-button>

        <script>
          import { MToast, MToastPlugin, MButton } from "@csr/m_ui";
          import Vue from "vue";
          Vue.use(MToastPlugin);
          export default {
            methods: {
              showToastWithCloseButton() {
                this.$toast('我是输给了地球的重力', { autoClose: false, showCloseButton: true });
              }
            }
          }
        <\/script>
      `,
      htmlCode: `
        设置enbleHtml 为true 即可传入HTML 片段，但是这样做会有安全风险
        <m-button @click="showToastWithHTML">使用 HTML 片段</m-button>

        <script>
          import { MToast, MToastPlugin, MButton } from "@csr/m_ui";
          import Vue from "vue";
          Vue.use(MToastPlugin);
          export default {
            methods: {
              showToastWithHTML() {
                this.$toast('<a href="https://github.com/GreedyWhale/Minimalist_UI">查看源码</a>', {
                  enbleHtml: true, autoClose: false, showCloseButton: true
                });
              }
            }
          }
        <\/script>
      `
    }
  },
  methods: {
    showToast() {
      this.$refs.toast.showToast();
    },
    showToast1() {
      this.$toast('毕竟老夫也不是什么恶魔');
    },
    showToastWithPosition(content, position) {
      this.$toast(content, { position });
    },
    showToastWithStatus(content, icon) {
      this.$toast(content, { icon });
    },
    showToastWithCloseButton() {
      this.$toast('我是输给了地球的重力', { autoClose: false, showCloseButton: true });
    },
    showToastWithHTML() {
      this.$toast('<a href="https://github.com/GreedyWhale/Minimalist_UI">查看源码</a>', {
        enbleHtml: true, autoClose: false, showCloseButton: true
      });
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
</style>
