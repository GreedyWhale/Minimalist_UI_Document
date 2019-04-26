<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-row>
        <m-col :span="24"><div class="box dark"></div></m-col>
      </m-row>
      <m-row>
        <m-col :span="12"><div class="box dark"></div></m-col>
        <m-col :span="12"><div class="box light"></div></m-col>
      </m-row>
      <m-row>
        <m-col :span="8"><div class="box light"></div></m-col>
        <m-col :span="8"><div class="box dark"></div></m-col>
        <m-col :span="8"><div class="box light"></div></m-col>
      </m-row>
      <m-row>
        <m-col :span="6"><div class="box light"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box light"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
      </m-row>
      <m-row>
        <m-col :span="4"><div class="box light"></div></m-col>
        <m-col :span="4"><div class="box dark"></div></m-col>
        <m-col :span="4"><div class="box light"></div></m-col>
        <m-col :span="4"><div class="box dark"></div></m-col>
        <m-col :span="4"><div class="box light"></div></m-col>
        <m-col :span="4"><div class="box dark"></div></m-col>
      </m-row>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">分栏间隔</h3>
    <div class="components-wrappper">
      <m-row :gutter="20">
        <m-col :span="8"><div class="box dark"></div></m-col>
        <m-col :span="8"><div class="box dark"></div></m-col>
        <m-col :span="8"><div class="box dark"></div></m-col>
      </m-row>
      <m-row :gutter="10">
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
      </m-row>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(gutterCode) }}</code></pre>
    </div>

    <h3 class="title">分栏偏移</h3>
    <div class="components-wrappper">
      <m-row>
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6" :offset="6"><div class="box dark"></div></m-col>
      </m-row>
      <m-row>
        <m-col :span="6" :offset="6"><div class="box dark"></div></m-col>
        <m-col :span="6" :offset="6"><div class="box dark"></div></m-col>
      </m-row>
      <m-row>
        <m-col :span="12" :offset="12"><div class="box dark"></div></m-col>
      </m-row>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(offsetCode) }}</code></pre>
    </div>

    <h3 class="title">对齐方式</h3>
    <div class="components-wrappper">
      <m-row :gutter="10" align="left">
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
      </m-row>
      <m-row :gutter="10" align="right">
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
      </m-row>
      <m-row :gutter="10" align="center">
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
      </m-row>
      <m-row :gutter="10" align="space-between">
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
      </m-row>
      <m-row :gutter="10" align="space-around">
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
        <m-col :span="6"><div class="box dark"></div></m-col>
      </m-row>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(alignCode) }}</code></pre>
    </div>

    <h3 class="title">响应式布局</h3>
    <div class="components-wrappper">
      <m-row :gutter="10" align="left">
        <m-col
          :sm="{span: 24}" :md="{span: 4}" :lg="{span: 6}"
          :xl="{span: 8}" :xxl="{span: 10}"
        >
          <div class="box dark"></div>
        </m-col>
        <m-col
          :sm="{span: 24}" :md="{span: 18, offset: 2}"
          :lg="{span: 15, offset: 3}" :xl="{span: 12, offset: 4}"
          :xxl="{span: 8, offset: 6}"
        >
          <div class="box dark"></div>
        </m-col>
      </m-row>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(responsiveCode) }}</code></pre>
    </div>

    <h3 class="title">API</h3>
    <h3>MRow</h3>
    <table>
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>gutter</td>
          <td>栅格间隔</td>
          <td>string | number</td>
          <td></td>
        </tr>
        <tr>
          <td>align</td>
          <td>对齐方式，可选值：left，right，center，space-between，space-around </td>
          <td>string</td>
          <td></td>
        </tr>
      </tbody>
    </table>
     <h3>MCol</h3>
     <table>
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>span</td>
          <td>栅格占据的列数</td>
          <td>string | number</td>
          <td>24</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>栅格偏移列数</td>
          <td>number | string</td>
          <td></td>
        </tr>
        <tr>
          <td>sm</td>
          <td>≥576px 响应式栅格占据的列数和偏移列数，例如：{span: 12, offset: 12}</td>
          <td>object</td>
          <td></td>
        </tr>
        <tr>
          <td>md</td>
          <td>≥768px 响应式栅格占据的列数和偏移列数，例如：{span: 12, offset: 12}</td>
          <td>object</td>
          <td></td>
        </tr>
        <tr>
          <td>lg</td>
          <td>≥992px 响应式栅格占据的列数和偏移列数，例如：{span: 12, offset: 12}</td>
          <td>object</td>
          <td></td>
        </tr>
        <tr>
          <td>xl</td>
          <td>≥1200px 响应式栅格占据的列数和偏移列数，例如：{span: 12, offset: 12}</td>
          <td>object</td>
          <td></td>
        </tr>
        <tr>
          <td>xxl</td>
          <td>≥1600px 响应式栅格占据的列数和偏移列数，例如：{span: 12, offset: 12}</td>
          <td>object</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MRow, MCol } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";

