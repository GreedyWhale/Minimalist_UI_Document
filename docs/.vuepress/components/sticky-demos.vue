<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <div id="sticky-wrapper" class="wrapper">
        <p>试着向下滚动</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <m-sticky tag-id="sticky-wrapper">
          <div class="sticky-element">我是sticky定位的元素</div>
        </m-sticky>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </div>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">指定sticky定位的元素离顶部的距离</h3>
    <div class="components-wrappper">
      <div id="sticky-wrapper1" class="wrapper">
        <p>试着向下滚动</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <m-sticky tag-id="sticky-wrapper1" :distance="100">
          <div class="sticky-element">我是sticky定位的元素</div>
        </m-sticky>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </div>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(distanceCode) }}</code></pre>
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
          <td>tagId</td>
          <td>
            指定监听滚动事件的元素id，指定的元素需要position: relative定位。
            如果不传则监听window。
          </td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>distance</td>
          <td>sticky定位元素离顶部的距离，单位是px，不需要传单位</td>
          <td>number</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MSticky } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";

export default {
  name: 'sticky-demos',
  components: {
    MSticky
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      code: `
        <div id="sticky-wrapper" class="wrapper">
          <p>试着向下滚动</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <m-sticky tag-id="sticky-wrapper">
            <div class="sticky-element">我是sticky定位的元素</div>
          </m-sticky>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </div>
        <style scoped>
        .wrapper {
          position: relative;
          overflow: auto;
          height: 200px;
        }
        .sticky-element {
          background: pink;
        }
        </style>
      `,
      distanceCode:`
        <div id="sticky-wrapper" class="wrapper">
          <p>试着向下滚动</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <m-sticky tag-id="sticky-wrapper" :distance="100">
            <div class="sticky-element">我是sticky定位的元素</div>
          </m-sticky>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </div>
        <style scoped>
        .wrapper {
          position: relative;
          overflow: auto;
          height: 200px;
        }
        .sticky-element {
          background: pink;
        }
        </style>
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
.wrapper {
  position: relative;
  overflow: auto;
  height: 200px;
}
.sticky-element {
  background: pink;
}
</style>
