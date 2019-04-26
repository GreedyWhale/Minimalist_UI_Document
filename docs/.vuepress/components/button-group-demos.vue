<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-button-group>
        <m-button>按钮</m-button>
        <m-button>按钮</m-button>
      </m-button-group>
      <div class="divider"></div>
      <m-button-group>
        <m-button :options="{icon: 'left'}">按钮</m-button>
        <m-button :options="{icon: 'right', iconPosition: 'right'}">按钮</m-button>
      </m-button-group>
      <div class="divider"></div>
      <m-button-group>
        <m-button :options="{icon: 'left', type: 'solid', color: 'blue'}">按钮</m-button>
        <m-button :options="{icon: 'right', type: 'solid', color: 'blue', iconPosition: 'right'}">按钮</m-button>
      </m-button-group>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>
  </div>
</template>

<script>
import { MButton, MButtonGroup } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";
export default {
  name: 'button-group-demos',
  components: {
    MButton,
    MButtonGroup
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      code: `
        <m-button-group>
          <m-button>按钮</m-button>
          <m-button>按钮</m-button>
        </m-button-group>
        <m-button-group>
          <m-button :options="{icon: 'left'}">按钮</m-button>
          <m-button :options="{icon: 'right', iconPosition: 'right'}">按钮</m-button>
        </m-button-group>
        <m-button-group>
          <m-button :options="{icon: 'left', type: 'solid', color: 'blue'}">按钮</m-button>
          <m-button :options="{icon: 'right', type: 'solid', color: 'blue', iconPosition: 'right'}">按钮</m-button>
        </m-button-group>
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
