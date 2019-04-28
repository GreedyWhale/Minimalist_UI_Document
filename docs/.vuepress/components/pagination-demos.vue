<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <p>页数较少时的效果</p>
      <m-pagination :total="7"></m-pagination>
      <p>页数较多时的效果</p>
      <m-pagination :total="100"></m-pagination>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">默认页码</h3>
    <div class="components-wrappper">
      <m-pagination :total="100" :default-page="20"></m-pagination>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(defaultCode) }}</code></pre>
    </div>

    <h3 class="title">改变点击...切换的页数</h3>
    <div class="components-wrappper">
      <m-pagination :total="100" :step="10"></m-pagination>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(stepCode) }}</code></pre>
    </div>

    <h3 class="title">每页条数</h3>
    <div class="components-wrappper">
      <m-pagination :total="100" :page-size="10"></m-pagination>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(sizeCode) }}</code></pre>
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
          <td>total</td>
          <td>页码总数量，必传</td>
          <td>number</td>
          <td></td>
        </tr>
        <tr>
          <td>default-page</td>
          <td>默认选中页码，支持.sync修饰符</td>
          <td>number</td>
          <td>1</td>
        </tr>
        <tr>
          <td>page-size</td>
          <td>每页条数</td>
          <td>number</td>
          <td>7</td>
        </tr>
        <tr>
          <td>step</td>
          <td>点击...按钮切换页码的数量</td>
          <td>number</td>
          <td>5</td>
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
          <td>on-change</td>
          <td>选中页码改变时触发</td>
          <td>
            当前页码: number, <br>
            当前页码在展示的页码中的下标：number
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MPagination } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";


export default {
  name: 'pagination-demos',
  components: {
    MPagination
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      code: `
        <div>
          <p>页数较少时的效果</p>
          <m-pagination :total="7"></m-pagination>
          <p>页数较多时的效果</p>
          <m-pagination :total="100"></m-pagination>
        </div>
      `,
      defaultCode: `
        <div>
          <p>设置默认页码为20</p>
          <m-pagination :total="100" :default-page="20"></m-pagination>
        </div>
      `,
      stepCode: `
        <div>
          <p>设置每次点击...切换10页</p>
          <m-pagination :total="100" :step="10"></m-pagination>
        </div>
      `,
      sizeCode: `
        <div>
          <p>每页条数为10</p>
          <m-pagination :total="100" :page-size="10"></m-pagination>
        </div>
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
