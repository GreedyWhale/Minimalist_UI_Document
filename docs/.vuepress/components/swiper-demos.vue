<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-swiper>
        <m-swiper-item name="1">
          <div class="box box-red"></div>
        </m-swiper-item>
        <m-swiper-item name="2">
          <div class="box box-green"></div>
        </m-swiper-item>
        <m-swiper-item name="3">
          <div class="box box-yellow"></div>
        </m-swiper-item>
        <m-swiper-item name="4">
          <div class="box box-blue"></div>
        </m-swiper-item>
      </m-swiper>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">自动轮播</h3>
    <div class="components-wrappper">
      <m-swiper :autoplay="true">
        <m-swiper-item name="1">
          <div class="box box-red"></div>
        </m-swiper-item>
        <m-swiper-item name="2">
          <div class="box box-green"></div>
        </m-swiper-item>
        <m-swiper-item name="3">
          <div class="box box-yellow"></div>
        </m-swiper-item>
        <m-swiper-item name="4">
          <div class="box box-blue"></div>
        </m-swiper-item>
      </m-swiper>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(autocode) }}</code></pre>
    </div>

    <h3 class="title">默认展示</h3>
    <div class="components-wrappper">
      <m-swiper active="2" arrow="always">
        <m-swiper-item name="1">
          <div class="box box-red"></div>
        </m-swiper-item>
        <m-swiper-item name="2">
          <div class="box box-green"></div>
        </m-swiper-item>
        <m-swiper-item name="3">
          <div class="box box-yellow"></div>
        </m-swiper-item>
        <m-swiper-item name="4">
          <div class="box box-blue"></div>
        </m-swiper-item>
      </m-swiper>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(activeCode) }}</code></pre>
    </div>

    <h3 class="title">隐藏指示器</h3>
    <div class="components-wrappper">
      <m-swiper :autoplay="true" :visible-dots="true" arrow="always">
        <m-swiper-item name="1">
          <div class="box box-red"></div>
        </m-swiper-item>
        <m-swiper-item name="2">
          <div class="box box-green"></div>
        </m-swiper-item>
        <m-swiper-item name="3">
          <div class="box box-yellow"></div>
        </m-swiper-item>
        <m-swiper-item name="4">
          <div class="box box-blue"></div>
        </m-swiper-item>
      </m-swiper>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(visibleCode) }}</code></pre>
    </div>

    <h3 class="title">不循环</h3>
    <div class="components-wrappper">
      <m-swiper :loop="false">
        <m-swiper-item name="1">
          <div class="box box-red"></div>
        </m-swiper-item>
        <m-swiper-item name="2">
          <div class="box box-green"></div>
        </m-swiper-item>
        <m-swiper-item name="3">
          <div class="box box-yellow"></div>
        </m-swiper-item>
        <m-swiper-item name="4">
          <div class="box box-blue"></div>
        </m-swiper-item>
      </m-swiper>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(loopCode) }}</code></pre>
    </div>

    <h3 class="title">切换箭头</h3>
    <div class="components-wrappper">
      <p>一直展示</p>
      <m-swiper arrow="always">
        <m-swiper-item name="1">
          <div class="box box-red"></div>
        </m-swiper-item>
        <m-swiper-item name="2">
          <div class="box box-green"></div>
        </m-swiper-item>
        <m-swiper-item name="3">
          <div class="box box-yellow"></div>
        </m-swiper-item>
        <m-swiper-item name="4">
          <div class="box box-blue"></div>
        </m-swiper-item>
      </m-swiper>
      <p>鼠标悬停时展示</p>
      <m-swiper arrow="hover">
        <m-swiper-item name="1">
          <div class="box box-red"></div>
        </m-swiper-item>
        <m-swiper-item name="2">
          <div class="box box-green"></div>
        </m-swiper-item>
        <m-swiper-item name="3">
          <div class="box box-yellow"></div>
        </m-swiper-item>
        <m-swiper-item name="4">
          <div class="box box-blue"></div>
        </m-swiper-item>
      </m-swiper>
      <p>隐藏</p>
      <m-swiper arrow="never">
        <m-swiper-item name="1">
          <div class="box box-red"></div>
        </m-swiper-item>
        <m-swiper-item name="2">
          <div class="box box-green"></div>
        </m-swiper-item>
        <m-swiper-item name="3">
          <div class="box box-yellow"></div>
        </m-swiper-item>
        <m-swiper-item name="4">
          <div class="box box-blue"></div>
        </m-swiper-item>
      </m-swiper>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(arrowCode) }}</code></pre>
    </div>

    <h3 class="title">纵向</h3>
    <div class="components-wrappper">
      <m-swiper :vertical="true" arrow="never" :autoplay="true">
        <m-swiper-item name="1">
          <div class="box box-red"></div>
        </m-swiper-item>
        <m-swiper-item name="2">
          <div class="box box-green"></div>
        </m-swiper-item>
        <m-swiper-item name="3">
          <div class="box box-yellow"></div>
        </m-swiper-item>
        <m-swiper-item name="4">
          <div class="box box-blue"></div>
        </m-swiper-item>
      </m-swiper>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(verticalCode) }}</code></pre>
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
          <td>delay</td>
          <td>轮播切换时间，单位ms</td>
          <td>number</td>
          <td>3000</td>
        </tr>
        <tr>
          <td>active</td>
          <td>默认激活的面板，值为m-swiper-item的name</td>
          <td>string | number</td>
          <td></td>
        </tr>
        <tr>
          <td>autoplay</td>
          <td>是否开启自动轮播</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>visibleDots</td>
          <td>是否隐藏指示器</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>vertical</td>
          <td>是否为纵向</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loop</td>
          <td>是否开启无限轮播</td>
          <td>boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">MSwiper</h3>
    <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>当前面板的标识，必传，该属性的值唯一。</td>
          <td>string | number</td>
          <td></td>
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
          <td>change</td>
          <td>激活面板发生改变时触发</td>
          <td>(name: string | number, index: number)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MSwiper, MSwiperItem } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";
