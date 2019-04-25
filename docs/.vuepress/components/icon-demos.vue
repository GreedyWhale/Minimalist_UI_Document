<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-icon icon="date"></m-icon>
      <m-icon icon="double-arrow-right"></m-icon>
      <m-icon icon="double-arrow-left"></m-icon>
      <m-icon icon="add"></m-icon>
      <m-icon icon="delete"></m-icon>
      <m-icon icon="preview"></m-icon>
      <m-icon icon="file"></m-icon>
      <m-icon icon="upload"></m-icon>
      <m-icon icon="caret-down"></m-icon>
      <m-icon icon="caret-up"></m-icon>
      <m-icon icon="more"></m-icon>
      <m-icon icon="left"></m-icon>
      <m-icon icon="right"></m-icon>
      <m-icon icon="success"></m-icon>
      <m-icon icon="danger"></m-icon>
      <m-icon icon="warning"></m-icon>
      <m-icon icon="tips"></m-icon>
      <m-icon icon="close"></m-icon>
      <m-icon icon="search"></m-icon>
      <m-icon icon="loading"></m-icon>
      <m-icon :is-loading="true"></m-icon>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>
    <h3 class="title">自定义icon</h3>
    <div class="components-wrappper">
      <m-icon>
        <svg class="icon-font" aria-hidden="true">
          <use xlink:href="#icon-funny"></use>
        </svg>
      </m-icon>
      <pre><code>{{ trimFromCodeStr(customCode) }}</code></pre>
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
          <td>icon</td>
          <td>用于定义icon的样式, 可选值：参考基础用法</td>
          <td>string</td>
          <td>''</td>
        </tr>
        <tr>
          <td>isLoading</td>
          <td>是否loading状态，可选值：true，false</td>
          <td>boolean</td>
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
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>on-click</td>
          <td>点击icon时触发</td>
          <td>(event: Event)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MIcon } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";
import "../font";
export default {
  components: {
    MIcon
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      code: `
        通过icon属性来选择不同的icon
        <m-icon icon="date"></m-icon>
        <m-icon icon="double-arrow-right"></m-icon>
        <m-icon icon="double-arrow-left"></m-icon>
        <m-icon icon="add"></m-icon>
        <m-icon icon="delete"></m-icon>
        <m-icon icon="preview"></m-icon>
        <m-icon icon="file"></m-icon>
        <m-icon icon="upload"></m-icon>
        <m-icon icon="caret-down"></m-icon>
        <m-icon icon="caret-up"></m-icon>
        <m-icon icon="more"></m-icon>
        <m-icon icon="left"></m-icon>
        <m-icon icon="right"></m-icon>
        <m-icon icon="success"></m-icon>
        <m-icon icon="danger"></m-icon>
        <m-icon icon="warning"></m-icon>
        <m-icon icon="tips"></m-icon>
        <m-icon icon="close"></m-icon>
        <m-icon icon="search"></m-icon>
        <m-icon icon="loading"></m-icon>
        <m-icon :is-loading="true"></m-icon>
      `,
      customCode: `
        这里使用的是iconfont的symbol引用方式自定义图标，可以使用其他方式。
        <m-icon>
          <svg class="icon-font" aria-hidden="true">
            <use xlink:href="#icon-funny"></use>
          </svg>
        </m-icon>
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
.m-icon {
  margin-right: 25px;
  margin-bottom: 20px;
  font-size: 32px;
}
.icon-font {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: green;
}
</style>
