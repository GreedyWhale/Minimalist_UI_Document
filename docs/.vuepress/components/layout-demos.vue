<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-layout>
        <m-header>header</m-header>
        <m-layout>
          <m-aside>aside</m-aside>
          <m-main>main</m-main>
        </m-layout>
        <m-footer>footer</m-footer>
      </m-layout>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">常见布局</h3>
    <div class="components-wrappper">
      <m-layout>
        <m-header>header</m-header>
        <m-main>main</m-main>
        <m-footer>footer</m-footer>
      </m-layout>
      <div class="divider"></div>
      <m-layout>
        <m-aside>aside</m-aside>
        <m-layout>
          <m-main>main</m-main>
          <m-footer>footer</m-footer>
        </m-layout>
      </m-layout>
      <div class="divider"></div>
      <m-layout>
        <m-layout>
          <m-aside>aside</m-aside>
          <m-main>main</m-main>
        </m-layout>
        <m-footer>footer</m-footer>
      </m-layout>
      <div class="divider"></div>
      <m-layout>
        <m-aside>aside</m-aside>
        <m-main>main</m-main>
        <m-aside>aside</m-aside>
      </m-layout>
      <div class="divider"></div>
      <m-layout>
        <m-aside>aside</m-aside>
        <m-main>main</m-main>
      </m-layout>
      <div class="divider"></div>
      <m-layout>
        <m-main>main</m-main>
        <m-aside>aside</m-aside>
      </m-layout>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(commonCode) }}</code></pre>
    </div>
  </div>
</template>

<script>
import { MLayout, MMain, MHeader, MFooter, MAside } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";
export default {
  name: 'layout-demos',
  components: {
    MLayout,
    MMain,
    MHeader,
    MFooter,
    MAside
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      code: `
        <m-layout>
          <m-header>header</m-header>
          <m-layout>
            <m-aside>aside</m-aside>
            <m-main>main</m-main>
          </m-layout>
          <m-footer>footer</m-footer>
        </m-layout>

        <style scoped>
        .m-layout {
          color: #fff;
        }
        .m-header {
          height: 50px;
          background: #0a4c23;
        }
        .m-aside {
          width: 150px;
          background: #146d49;
        }
        .m-main {
          height: 200px;
          background: #229376;
        }
        .m-footer {
          height: 50px;
          background: #186350;
        }
        </style>
      `,
      commonCode: `
        <m-layout>
          <m-header>header</m-header>
          <m-main>main</m-main>
          <m-footer>footer</m-footer>
        </m-layout>

        <m-layout>
          <m-aside>aside</m-aside>
          <m-layout>
            <m-main>main</m-main>
            <m-footer>footer</m-footer>
          </m-layout>
        </m-layout>

        <m-layout>
          <m-layout>
            <m-aside>aside</m-aside>
            <m-main>main</m-main>
          </m-layout>
          <m-footer>footer</m-footer>
        </m-layout>

        <m-layout>
          <m-aside>aside</m-aside>
          <m-main>main</m-main>
          <m-aside>aside</m-aside>
        </m-layout>

        <m-layout>
          <m-aside>aside</m-aside>
          <m-main>main</m-main>
        </m-layout>

        <m-layout>
          <m-main>main</m-main>
          <m-aside>aside</m-aside>
        </m-layout>

        <style scoped>
        .m-layout {
          color: #fff;
        }
        .m-header {
          height: 50px;
          background: #0a4c23;
        }
        .m-aside {
          width: 150px;
          background: #146d49;
        }
        .m-main {
          height: 200px;
          background: #229376;
        }
        .m-footer {
          height: 50px;
          background: #186350;
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
.m-layout {
  color: #fff;
}
.m-header {
  height: 50px;
  background: #0a4c23;
}
.m-aside {
  width: 150px;
  background: #146d49;
}
.m-main {
  height: 200px;
  background: #229376;
}
.m-footer {
  height: 50px;
  background: #186350;
}
</style>
