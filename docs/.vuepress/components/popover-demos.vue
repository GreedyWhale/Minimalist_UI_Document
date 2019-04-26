<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-popover>
        <template v-slot:content>
          <p>这虽然是游戏，但可不是闹着玩的</p>
        </template>
        <m-button :options="{shape: 'rounded'}">Click Me</m-button>
      </m-popover>
      <m-popover trigger="hover">
        <template v-slot:content>
          <p>这味道……是说谎的味道</p>
        </template>
        <m-button :options="{shape: 'rounded', color: 'red'}">Hover Me</m-button>
      </m-popover>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">不同方向</h3>
    <div class="components-wrappper">
      <m-popover trigger="hover">
        <template v-slot:content>
          <p>这虽然是游戏，但可不是闹着玩的</p>
        </template>
        <m-button :options="{shape: 'rounded'}">Hover Me</m-button>
      </m-popover>
      <m-popover trigger="hover" position="left">
        <template v-slot:content>
          <p>这味道……是说谎的味道</p>
        </template>
        <m-button :options="{shape: 'rounded', color: 'red'}">Hover Me</m-button>
      </m-popover>
      <m-popover trigger="hover" position="right">
        <template v-slot:content>
          <p>锵锵锵！冲击性的事实！</p>
        </template>
        <m-button :options="{shape: 'rounded', color: 'blue'}">Hover Me</m-button>
      </m-popover>
      <m-popover trigger="hover" position="bottom">
        <template v-slot:content>
          <p>我自始至终都是最佳状态</p>
        </template>
        <m-button :options="{shape: 'rounded', color: 'green'}">Hover Me</m-button>
      </m-popover>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(positionCode) }}</code></pre>
    </div>

    <h3 class="title">在气泡里关闭</h3>
    <div class="components-wrappper">
      <m-popover trigger="hover">
        <template v-slot:content="slotProps">
          <p>这虽然是游戏，但可不是闹着玩的</p>
          <m-button @click="slotProps.close">关闭</m-button>
        </template>
        <m-button :options="{shape: 'rounded'}">Hover Me</m-button>
      </m-popover>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(closeCode) }}</code></pre>
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
          <td>position</td>
          <td>气泡出现位置，可选值：top（上），left（左），right（右），bottom（下）</td>
          <td>string</td>
          <td>top</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>触发气泡出现方式，可选值：click（点击），hover（鼠标悬停）</td>
          <td>string</td>
          <td>click</td>
        </tr>
        <tr>
          <td>maxWidth</td>
          <td>气泡最大宽度，单位像素，传入的时候需要加上单位px</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>mountPosition</td>
          <td>气泡挂载元素的class名</td>
          <td>string</td>
          <td></td>
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
          <td>open</td>
          <td>气泡出现时触发</td>
          <td></td>
        </tr>
        <tr>
          <td>close</td>
          <td>气泡消失时触发</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MPopover, MButton } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";
import "../font";

export default {
  name: 'popover-demos',
  components: {
    MButton,
    MPopover
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      code: `
        <m-popover>
          <template v-slot:content>
            <p>这虽然是游戏，但可不是闹着玩的</p>
          </template>
          <m-button :options="{shape: 'rounded'}">Click Me</m-button>
        </m-popover>
        <m-popover trigger="hover">
          <template v-slot:content>
            <p>这味道……是说谎的味道</p>
          </template>
          <m-button :options="{shape: 'rounded', color: 'red'}">Hover Me</m-button>
        </m-popover>
      `,
      positionCode: `
        <m-popover trigger="hover">
          <template v-slot:content>
            <p>这虽然是游戏，但可不是闹着玩的</p>
          </template>
          <m-button :options="{shape: 'rounded'}">Hover Me</m-button>
        </m-popover>
        <m-popover trigger="hover" position="left">
          <template v-slot:content>
            <p>这味道……是说谎的味道</p>
          </template>
          <m-button :options="{shape: 'rounded', color: 'red'}">Hover Me</m-button>
        </m-popover>
        <m-popover trigger="hover" position="right">
          <template v-slot:content>
            <p>锵锵锵！冲击性的事实！</p>
          </template>
          <m-button :options="{shape: 'rounded', color: 'blue'}">Hover Me</m-button>
        </m-popover>
        <m-popover trigger="hover" position="bottom">
          <template v-slot:content>
            <p>我自始至终都是最佳状态</p>
          </template>
          <m-button :options="{shape: 'rounded', color: 'green'}">Hover Me</m-button>
        </m-popover>
      `,
      closeCode: `
        <m-popover trigger="hover">
          <template v-slot:content="slotProps">
            <p>这虽然是游戏，但可不是闹着玩的</p>
            <m-button @click="slotProps.close">关闭</m-button>
          </template>
          <m-button :options="{shape: 'rounded'}">Hover Me</m-button>
        </m-popover>
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
