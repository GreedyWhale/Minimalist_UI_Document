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
    <h3 class="title">自定义图标</h3>
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
          <td>用于定义图标的样式, 可选值：参考基础用法</td>
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
          <td>点击图标时触发</td>
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
  name: 'icon-demos',
  components: {
    MIcon
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      code: `
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
  color: green;
}
</style>
