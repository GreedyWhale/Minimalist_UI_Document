<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-menu>
        <m-menu-item name="menu-level-1-1">菜单一</m-menu-item>
        <m-sub-menu name="menu-level-1-2">
          <template v-slot:title>
            菜单二
          </template>
          <m-menu-item name="menu-level-2-1">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-2">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-3">二级菜单</m-menu-item>
        </m-sub-menu>
        <m-menu-item name="menu-level-1-3" :disabled="true">菜单三</m-menu-item>
        <m-sub-menu name="menu-level-1-4">
          <template v-slot:title>
            菜单四
          </template>
          <m-menu-item name="menu-level-2-4">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-5">二级菜单</m-menu-item>
          <m-sub-menu name="menu-level-2-6">
            <template v-slot:title>
              二级菜单
            </template>
            <m-menu-item name="menu-level-3-1">三级菜单</m-menu-item>
            <m-menu-item name="menu-level-3-2">三级菜单</m-menu-item>
          </m-sub-menu>
        </m-sub-menu>
      </m-menu>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">点击方式展开下级菜单</h3>
    <div class="components-wrappper">
      <m-menu sub-menu-trigger="click">
        <m-menu-item name="menu-level-1-1">菜单一</m-menu-item>
        <m-sub-menu name="menu-level-1-2">
          <template v-slot:title>
            菜单二
          </template>
          <m-menu-item name="menu-level-2-1">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-2">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-3">二级菜单</m-menu-item>
        </m-sub-menu>
        <m-menu-item name="menu-level-1-3" :disabled="true">菜单三</m-menu-item>
        <m-sub-menu name="menu-level-1-4">
          <template v-slot:title>
            菜单四
          </template>
          <m-menu-item name="menu-level-2-4">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-5">二级菜单</m-menu-item>
          <m-sub-menu name="menu-level-2-6">
            <template v-slot:title>
              二级菜单
            </template>
            <m-menu-item name="menu-level-3-1">三级菜单</m-menu-item>
            <m-menu-item name="menu-level-3-2">三级菜单</m-menu-item>
          </m-sub-menu>
        </m-sub-menu>
      </m-menu>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(clickCode) }}</code></pre>
    </div>

    <h3 class="title">纵向菜单</h3>
    <div class="components-wrappper">
      <m-menu :vertical="true">
        <m-menu-item name="menu-level-1-1">菜单一</m-menu-item>
        <m-sub-menu name="menu-level-1-2">
          <template v-slot:title>
            菜单二
          </template>
          <m-menu-item name="menu-level-2-1">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-2">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-3">二级菜单</m-menu-item>
        </m-sub-menu>
        <m-menu-item name="menu-level-1-3" :disabled="true">菜单三</m-menu-item>
        <m-sub-menu name="menu-level-1-4">
          <template v-slot:title>
            菜单四
          </template>
          <m-menu-item name="menu-level-2-4">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-5">二级菜单</m-menu-item>
          <m-sub-menu name="menu-level-2-6">
            <template v-slot:title>
              二级菜单
            </template>
            <m-menu-item name="menu-level-3-1">三级菜单</m-menu-item>
            <m-menu-item name="menu-level-3-2">三级菜单</m-menu-item>
          </m-sub-menu>
        </m-sub-menu>
      </m-menu>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(verticalCode) }}</code></pre>
    </div>

    <h3 class="title">手风琴模式</h3>
    <div class="components-wrappper">
      <m-menu :vertical="true" :accordion="true">
        <m-menu-item name="menu-level-1-1">菜单一</m-menu-item>
        <m-sub-menu name="menu-level-1-2">
          <template v-slot:title>
            菜单二
          </template>
          <m-menu-item name="menu-level-2-1">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-2">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-3">二级菜单</m-menu-item>
        </m-sub-menu>
        <m-menu-item name="menu-level-1-3" :disabled="true">菜单三</m-menu-item>
        <m-sub-menu name="menu-level-1-4">
          <template v-slot:title>
            菜单四
          </template>
          <m-menu-item name="menu-level-2-4">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-5">二级菜单</m-menu-item>
          <m-sub-menu name="menu-level-2-6">
            <template v-slot:title>
              二级菜单
            </template>
            <m-menu-item name="menu-level-3-1">三级菜单</m-menu-item>
            <m-menu-item name="menu-level-3-2">三级菜单</m-menu-item>
          </m-sub-menu>
          <m-sub-menu name="menu-level-2-7">
            <template v-slot:title>
              二级菜单
            </template>
            <m-menu-item name="menu-level-3-3">三级菜单</m-menu-item>
            <m-menu-item name="menu-level-3-4">三级菜单</m-menu-item>
          </m-sub-menu>
        </m-sub-menu>
      </m-menu>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(accordionCode) }}</code></pre>
    </div>

    <h3 class="title">默认选中</h3>
    <div class="components-wrappper">
      <m-menu :vertical="true" default-active="menu-level-3-1">
        <m-menu-item name="menu-level-1-1">菜单一</m-menu-item>
        <m-sub-menu name="menu-level-1-2">
          <template v-slot:title>
            菜单二
          </template>
          <m-menu-item name="menu-level-2-1">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-2">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-3">二级菜单</m-menu-item>
        </m-sub-menu>
        <m-menu-item name="menu-level-1-3" :disabled="true">菜单三</m-menu-item>
        <m-sub-menu name="menu-level-1-4">
          <template v-slot:title>
            菜单四
          </template>
          <m-menu-item name="menu-level-2-4">二级菜单</m-menu-item>
          <m-menu-item name="menu-level-2-5">二级菜单</m-menu-item>
          <m-sub-menu name="menu-level-2-6">
            <template v-slot:title>
              二级菜单
            </template>
            <m-menu-item name="menu-level-3-1">三级菜单</m-menu-item>
            <m-menu-item name="menu-level-3-2">三级菜单</m-menu-item>
          </m-sub-menu>
          <m-sub-menu name="menu-level-2-7">
            <template v-slot:title>
              二级菜单
            </template>
            <m-menu-item name="menu-level-3-3">三级菜单</m-menu-item>
            <m-menu-item name="menu-level-3-4">三级菜单</m-menu-item>
          </m-sub-menu>
        </m-sub-menu>
      </m-menu>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(activeCode) }}</code></pre>
    </div>

    <h3 class="title">API</h3>
    <h3 class="title">MMenu</h3>
    <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>default-active</td>
          <td>默认选中的菜单的name</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>vertical</td>
          <td>是否为纵向模式</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>accordion</td>
          <td>是否开启手风琴模式，只在vertical为true的时候生效</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>sub-menu-trigger</td>
          <td>子菜单打开的触发方式，可选值：click，hover。hover只在vertical为false的时候生效</td>
          <td>string</td>
          <td>hover</td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">MMenuItem</h3>
    <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>菜单的标识，必传，该属性的值唯一。</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>to</td>
          <td>点击菜单跳转链接</td>
          <td>string</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">MSubMenu</h3>
    <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>菜单的标识，必传，该属性的值唯一。</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
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
          <td>on-select</td>
          <td>菜单选中时触发</td>
          <td>(namePath: array) 选中菜单项的name值组成的数组</td>
        </tr>
        <tr>
          <td>toggle-sub-menu</td>
          <td>可展开菜单选中时触发</td>
          <td>(name: string, isOpen: boolean)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MMenu, MMenuItem, MSubMenu } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";