export default {
  name: 'swiper-demos',
  components: {
    MSwiper,
    MSwiperItem
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      code: `
        <m-swiper>
          <m-swiper-item name="1">
            <div class="box box-red"></div>
          </m-swiper-item>
          <m-swiper-item name="2">
            <div class="box box-green"></div>
          </m-swiper-item>
          <m-swiper-item name="3">
            <div class="box box-yellow"></div>
          </m-swiper-item>
          <m-swiper-item name="4">
            <div class="box box-blue"></div>
          </m-swiper-item>
        </m-swiper>
      `,
      autocode:`
        <m-swiper :autoplay="true">
          <m-swiper-item name="1">
            <div class="box box-red"></div>
          </m-swiper-item>
          <m-swiper-item name="2">
            <div class="box box-green"></div>
          </m-swiper-item>
          <m-swiper-item name="3">
            <div class="box box-yellow"></div>
          </m-swiper-item>
          <m-swiper-item name="4">
            <div class="box box-blue"></div>
          </m-swiper-item>
        </m-swiper>
      `,
      activeCode: `
        <m-swiper active="2" arrow="always">
          <m-swiper-item name="1">
            <div class="box box-red"></div>
          </m-swiper-item>
          <m-swiper-item name="2">
            <div class="box box-green"></div>
          </m-swiper-item>
          <m-swiper-item name="3">
            <div class="box box-yellow"></div>
          </m-swiper-item>
          <m-swiper-item name="4">
            <div class="box box-blue"></div>
          </m-swiper-item>
        </m-swiper>
      `,
      visibleCode:`
        <m-swiper :autoplay="true" :visible-dots="true" arrow="always">
          <m-swiper-item name="1">
            <div class="box box-red"></div>
          </m-swiper-item>
          <m-swiper-item name="2">
            <div class="box box-green"></div>
          </m-swiper-item>
          <m-swiper-item name="3">
            <div class="box box-yellow"></div>
          </m-swiper-item>
          <m-swiper-item name="4">
            <div class="box box-blue"></div>
          </m-swiper-item>
        </m-swiper>
      `,
      loopCode:`
        <m-swiper :loop="false">
          <m-swiper-item name="1">
            <div class="box box-red"></div>
          </m-swiper-item>
          <m-swiper-item name="2">
            <div class="box box-green"></div>
          </m-swiper-item>
          <m-swiper-item name="3">
            <div class="box box-yellow"></div>
          </m-swiper-item>
          <m-swiper-item name="4">
            <div class="box box-blue"></div>
          </m-swiper-item>
        </m-swiper>
      `,
      arrowCode:`
        <p>一直展示</p>
        <m-swiper arrow="always">
          <m-swiper-item name="1">
            <div class="box box-red"></div>
          </m-swiper-item>
          <m-swiper-item name="2">
            <div class="box box-green"></div>
          </m-swiper-item>
          <m-swiper-item name="3">
            <div class="box box-yellow"></div>
          </m-swiper-item>
          <m-swiper-item name="4">
            <div class="box box-blue"></div>
          </m-swiper-item>
        </m-swiper>
        <p>鼠标悬停时展示</p>
        <m-swiper arrow="hover">
          <m-swiper-item name="1">
            <div class="box box-red"></div>
          </m-swiper-item>
          <m-swiper-item name="2">
            <div class="box box-green"></div>
          </m-swiper-item>
          <m-swiper-item name="3">
            <div class="box box-yellow"></div>
          </m-swiper-item>
          <m-swiper-item name="4">
            <div class="box box-blue"></div>
          </m-swiper-item>
        </m-swiper>
        <p>隐藏</p>
        <m-swiper arrow="never">
          <m-swiper-item name="1">
            <div class="box box-red"></div>
          </m-swiper-item>
          <m-swiper-item name="2">
            <div class="box box-green"></div>
          </m-swiper-item>
          <m-swiper-item name="3">
            <div class="box box-yellow"></div>
          </m-swiper-item>
          <m-swiper-item name="4">
            <div class="box box-blue"></div>
          </m-swiper-item>
        </m-swiper>
      `,
      verticalCode: `
        <m-swiper :vertical="true" arrow="never" :autoplay="true">
          <m-swiper-item name="1">
            <div class="box box-red"></div>
          </m-swiper-item>
          <m-swiper-item name="2">
            <div class="box box-green"></div>
          </m-swiper-item>
          <m-swiper-item name="3">
            <div class="box box-yellow"></div>
          </m-swiper-item>
          <m-swiper-item name="4">
            <div class="box box-blue"></div>
          </m-swiper-item>
        </m-swiper>
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
.box {
  height: 100%;
}
.box-red {
  background: rgb(219, 55, 55);
}
.box-green {
  background: rgb(77, 160, 77);
}
.box-yellow {
  background: rgb(207, 207, 79);
}
.box-blue {
  background: rgb(41, 91, 165);
}
</style>
