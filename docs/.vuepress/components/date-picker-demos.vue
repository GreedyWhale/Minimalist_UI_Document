<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-date-picker v-model="date"></m-date-picker>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">多选</h3>
    <div class="components-wrappper">
      <m-date-picker v-model="date3" type="multiple"></m-date-picker>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(multipleCode) }}</code></pre>
    </div>

    <h3 class="title">默认选中日期</h3>
    <div class="components-wrappper">
      <p>单选</p>
      <m-date-picker v-model="date1"></m-date-picker>
      <p>多选</p>
      <m-date-picker v-model="date2" type="multiple"></m-date-picker>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(defaultCode) }}</code></pre>
    </div>

    <h3 class="title">显示日期格式</h3>
    <div class="components-wrappper">
      <p>YYYY-DD-MM</p>
      <m-date-picker v-model="date4" format="YYYY-DD-MM"></m-date-picker>
      <p>YYYY年DD月MM日</p>
      <m-date-picker v-model="date5" format="YYYY年DD月MM日"></m-date-picker>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(formatCode) }}</code></pre>
    </div>

    <h3 class="title">返回日期格式</h3>
    <div class="components-wrappper">
      <m-date-picker v-model="date6" format="YYYY年DD月MM日" valueFormat="YYYY/DD/MM"></m-date-picker>
      <p>返回的日期格式是：{{ date6 }}</p>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(formatCode) }}</code></pre>
    </div>

    <h3 class="title">不可选日期</h3>
    <div class="components-wrappper">
      <m-date-picker v-model="date6" :disabled-date="disabledDate"></m-date-picker>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(disabledCode) }}</code></pre>
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
          <td>v-model</td>
          <td>
            绑定的日期值，如果需要指定默认选中，日期的格式必须是YYYY/DD/MM
          </td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>type</td>
          <td>日期选择器类型：single（单选），multiple（多选）</td>
          <td>string</td>
          <td>single</td>
        </tr>
        <tr>
          <td>format</td>
          <td>显示在输入框中的格式，比如：YYYY/MM/DD， YYYY-MM-DD，YYYY年MM月DD日</td>
          <td>string</td>
          <td>YYYY-MM-DD</td>
        </tr>
        <tr>
          <td>valueFormat</td>
          <td>选中日期后返回的格式，比如：YYYY/MM/DD， YYYY-MM-DD，YYYY年MM月DD日</td>
          <td>string</td>
          <td>YYYY/MM/DD</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>输入框中的占位文字</td>
          <td>string</td>
          <td>选择日期</td>
        </tr>
        <tr>
          <td>disabledDate</td>
          <td>判断日期是否可选，接受参数为Date对象，返回true为可选，false不可选</td>
          <td>function</td>
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
          <td>on-clear</td>
          <td>清除日期时触发</td>
          <td></td>
        </tr>
        <tr>
          <td>on-selected-year</td>
          <td>选中年时触发</td>
          <td>(year: number)</td>
        </tr>
        <tr>
          <td>on-selected-month</td>
          <td>选中月时触发</td>
          <td>(month: number)</td>
        </tr>
        <tr>
          <td>on-change</td>
          <td>选择日期时触发</td>
          <td>(date: 符合valueFormat中指定格式的日期)</td>
        </tr>
        <tr>
          <td>on-confirm</td>
          <td>多选日期模式下，点击确定按钮时触发</td>
          <td>(startDate: 返回值参考dateItem表, endDate: 返回值参考dateItem表)</td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">dateItem</h3>
    <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>cnWeek</td>
          <td>
            中文星期数，例如：星球六
          </td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>cnWeekShort</td>
          <td>中文星期数简写，例如：六</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>enMonth</td>
          <td>英文月，例如：April</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>enWeek</td>
          <td>英文周简写，例如：Sat</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>year</td>
          <td>年</td>
          <td>number</td>
          <td></td>
        </tr>
        <tr>
          <td>month</td>
          <td>月</td>
          <td>number</td>
          <td></td>
        </tr>
        <tr>
          <td>date</td>
          <td>日</td>
          <td>number</td>
          <td></td>
        </tr>
        <tr>
          <td>dateStamp</td>
          <td>年月日组成的字符串，例如："2018/12/21"</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>isToday</td>
          <td>是否今天</td>
          <td>boolean</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MDatePicker } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";

export default {
  name: 'date-picker-demos',
  components: {
    MDatePicker
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      date: '',
      date1: '2019/04/12',
      date2: ['2019/04/12', '2019/04/20'],
      date3: '',
      date4: '',
      date5: '',
      date6: '',
      code: `
        <m-date-picker v-model="date"></m-date-picker>

        <script>
          export default {
            data() {
              return {
                date: ''
              }
            }
          }
        <\/script>
      `,
      defaultCode: `
        <p>单选</p>
        <m-date-picker v-model="date1"></m-date-picker>
        <p>多选</p>
        <m-date-picker v-model="date2" type="multiple"></m-date-picker>

        <script>
          export default {
            data() {
              return {
                date1: '2019/04/12',
                date2: ['2019/04/12', '2019/04/20']
              }
            }
          }
        <\/script>
      `,
      multipleCode: `
        <m-date-picker v-model="date3" type="multiple"></m-date-picker>
        <script>
          export default {
            data() {
              return {
                date3: ''
              }
            }
          }
        <\/script>
      `,
      formatCode: `
        <p>YYYY-DD-MM</p>
        <m-date-picker v-model="date4" format="YYYY-DD-MM"></m-date-picker>
        <p>YYYY年DD月MM日</p>
        <m-date-picker v-model="date5" format="YYYY年DD月MM日"></m-date-picker>
        
        <script>
          export default {
            data() {
              return {
                date4: '',
                date5: ''
              }
            }
          }
        <\/script>
      `,
      disabledCode: `
        <m-date-picker v-model="date6" :disabled-date="disabledDate"></m-date-picker>
        <script>
          export default {
            data() {
              return {
                date6: ''
              }
            },
            methods: {
              disabledDate(date) {
                return date && date.getTime() < Date.now() - 86400000;
              }
            },
          }
        <\/script>
      `
    }
  },
  methods: {
    disabledDate(date) {
      return date && date.getTime() < Date.now() - 86400000;
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
