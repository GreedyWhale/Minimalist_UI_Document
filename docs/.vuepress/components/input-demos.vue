<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-input v-model="value" placeholder="请输入内容"></m-input>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">禁用状态</h3>
    <div class="components-wrappper">
      <m-input v-model="value" placeholder="请输入内容" disabled></m-input>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(diablecode) }}</code></pre>
    </div>

    <h3 class="title">可清空</h3>
    <div class="components-wrappper">
      <m-input v-model="value" placeholder="请输入内容" clearable></m-input>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(diablecode) }}</code></pre>
    </div>

    <h3 class="title">带有Icon</h3>
    <div class="components-wrappper">
      <div>
        <h5>属性方式：</h5>
        <m-input v-model="value" placeholder="请输入内容" prefix-icon="search"></m-input>
        <m-input v-model="value" placeholder="请输入内容" clearable suffix-icon="delete"></m-input>
      </div>
      <div>
        <h5>slot方式：</h5>
        <m-input v-model="value" placeholder="请输入内容">
          <template v-slot:prefixIcon>
            <m-icon icon="search"></m-icon>
          </template>
        </m-input>
        <m-input v-model="value" placeholder="请输入内容" clearable>
          <template v-slot:suffixIcon>
            <m-icon icon="delete"></m-icon>
          </template>
        </m-input>
      </div>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(iconCode) }}</code></pre>
    </div>

    <h3 class="title">带有按钮</h3>
    <div class="components-wrappper">
      <m-input v-model="value" placeholder="请输入内容" prefix-button-text="搜索" prefix-button-icon="search"></m-input>
      <m-input v-model="value" placeholder="请输入内容" suffix-button-text="删除" suffix-button-icon="delete"></m-input>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(buttonCode) }}</code></pre>
    </div>

    <h3 class="title">带有文字</h3>
    <div class="components-wrappper">
      <m-input v-model="value" placeholder="请输入内容">
        <template v-slot:prefixContent>
          HTTP://
        </template>
      </m-input>
      <div class="divider"></div>
      <m-input v-model="value" placeholder="请输入内容">
        <template v-slot:suffixContent>
          .COM
        </template>
      </m-input>
      <div class="divider"></div>
      <m-input v-model="value" placeholder="请输入内容">
        <template v-slot:prefixContent>
          HTTP://
        </template>
        <template v-slot:suffixContent>
          .COM
        </template>
      </m-input>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(contentCode) }}</code></pre>
    </div>

    <h3 class="title">带有提示信息</h3>
    <div class="components-wrappper">
      <m-input v-model="value" placeholder="请输入内容" prompt-msg="用户名长度在2~8个字符"></m-input>
      <div class="divider"></div>
      <m-input v-model="value" placeholder="请输入内容" prompt-msg="密码长度在10~12个字符" prompt-msg-position="down"></m-input>
      <div class="divider"></div>
      <m-input v-model="value" placeholder="请输入内容" prompt-msg="邮箱地址错误" :is-error-msg="true">
      </m-input>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(promptCode) }}</code></pre>
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
          <td>type</td>
          <td>input类型，可选值：参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input">input 类型</a></td>
          <td>string</td>
          <td>text</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>用于提示的占位符文本</td>
          <td>string</td>
          <td>''</td>
        </tr>
        <tr>
          <td>maxlength</td>
          <td>可输入字符的最大长度</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用，可选值：true， false</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>是否展示清除按钮，可选值：true, false</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>prompt-msg</td>
          <td>输入框外的提示信息</td>
          <td>string</td>
          <td>''</td>
        </tr>
        <tr>
          <td>prompt-msg-position</td>
          <td>输入框外的提示信息的位置，可选值：'down'，默认展示在右边</td>
          <td>string</td>
          <td>''</td>
        </tr>
        <tr>
          <td>is-error-msg</td>
          <td>是否使用错误提示样式展示输入框外的提示信息，可选值：true， false</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>suffix-icon</td>
          <td>包含在输入框内部的后缀icon，可选值：参考MIcon组件</td>
          <td>string</td>
          <td>''</td>
        </tr>
        <tr>
          <td>prefix-icon</td>
          <td>包含在输入框内部的前缀icon，可选值：参考MIcon组件</td>
          <td>string</td>
          <td>''</td>
        </tr>
        <tr>
          <td>suffix-button-text</td>
          <td>输入框后缀按钮文案</td>
          <td>string</td>
          <td>''</td>
        </tr>
        <tr>
          <td>suffix-button-icon</td>
          <td>输入框后缀按钮icon，可选值：参考MIcon组件</td>
          <td>string</td>
          <td>''</td>
        </tr>
        <tr>
          <td>prefix-button-text</td>
          <td>输入框前缀按钮文案</td>
          <td>string</td>
          <td>''</td>
        </tr>
        <tr>
          <td>prefix-button-icon</td>
          <td>输入框前缀按钮icon，可选值：参考MIcon组件</td>
          <td>string</td>
          <td>''</td>
        </tr>
        <tr>
          <td>v-model</td>
          <td>同vue的v-model功能，可同步更新v-model中的值</td>
          <td>string</td>
          <td>''</td>
        </tr>
      </tbody>
    </table>

    <h3 class="">事件</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>input</td>
          <td>在input输入时触发</td>
          <td>(value: string | number)</td>
        </tr>
        <tr>
          <td>change</td>
          <td>在input值改变时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>在Input失去焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>在Input获得焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>click-icon</td>
          <td>在点击前后缀 icon 时触发</td>
          <td>(event: Event, value: string | number)</td>
        </tr>
        <tr>
          <td>click-button</td>
          <td>在点击前后缀 按钮 时触发</td>
          <td>(event: Event, value: string | number)</td>
        </tr>
        <tr>
          <td>on-enter</td>
          <td>在按下回车键后触发</td>
          <td>(value: string | number)</td>
        </tr>
        <tr>
          <td>clear</td>
          <td>在点击清除按钮时触发</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MInput, MIcon } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";