export default {
  name: 'menu-demos',
  components: {
    MMenu,
    MMenuItem,
    MSubMenu
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      code: `
        <m-menu>
          <m-menu-item name="menu-level-1-1">菜单一</m-menu-item>
          <m-sub-menu name="menu-level-1-2">
            <template v-slot:title>
              菜单二
            </template>
            <m-menu-item name="menu-level-2-1">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-2">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-3">二级菜单</m-menu-item>
          </m-sub-menu>
          <m-menu-item name="menu-level-1-3" :disabled="true">菜单三</m-menu-item>
          <m-sub-menu name="menu-level-1-4">
            <template v-slot:title>
              菜单四
            </template>
            <m-menu-item name="menu-level-2-4">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-5">二级菜单</m-menu-item>
            <m-sub-menu name="menu-level-2-6">
              <template v-slot:title>
                二级菜单
              </template>
              <m-menu-item name="menu-level-3-1">三级菜单</m-menu-item>
              <m-menu-item name="menu-level-3-2">三级菜单</m-menu-item>
            </m-sub-menu>
          </m-sub-menu>
        </m-menu>
      `,
      clickCode: `
        <m-menu sub-menu-trigger="click">
          <m-menu-item name="menu-level-1-1">菜单一</m-menu-item>
          <m-sub-menu name="menu-level-1-2">
            <template v-slot:title>
              菜单二
            </template>
            <m-menu-item name="menu-level-2-1">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-2">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-3">二级菜单</m-menu-item>
          </m-sub-menu>
          <m-menu-item name="menu-level-1-3" :disabled="true">菜单三</m-menu-item>
          <m-sub-menu name="menu-level-1-4">
            <template v-slot:title>
              菜单四
            </template>
            <m-menu-item name="menu-level-2-4">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-5">二级菜单</m-menu-item>
            <m-sub-menu name="menu-level-2-6">
              <template v-slot:title>
                二级菜单
              </template>
              <m-menu-item name="menu-level-3-1">三级菜单</m-menu-item>
              <m-menu-item name="menu-level-3-2">三级菜单</m-menu-item>
            </m-sub-menu>
          </m-sub-menu>
        </m-menu>
      `,
      verticalCode: `
        <m-menu :vertical="true">
          <m-menu-item name="menu-level-1-1">菜单一</m-menu-item>
          <m-sub-menu name="menu-level-1-2">
            <template v-slot:title>
              菜单二
            </template>
            <m-menu-item name="menu-level-2-1">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-2">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-3">二级菜单</m-menu-item>
          </m-sub-menu>
          <m-menu-item name="menu-level-1-3" :disabled="true">菜单三</m-menu-item>
          <m-sub-menu name="menu-level-1-4">
            <template v-slot:title>
              菜单四
            </template>
            <m-menu-item name="menu-level-2-4">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-5">二级菜单</m-menu-item>
            <m-sub-menu name="menu-level-2-6">
              <template v-slot:title>
                二级菜单
              </template>
              <m-menu-item name="menu-level-3-1">三级菜单</m-menu-item>
              <m-menu-item name="menu-level-3-2">三级菜单</m-menu-item>
            </m-sub-menu>
          </m-sub-menu>
        </m-menu>
      `,
      accordionCode: `
        <m-menu :vertical="true" :accordion="true">
          <m-menu-item name="menu-level-1-1">菜单一</m-menu-item>
          <m-sub-menu name="menu-level-1-2">
            <template v-slot:title>
              菜单二
            </template>
            <m-menu-item name="menu-level-2-1">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-2">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-3">二级菜单</m-menu-item>
          </m-sub-menu>
          <m-menu-item name="menu-level-1-3" :disabled="true">菜单三</m-menu-item>
          <m-sub-menu name="menu-level-1-4">
            <template v-slot:title>
              菜单四
            </template>
            <m-menu-item name="menu-level-2-4">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-5">二级菜单</m-menu-item>
            <m-sub-menu name="menu-level-2-6">
              <template v-slot:title>
                二级菜单
              </template>
              <m-menu-item name="menu-level-3-1">三级菜单</m-menu-item>
              <m-menu-item name="menu-level-3-2">三级菜单</m-menu-item>
            </m-sub-menu>
          </m-sub-menu>
        </m-menu>
      `,
      activeCode: `
        <m-menu :vertical="true" default-active="menu-level-3-1">
          <m-menu-item name="menu-level-1-1">菜单一</m-menu-item>
          <m-sub-menu name="menu-level-1-2">
            <template v-slot:title>
              菜单二
            </template>
            <m-menu-item name="menu-level-2-1">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-2">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-3">二级菜单</m-menu-item>
          </m-sub-menu>
          <m-menu-item name="menu-level-1-3" :disabled="true">菜单三</m-menu-item>
          <m-sub-menu name="menu-level-1-4">
            <template v-slot:title>
              菜单四
            </template>
            <m-menu-item name="menu-level-2-4">二级菜单</m-menu-item>
            <m-menu-item name="menu-level-2-5">二级菜单</m-menu-item>
            <m-sub-menu name="menu-level-2-6">
              <template v-slot:title>
                二级菜单
              </template>
              <m-menu-item name="menu-level-3-1">三级菜单</m-menu-item>
              <m-menu-item name="menu-level-3-2">三级菜单</m-menu-item>
            </m-sub-menu>
            <m-sub-menu name="menu-level-2-7">
              <template v-slot:title>
                二级菜单
              </template>
              <m-menu-item name="menu-level-3-3">三级菜单</m-menu-item>
              <m-menu-item name="menu-level-3-4">三级菜单</m-menu-item>
            </m-sub-menu>
          </m-sub-menu>
        </m-menu>
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