export default {
  name: 'grid-demos',
  components: {
    MRow,
    MCol
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      code: `
        <m-row>
          <m-col :span="24"><div class="box dark"></div></m-col>
        </m-row>
        <m-row>
          <m-col :span="12"><div class="box dark"></div></m-col>
          <m-col :span="12"><div class="box light"></div></m-col>
        </m-row>
        <m-row>
          <m-col :span="8"><div class="box light"></div></m-col>
          <m-col :span="8"><div class="box dark"></div></m-col>
          <m-col :span="8"><div class="box light"></div></m-col>
        </m-row>
        <m-row>
          <m-col :span="6"><div class="box light"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box light"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
        </m-row>
        <m-row>
          <m-col :span="4"><div class="box light"></div></m-col>
          <m-col :span="4"><div class="box dark"></div></m-col>
          <m-col :span="4"><div class="box light"></div></m-col>
          <m-col :span="4"><div class="box dark"></div></m-col>
          <m-col :span="4"><div class="box light"></div></m-col>
          <m-col :span="4"><div class="box dark"></div></m-col>
        </m-row>
      `,
      gutterCode: `
        <m-row :gutter="20">
          <m-col :span="8"><div class="box dark"></div></m-col>
          <m-col :span="8"><div class="box dark"></div></m-col>
          <m-col :span="8"><div class="box dark"></div></m-col>
        </m-row>
        <m-row :gutter="10">
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
        </m-row>
      `,
      offsetCode: `
        <m-row>
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6" :offset="6"><div class="box dark"></div></m-col>
        </m-row>
        <m-row>
          <m-col :span="6" :offset="6"><div class="box dark"></div></m-col>
          <m-col :span="6" :offset="6"><div class="box dark"></div></m-col>
        </m-row>
        <m-row>
          <m-col :span="12" :offset="12"><div class="box dark"></div></m-col>
        </m-row>
      `,
      alignCode: `
        <m-row :gutter="10" align="left">
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
        </m-row>
        <m-row :gutter="10" align="right">
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
        </m-row>
        <m-row :gutter="10" align="center">
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
        </m-row>
        <m-row :gutter="10" align="space-between">
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
        </m-row>
        <m-row :gutter="10" align="space-around">
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
          <m-col :span="6"><div class="box dark"></div></m-col>
        </m-row>
      `,
      responsiveCode: `
        <m-row>
          <m-col
            :sm="{span: 24}" :md="{span: 4}" :lg="{span: 6}"
            :xl="{span: 8}" :xxl="{span: 10}"
          >
            <div class="box dark"></div>
          </m-col>
          <m-col
            :sm="{span: 24}" :md="{span: 18, offset: 2}"
            :lg="{span: 15, offset: 3}" :xl="{span: 12, offset: 4}"
            :xxl="{span: 8, offset: 6}"
          >
            <div class="box dark"></div>
          </m-col>
        </m-row>`
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
.box {
  height: 40px;
  border-radius: 4px;
  margin-bottom: 20px;
}
.dark {
  background: #336b87;
}
.light {
  background: #90afc5;
}
</style>