export default {
  components: {
    MInput,
    MIcon
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      value: '',
      code: `
        <m-input v-model="value" placeholder="请输入内容"></m-input>

        <script>
          export default {
            data() {
              return { value: '' }
            }
          }
        <\/script>
      `,
      diablecode: `
        通过 disabled 控制
        <m-input v-model="value" placeholder="请输入内容" disabled></m-input>

        <script>
          export default {
            data() {
              return { value: '' }
            }
          }
        <\/script>
      `,
      clearableCode: `
        通过 clearable 控制
        <m-input v-model="value" placeholder="请输入内容" clearable></m-input>

        <script>
          export default {
            data() {
              return { value: '' }
            }
          }
        <\/script>
      `,
      iconCode: `
        属性方式 prefix-icon（前缀图标）suffix-icon（后缀图标）
        <m-input v-model="value" placeholder="请输入内容" prefix-icon="search"></m-input>
        <m-input v-model="value" placeholder="请输入内容" clearable suffix-icon="delete"></m-input>
        
        slot方式 v-slot:prefixIcon （前缀图标）v-slot:suffixIcon（后缀图标）
        <m-input v-model="value" placeholder="请输入内容">
          <template v-slot:prefixIcon>
            <m-icon icon="search"></m-icon>
          </template>
        </m-input>
        <m-input v-model="value" placeholder="请输入内容" clearable>
          <template v-slot:suffixIcon>
            <m-icon icon="delete"></m-icon>
          </template>
        </m-input>

        <script>
          export default {
            data() {
              return { value: '' }
            }
          }
        <\/script>
      `,
      buttonCode: `
        <m-input v-model="value" placeholder="请输入内容" prefix-button-text="搜索" prefix-button-icon="search"></m-input>
        <m-input v-model="value" placeholder="请输入内容" suffix-button-text="删除" suffix-button-icon="delete"></m-input>

        <script>
          export default {
            data() {
              return { value: '' }
            }
          }
        <\/script>
      `,
      contentCode: `
        <m-input v-model="value" placeholder="请输入内容">
          <template v-slot:prefixContent>
            HTTP://
          </template>
        </m-input>
        
        <m-input v-model="value" placeholder="请输入内容">
          <template v-slot:suffixContent>
            .COM
          </template>
        </m-input>
  
        <m-input v-model="value" placeholder="请输入内容">
          <template v-slot:prefixContent>
            HTTP://
          </template>
          <template v-slot:suffixContent>
            .COM
          </template>
        </m-input>

        <script>
          export default {
            data() {
              return { value: '' }
            }
          }
        <\/script>
      `,
      promptCode: `
        提示内容：prompt-msg ， 提示位置 prompt-msg-position，是否为错误提示 is-error-msg
        <m-input v-model="value" placeholder="请输入内容" prompt-msg="用户名长度在2~8个字符"></m-input>
        <m-input v-model="value" placeholder="请输入内容" prompt-msg="密码长度在10~12个字符" prompt-msg-position="down"></m-input>
        <m-input v-model="value" placeholder="请输入内容" prompt-msg="邮箱地址错误" :is-error-msg="true"></m-input>

        <script>
          export default {
            data() {
              return { value: '' }
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
</style>
