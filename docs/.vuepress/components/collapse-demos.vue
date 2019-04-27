<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-collapse>
        <m-collapse-item title="标题1" name="content1">
          内容1
        </m-collapse-item>
        <m-collapse-item title="标题2" name="content2">
          内容2
        </m-collapse-item>
        <m-collapse-item title="标题3" name="content3">
          内容3
        </m-collapse-item>
      </m-collapse>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">默认展开</h3>
    <div class="components-wrappper">
      <m-collapse v-model="selected">
        <m-collapse-item title="标题1" name="content1">
          内容1
        </m-collapse-item>
        <m-collapse-item title="标题2" name="content2">
          内容2
        </m-collapse-item>
        <m-collapse-item title="标题3" name="content3">
          内容3
        </m-collapse-item>
      </m-collapse>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(codeSelected) }}</code></pre>
    </div>

    <h3 class="title">手风琴模式</h3>
    <div class="components-wrappper">
      <m-collapse v-model="selected1" :single="true">
        <m-collapse-item title="标题1" name="content1">
          内容1
        </m-collapse-item>
        <m-collapse-item title="标题2" name="content2">
          内容2
        </m-collapse-item>
        <m-collapse-item title="标题3" name="content3">
          内容3
        </m-collapse-item>
      </m-collapse>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(singleCode) }}</code></pre>
    </div>

    <h3 class="title">不使用v-model</h3>
    <div class="components-wrappper">
      <m-collapse :active-name="selected2">
        <m-collapse-item title="标题1" name="content1">
          内容1
        </m-collapse-item>
        <m-collapse-item title="标题2" name="content2">
          内容2
        </m-collapse-item>
        <m-collapse-item title="标题3" name="content3">
          内容3
        </m-collapse-item>
      </m-collapse>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(singleCode) }}</code></pre>
    </div>

    <h3 class="title">API</h3>
    <h3 class="title">MCollapse</h3>
    <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>v-model</td>
          <td>当前激活的面板，当激活面板改变时会同步更新</td>
          <td>array | string | number </td>
          <td></td>
        </tr>
        <tr>
          <td>active-name</td>
          <td>当前激活的面板，不使用v-model时可用该属性指定激活面板</td>
          <td>array | string | number </td>
          <td></td>
        </tr>
        <tr>
          <td>single</td>
          <td>是否开启手风琴模式，可选值：true（开启），false（不开启）</td>
          <td>boolean </td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <h3 class="title">MCollapseItem</h3>
    <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>面板的标题，必传</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>name</td>
          <td>面板的标识，必传，该属性的值唯一。</td>
          <td>string | number </td>
          <td></td>
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
          <td>change</td>
          <td>激活面板发生改变时触发</td>
          <td>{{ changeCallBackArgs }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MCollapse, MCollapseItem } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";
export default {
  name: 'collapse-demos',
  components: {
    MCollapse,
    MCollapseItem
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      selected: ['content1'],
      selected1: ['content1'],
      selected2: 'content1',
      changeCallBackArgs: '(activeNames: Array<string | number>)',
      code: `
        <m-collapse>
          <m-collapse-item title="标题1" name="content1">
            内容1
          </m-collapse-item>
          <m-collapse-item title="标题2" name="content2">
            内容2
          </m-collapse-item>
          <m-collapse-item title="标题3" name="content3">
            内容3
          </m-collapse-item>
        </m-collapse>
      `,
      codeSelected: `
        <m-collapse v-model="selected">
          <m-collapse-item title="标题1" name="content1">
            内容1
          </m-collapse-item>
          <m-collapse-item title="标题2" name="content2">
            内容2
          </m-collapse-item>
          <m-collapse-item title="标题3" name="content3">
            内容3
          </m-collapse-item>
        </m-collapse>

        <script>
          export default {
            data() {
              return { selected: ['content1'] }
            }
          }
        <\/script>
      `,
      singleCode: `
        <m-collapse v-model="selected" single="true">
          <m-collapse-item title="标题1" name="content1">
            内容1
          </m-collapse-item>
          <m-collapse-item title="标题2" name="content2">
            内容2
          </m-collapse-item>
          <m-collapse-item title="标题3" name="content3">
            内容3
          </m-collapse-item>
        </m-collapse>

        <script>
          export default {
            data() {
              return { selected: ['content1'] }
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
