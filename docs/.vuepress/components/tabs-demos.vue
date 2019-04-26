<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-tabs :selected.sync="selected">
        <m-tabs-head>
          <m-tabs-item name="dayToDay">搞笑/日常</m-tabs-item>
          <m-tabs-item name="idol">偶像</m-tabs-item>
          <m-tabs-item name="inference">推理</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="dayToDay">
            <p>今日的风儿好喧嚣啊</p>
          </m-tabs-pane>
          <m-tabs-pane name="idol">
            <p>为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！</p>
          </m-tabs-pane>
          <m-tabs-pane name="inference">
            <p>赌上爷爷的名义</p>
          </m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">自定义选项卡</h3>
    <div class="components-wrappper">
      <m-tabs :selected.sync="selected1">
        <m-tabs-head>
          <m-tabs-item name="dayToDay">
            <m-icon><svg class="icon-font" aria-hidden="true"><use xlink:href="#icon-dog"></use></svg></m-icon>
            搞笑/日常
          </m-tabs-item>
          <m-tabs-item name="idol">
            <m-icon><svg class="icon-font" aria-hidden="true"><use xlink:href="#icon-tv"></use></svg></m-icon>
            偶像
          </m-tabs-item>
          <m-tabs-item name="inference">
            <m-icon><svg class="icon-font" aria-hidden="true"><use xlink:href="#icon-baozou"></use></svg></m-icon>
            推理
          </m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="dayToDay">今日的风儿好喧嚣啊 </m-tabs-pane>
          <m-tabs-pane name="idol">为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！</m-tabs-pane>
          <m-tabs-pane name="inference">赌上爷爷的名义</m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(headCode) }}</code></pre>
    </div>

    <h3 class="title">禁用选项卡</h3>
    <div class="components-wrappper">
      <m-tabs :selected.sync="selected2">
        <m-tabs-head>
          <m-tabs-item name="dayToDay">搞笑/日常</m-tabs-item>
          <m-tabs-item name="idol" disabled>偶像</m-tabs-item>
          <m-tabs-item name="inference">推理</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="dayToDay">
            <p>今日的风儿好喧嚣啊</p>
          </m-tabs-pane>
          <m-tabs-pane name="idol">
            <p>为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！</p>
          </m-tabs-pane>
          <m-tabs-pane name="inference">
            <p>赌上爷爷的名义</p>
          </m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(disabledCode) }}</code></pre>
    </div>

    <h3 class="title">超多选项卡</h3>
    <div class="components-wrappper">
      <m-tabs :selected.sync="selected3">
        <m-tabs-head>
          <m-tabs-item v-for="item in tablist" :key="item.id" :name="item.name">
            {{ item.title }}
          </m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane v-for="item in tablist" :key="item.id" :name="item.name">
            <p>{{ item.content }}</p>
          </m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(moreCode) }}</code></pre>
    </div>
    <h3 class="title">API</h3>
    <h3 class="title">MTabs</h3>
    <table>
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>selected</td>
          <td>选中的选项卡name，必传。可以使用.sync修饰符</td>
          <td>string | number</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">MTabsItem</h3>
    <table>
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>选项卡标识，name值唯一</td>
          <td>string | number</td>
          <td></td>
        </tr>
        <tr>
          <td>disable</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">MTabsPane</h3>
    <table>
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>面板标识，和对应的选项卡name相同</td>
          <td>string | number</td>
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
          <td>on-click</td>
          <td>点击选项卡时触发</td>
          <td>点击的选项卡的name值，例如示例中，点击第一个选项卡就是 'dayToDay'</td>
        </tr>
        <tr>
          <td>update:selected</td>
          <td>选项卡选中时触发</td>
          <td>
            选中的选项卡的name值，可以使用.sync修饰符，或直接监听事件。例如：
            <div class="td-code">
              <code>
                {{ trimFromCodeStr(exampleCode1) }}
              </code>
            </div>
            <div class="td-code">
              <code>
                {{ trimFromCodeStr(exampleCode2) }}
              </code>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MTabs, MTabsHead, MTabsBody, MTabsItem, MTabsPane, MIcon } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";
import "../font";

