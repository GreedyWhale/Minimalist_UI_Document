<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <ul class="buttons">
        <li>
          <m-button>按钮</m-button>
          <m-button :options="{color: 'green'}">按钮</m-button>
          <m-button :options="{color: 'blue'}">按钮</m-button>
          <m-button :options="{color: 'yellow'}">按钮</m-button>
          <m-button :options="{color: 'red'}">按钮</m-button>
          <m-button :options="{color: 'purple'}">按钮</m-button>
        </li>
        <li>
          <m-button :options="{type: 'solid'}">按钮</m-button>
          <m-button :options="{color: 'green', type: 'solid'}">按钮</m-button>
          <m-button :options="{color: 'blue', type: 'solid'}">按钮</m-button>
          <m-button :options="{color: 'yellow', type: 'solid'}">按钮</m-button>
          <m-button :options="{color: 'red', type: 'solid'}">按钮</m-button>
          <m-button :options="{color: 'purple', type: 'solid'}">按钮</m-button>
        </li>
      </ul>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(basicCode) }}</code></pre>
    </div>
    <h3 class="title">不同的圆角</h3>
    <div class="components-wrappper">
      <ul class="buttons">
        <li>
          <m-button>按钮</m-button>
          <m-button :options="{color: 'green', shape: 'rounded'}">按钮</m-button>
          <m-button :options="{color: 'blue', shape: 'pill'}">按钮</m-button>
          <m-button :options="{color: 'purple', shape: 'circle', icon: 'search'}"></m-button>
        </li>
      </ul>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(shapeCode) }}</code></pre>
    </div>
    <h3 class="title">禁用状态</h3>
    <div class="components-wrappper">
      <ul class="buttons">
        <li>
          <m-button :options="{shape: 'rounded', disable: true}">禁用</m-button>
        </li>
      </ul>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(disableCode) }}</code></pre>
    </div>
    <h3 class="title">带有图标的按钮</h3>
    <div class="components-wrappper">
      <ul class="buttons">
        <li>
          <m-button :options="{shape: 'rounded', icon:'search'}">搜索</m-button>
          <m-button :options="{icon:'delete', iconPosition: 'right', type: 'solid'}">删除</m-button>
          <m-button :options="{color: 'yellow', shape: 'rounded', isLoading: true, type: 'solid'}">加载中</m-button>
        </li>
      </ul>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(withIconCode) }}</code></pre>
    </div>
    <h3 class="title">通过slot设置图标</h3>
    <div class="components-wrappper">
      <ul class="buttons">
        <li>
          <m-button :options="{shape: 'rounded', iconPosition:'left'}">
            <template v-slot:prefix>
              <m-icon icon="upload"></m-icon>
            </template>
            自定义图标
          </m-button>
          <m-button :options="{shape: 'rounded', iconPosition:'right'}">
            自定义图标
            <template v-slot:prefix>
              <m-icon icon="date"></m-icon>
            </template>
          </m-button>
        </li>
      </ul>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(slotCode) }}</code></pre>
    </div>
    <div class="api-wrapper">
      <h3 class="title">API</h3>
      <table class="table">
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>options</td>
            <td>button的所有配置都是通过该属性设置，详细属性参考options表</td>
            <td>object</td>
            <th>
              <code>
                { 
                  type: "hollow", shape: "default", color: "black", disable: false,
                  icon: "", iconPosition: "left", isLoading: false
                }
              </code>
            </th>
          </tr>
        </tbody>
      </table>
      <h3 class="title">options</h3>
      <table class="table">
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>类型, 可选值：hollow（空心）， solid（实心）</td>
            <td>string</td>
            <td>hollow</td>
          </tr>
          <tr>
            <td>shape</td>
            <td>圆角样式, 可选值：default(直角), rounded（圆角），pill（胶囊类型），circle（圆形）</td>
            <td>string</td>
            <td>default</td>
          </tr>
          <tr>
            <td>color</td>
            <td>颜色, 可选值：black，green，blue，yellow，red，purple </td>
            <td>string</td>
            <td>black</td>
          </tr>
          <tr>
            <td>disable</td>
            <td>是否禁用, 可选值：ture，false </td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>图标名, 可选值：参考icon组件</td>
            <td>string</td>
            <td>''</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>图标位置, 可选值：left，right</td>
            <td>string</td>
            <td>left</td>
          </tr>
          <tr>
            <td>isLoading</td>
            <td>是否loading状态</td>
            <td>boolean</td>
            <td>false</td>
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
            <td>click</td>
            <td>点击button时触发的事件</td>
            <td>(event: Event)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { MButton, MIcon } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";

export default {
  name: 'button-demos',
  components: {
    MButton,
    MIcon
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      basicCode: `
        <m-button>按钮</m-button>
        <m-button :options="{color: 'green'}">按钮</m-button>
        <m-button :options="{color: 'blue'}">按钮</m-button>
        <m-button :options="{color: 'yellow'}">按钮</m-button>
        <m-button :options="{color: 'red'}">按钮</m-button>
        <m-button :options="{color: 'purple'}">按钮</m-button>

        <m-button :options="{type: 'solid'}">按钮</m-button>
        <m-button :options="{color: 'green', type: 'solid'}">按钮</m-button>
        <m-button :options="{color: 'blue', type: 'solid'}">按钮</m-button>
        <m-button :options="{color: 'yellow', type: 'solid'}">按钮</m-button>
        <m-button :options="{color: 'red', type: 'solid'}">按钮</m-button>
        <m-button :options="{color: 'purple', type: 'solid'}">按钮</m-button>
        `,
      shapeCode: `
        <m-button>按钮</m-button>
        <m-button :options="{color: 'green', shape: 'rounded'}">按钮</m-button>
        <m-button :options="{color: 'blue', shape: 'pill'}">按钮</m-button>
        <m-button :options="{color: 'purple', shape: 'circle', icon: 'search'}"></m-button>
        `,
      disableCode: `
        <m-button :options="{shape: 'rounded', disable: true}">禁用</m-button>
      `,
      withIconCode: `
        <m-button :options="{shape:'rounded', icon:'search'}">搜索</m-button>
        <m-button :options="{icon:'delete', iconPosition:'right', type:'solid'}">删除</m-button>
        <m-button :options="{color:'yellow', shape:'rounded', isLoading:true, type:'solid'}">加载中</m-button>
      `,
      slotCode: `
        <m-button :options="{shape: 'rounded', iconPosition:'left'}">
          <template v-slot:prefix>
            <m-icon icon="upload"></m-icon>
          </template>
          自定义图标
        </m-button>
        <m-button :options="{shape: 'rounded', iconPosition:'right'}">
          自定义图标
          <template v-slot:prefix>
            <m-icon icon="date"></m-icon>
          </template>
        </m-button>
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
li .m-button {
  margin-right: 10px;
}
</style>