export default {
  name: 'tabs-demos',
  components: {
    MTabs,
    MTabsHead,
    MTabsBody,
    MTabsItem,
    MTabsPane,
    MIcon
  },
  data() {
    return {
      selected: 'dayToDay',
      selected1: 'dayToDay',
      selected2: 'dayToDay',
      selected3: 'dayToDay',
      trimFromCodeStr: trimFromCodeStr,
      tablist: [
        { id: 1, name: 'dayToDay', title: '搞笑/日常', content: '今日的风儿好喧嚣啊'},
        { id: 2, name: 'idol', title: '偶像', content: '为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！'},
        { id: 3, name: 'inference', title: '推理', content: '赌上爷爷的名义'},
        { id: 4, name: 'love', title: '恋爱/情感', content: '在虚构的故事当中寻求真实感的人脑袋一定有问题'},
        { id: 5, name: 'machineWar', title: '机战', content: '只要打不中就没有什么大不了'},
        { id: 6, name: 'blood', title: '热血/冒险', content: '没有人能在我的BGM里打败我'},
        { id: 7, name: 'sports', title: '体育/棋牌', content: '教练，我想打篮球'},
        { id: 8, name: 'magicalGirl', title: '魔法少女', content: '和我签订契约，成为魔法少女吧 '},
        { id: 9, name: 'game', title: '游戏台词', content: ' 我不是萝莉控，只是喜欢的人刚好是萝莉而已！'}
      ],
      code: `
        <m-tabs :selected.sync="selected">
          <m-tabs-head>
            <m-tabs-item name="dayToDay">搞笑/日常</m-tabs-item>
            <m-tabs-item name="idol">偶像</m-tabs-item>
            <m-tabs-item name="inference">推理</m-tabs-item>
          </m-tabs-head>
          <m-tabs-body>
            <m-tabs-pane name="dayToDay">
              <p>今日的风儿好喧嚣啊</p>
            </m-tabs-pane>
            <m-tabs-pane name="idol">
              <p>为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！</p>
            </m-tabs-pane>
            <m-tabs-pane name="inference">
              <p>赌上爷爷的名义</p>
            </m-tabs-pane>
          </m-tabs-body>
        </m-tabs>

        <script>
          export default {
            data() {
              return {
                selected: 'dayToDay'
              }
            }
          }
        <\/script>
      `,
      headCode: `
        <m-tabs :selected.sync="selected">
          <m-tabs-head>
            <m-tabs-item name="dayToDay">
              <m-icon><svg class="icon-font" aria-hidden="true"><use xlink:href="#icon-dog"></use></svg></m-icon>
              搞笑/日常
            </m-tabs-item>
            <m-tabs-item name="idol">
              <m-icon><svg class="icon-font" aria-hidden="true"><use xlink:href="#icon-tv"></use></svg></m-icon>
              偶像
            </m-tabs-item>
            <m-tabs-item name="inference">
              <m-icon><svg class="icon-font" aria-hidden="true"><use xlink:href="#icon-baozou"></use></svg></m-icon>
              推理
            </m-tabs-item>
          </m-tabs-head>
          <m-tabs-body>
            <m-tabs-pane name="dayToDay">今日的风儿好喧嚣啊 </m-tabs-pane>
            <m-tabs-pane name="idol">为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！</m-tabs-pane>
            <m-tabs-pane name="inference">赌上爷爷的名义</m-tabs-pane>
          </m-tabs-body>
        </m-tabs>

        <script>
          export default {
            data() {
              return {
                selected: 'dayToDay'
              }
            }
          }
        <\/script>
      `,
      disabledCode: `
        <m-tabs :selected.sync="selected">
          <m-tabs-head>
            <m-tabs-item name="dayToDay">搞笑/日常</m-tabs-item>
            <m-tabs-item name="idol" disabled>偶像</m-tabs-item>
            <m-tabs-item name="inference">推理</m-tabs-item>
          </m-tabs-head>
          <m-tabs-body>
            <m-tabs-pane name="dayToDay">
              <p>今日的风儿好喧嚣啊</p>
            </m-tabs-pane>
            <m-tabs-pane name="idol">
              <p>为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！</p>
            </m-tabs-pane>
            <m-tabs-pane name="inference">
              <p>赌上爷爷的名义</p>
            </m-tabs-pane>
          </m-tabs-body>
        </m-tabs>

        <script>
          export default {
            data() {
              return {
                selected: 'dayToDay'
              }
            }
          }
        <\/script>
      `,
      moreCode: `
        <m-tabs :selected.sync="selected">
          <m-tabs-head>
            <m-tabs-item v-for="item in tablist" :key="item.id" :name="item.name">
              {{ item.title }}
            </m-tabs-item>
          </m-tabs-head>
          <m-tabs-body>
            <m-tabs-pane v-for="item in tablist" :key="item.id" :name="item.name">
              <p>{{ item.content }}</p>
            </m-tabs-pane>
          </m-tabs-body>
        </m-tabs>

        <script>
        export default {
          data() {
            return {
              selected: 'dayToDay',
              tablist: [
                { id: 1, name: 'dayToDay', title: '搞笑/日常', content: '今日的风儿好喧嚣啊'},
                { id: 2, name: 'idol', title: '偶像', content: '为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！'},
                { id: 3, name: 'inference', title: '推理', content: '赌上爷爷的名义'},
                { id: 4, name: 'love', title: '恋爱/情感', content: '在虚构的故事当中寻求真实感的人脑袋一定有问题'},
                { id: 5, name: 'machineWar', title: '机战', content: '只要打不中就没有什么大不了'},
                { id: 6, name: 'blood', title: '热血/冒险', content: '没有人能在我的BGM里打败我'},
                { id: 7, name: 'sports', title: '体育/棋牌', content: '教练，我想打篮球'},
                { id: 8, name: 'magicalGirl', title: '魔法少女', content: '和我签订契约，成为魔法少女吧 '},
                { id: 9, name: 'game', title: '游戏台词', content: ' 我不是萝莉控，只是喜欢的人刚好是萝莉而已！'}
              ]
            }
          }
        }
        <\/script>
      `,
      exampleCode1: `
        <m-tabs :selected.sync="selected">...</m-tabs>
      `,
      exampleCode2: `
        <m-tabs :selected="selected" @update:selected="selected = $event">...</m-tabs>
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
.td-code {
  line-height: 1.5;
  text-align: left; 
  padding: 10px 0;
  word-break: break-all;
}
</style>
