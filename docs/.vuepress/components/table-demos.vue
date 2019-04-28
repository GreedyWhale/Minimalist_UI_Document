<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-table :columns="columns" :data-source="dataSource"></m-table>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">有条纹的</h3>
    <div class="components-wrappper">
      <m-table :columns="columns" :data-source="dataSource" :striped="true"></m-table>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(stripedCode) }}</code></pre>
    </div>

    <h3 class="title">有边框的</h3>
    <div class="components-wrappper">
      <m-table :columns="columns" :data-source="dataSource" :bordered="true"></m-table>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(borderedCode) }}</code></pre>
    </div>

    <h3 class="title">loading状态</h3>
    <div class="components-wrappper">
      <m-table :columns="columns" :data-source="dataSource" :loading="true"></m-table>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(loadingCode) }}</code></pre>
    </div>

    <h3 class="title">固定头部</h3>
    <div class="components-wrappper">
      <m-table :columns="columns" :data-source="dataSource1" :fixedHead="true" :height="300"></m-table>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(fixHeadCode) }}</code></pre>
    </div>

    <h3 class="title">有序号的</h3>
    <div class="components-wrappper">
      <m-table :columns="columns" :data-source="dataSource" :extended-columns="extendedColumns"></m-table>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(indexCode) }}</code></pre>
    </div>

    <h3 class="title">多选</h3>
    <div class="components-wrappper">
      <m-table
        :columns="columns" :data-source="dataSource"
        :extended-columns="extendedColumns1" :selected-items.sync="selectedItems"
      ></m-table>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(selectedCode) }}</code></pre>
    </div>

    <h3 class="title">展开行</h3>
    <div class="components-wrappper">
      <m-table
        :columns="columns" :data-source="dataSource2"
        :extended-columns="extendedColumns2"
      ></m-table>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(descriptionCode) }}</code></pre>
    </div>

    <h3 class="title">排序功能</h3>
    <div class="components-wrappper">
      <m-table
        :columns="columns1" :data-source="dataSource3"
        @on-sort="onSort"
      ></m-table>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(sortCode) }}</code></pre>
    </div>

    <h3 class="title">扩展列</h3>
    <div class="components-wrappper">
      <m-table :columns="columns2" :data-source="dataSource">
        <template v-slot:actions="slotProps">
          <m-button>编辑</m-button>
          <m-button>删除</m-button>
        </template>
      </m-table>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(extendCode) }}</code></pre>
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
          <td>columns</td>
          <td>表头配置，必传。详情见columns表</td>
          <td>array</td>
          <td></td>
        </tr>
        <tr>
          <td>extendedColumns</td>
          <td>表头扩展配置，详情见extendedColumns表</td>
          <td>array</td>
          <td></td>
        </tr>
        <tr>
          <td>dataSource</td>
          <td>表格数据，必传。详情见columns表</td>
          <td>array</td>
          <td></td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>是否展示外边框和列边框</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>striped</td>
          <td>是否展示斑马纹</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>selectedItems</td>
          <td>选中的行，支持.sync</td>
          <td>array</td>
          <td></td>
        </tr>
        <tr>
          <td>loading</td>
          <td>是否开启loading状态</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>fixedHead</td>
          <td>是否开启固定表头</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>height</td>
          <td>表格高度</td>
          <td>number</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">columns</h3>
    列描述数据对象，是 columns 中的一项
     <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>列头显示文字</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>field</td>
          <td>对应dataSource中需要展示的数据的key值</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>sortType</td>
          <td>
            是否展示排序图标，可选值：true（展示排序图标），
            asc（展示排序图标，并点亮升序图标），
            desc（展示排序图标，并点亮降序图标）</td>
          <td>boolean | string</td>
          <td></td>
        </tr>
        <tr>
          <td>width</td>
          <td>列宽</td>
          <td>number</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">extendedColumns</h3>
    扩展列描述数据对象，是 extendedColumns 中的一项
     <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>field</td>
          <td>
            扩展列类型，可选值：index（展示序号），selection（多选类型），expend（当表格中的行需要展开时的类型）
          </td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>expendField</td>
          <td>
            当表格中的行需要展开时需要该属性，值为展开行的key值
          </td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>width</td>
          <td>扩展列的宽度</td>
          <td>string</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">dataSource</h3>
    表格数据
     <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>key</td>
          <td>
            当前行的标识，值唯一。必传
          </td>
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
          <td>on-change</td>
          <td>选择行时触发</td>
          <td>
            { selected: '是否选中, 类型boolean', selectedItems: '选中的行，类型array'}
          </td>
        </tr>
      </tbody>
    </table>

    <h3 class="title">actions slot</h3>
    <p>
      actions 插槽是一个带有slot-scope 特性的插槽，接收的 prop 对象中提供
      了一个item对象，以上面的例子说明，第一行中的item对象就是：
      <code>
        { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' }
      </code>
    </p>
  </div>
</template>

<script>
import { MTable, MButton } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";

export default {
  name: 'table-demos',
  components: {
    MTable,
    MButton
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      dataSource: [
        { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' },
        { key: 2, name: '小李', age: 9, score: 40, grade: '二年级' },
        { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级' },
        { key: 4, name: '老王', age: 30, score: 60, grade: '六年级' },
      ],
      dataSource1: [
        { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' },
        { key: 2, name: '小李', age: 9, score: 40, grade: '二年级' },
        { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级' },
        { key: 4, name: '老王', age: 30, score: 60, grade: '六年级' },
        { key: 5, name: '胖子', age: 10, score: 80, grade: '四年级' },
        { key: 6, name: '小红', age: 17, score: 100, grade: '六年级' },
        { key: 7, name: '小绿', age: 15, score: 77, grade: '四年级' },
        { key: 8, name: '阿紫', age: 20, score: 88, grade: '五年级' },
        { key: 9, name: 'tony', age: 28, score: 78, grade: '二年级' },
        { key: 10, name: 'mark', age: 30, score: 22, grade: '三年级' },
      ],
      dataSource2: [
        { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级', description: '这是一行描述文字'},
        { key: 2, name: '小李', age: 9, score: 40, grade: '二年级', description: '这是一行描述文字' },
        { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级', description: '这是一行描述文字' },
        { key: 4, name: '老王', age: 30, score: 60, grade: '六年级', description: '这是一行描述文字' },
      ],
      dataSource3: [
        { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级'},
        { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级'},
        { key: 4, name: '老王', age: 30, score: 60, grade: '六年级'},
        { key: 2, name: '小李', age: 9, score: 40, grade: '二年级'},
      ],
      columns: [
        {title: '姓名', field: 'name'},
        {title: '年龄', field: 'age'},
        {title: '分数', field: 'score'},
        {title: '年级', field: 'grade'}
      ],
      columns1: [
        {title: '姓名', field: 'name'},
        {title: '年龄', field: 'age', sortType: true},
        {title: '分数', field: 'score', sortType: true},
        {title: '年级', field: 'grade'}
      ],
      columns2: [
        {title: '姓名', field: 'name', width: 100},
        {title: '年龄', field: 'age', width: 100},
        {title: '分数', field: 'score', width: 100},
        {title: '年级', field: 'grade', width: 150}
      ],
      extendedColumns: [
        { field: 'index', width: 50}
      ],
      extendedColumns1: [
        { field: 'selection', width: 50 }
      ],
      extendedColumns2: [
        { field: "expend", expendField: "description", width: 50 }
      ],
      selectedItems: [],
      code: `
        <div>
          <m-table :columns="columns" :data-source="dataSource"></m-table>
        </div>

        <script>
          export default {
            data() {
              return {
                dataSource: [
                  { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' },
                  { key: 2, name: '小李', age: 9, score: 40, grade: '二年级' },
                  { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级' },
                  { key: 4, name: '老王', age: 30, score: 60, grade: '六年级' },
                ],
                columns: [
                  {title: '姓名', field: 'name'},
                  {title: '年龄', field: 'age'},
                  {title: '分数', field: 'score'},
                  {title: '年级', field: 'grade'}
                ]
              }
            }
          }
        <\/script>
      `,
      stripedCode: `
        <div>
          <m-table :columns="columns" :data-source="dataSource" :striped="true"></m-table>
        </div>

        <script>
          export default {
            data() {
              return {
                dataSource: [
                  { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' },
                  { key: 2, name: '小李', age: 9, score: 40, grade: '二年级' },
                  { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级' },
                  { key: 4, name: '老王', age: 30, score: 60, grade: '六年级' },
                ],
                columns: [
                  {title: '姓名', field: 'name'},
                  {title: '年龄', field: 'age'},
                  {title: '分数', field: 'score'},
                  {title: '年级', field: 'grade'}
                ]
              }
            }
          }
        <\/script>
      `,
      borderedCode: `
        <div>
          <m-table :columns="columns" :data-source="dataSource" :bordered="true"></m-table>
        </div>

        <script>
          export default {
            data() {
              return {
                dataSource: [
                  { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' },
                  { key: 2, name: '小李', age: 9, score: 40, grade: '二年级' },
                  { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级' },
                  { key: 4, name: '老王', age: 30, score: 60, grade: '六年级' },
                ],
                columns: [
                  {title: '姓名', field: 'name'},
                  {title: '年龄', field: 'age'},
                  {title: '分数', field: 'score'},
                  {title: '年级', field: 'grade'}
                ]
              }
            }
          }
        <\/script>
      `,
      loadingCode: `
        <div>
          <m-table :columns="columns" :data-source="dataSource" :loading="true"></m-table>
        </div>

        <script>
          export default {
            data() {
              return {
                dataSource: [
                  { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' },
                  { key: 2, name: '小李', age: 9, score: 40, grade: '二年级' },
                  { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级' },
                  { key: 4, name: '老王', age: 30, score: 60, grade: '六年级' },
                ],
                columns: [
                  {title: '姓名', field: 'name'},
                  {title: '年龄', field: 'age'},
                  {title: '分数', field: 'score'},
                  {title: '年级', field: 'grade'}
                ]
              }
            }
          }
        <\/script>
      `,
      fixHeadCode: `
        <div>
          <m-table :columns="columns" :data-source="dataSource1" :fixedHead="true" :height="300"></m-table>
        </div>

        <script>
          export default {
            data() {
              return {
                dataSource: [
                  { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' },
                  { key: 2, name: '小李', age: 9, score: 40, grade: '二年级' },
                  { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级' },
                  { key: 4, name: '老王', age: 30, score: 60, grade: '六年级' },
                  { key: 5, name: '胖子', age: 10, score: 80, grade: '四年级' },
                  { key: 6, name: '小红', age: 17, score: 100, grade: '六年级' },
                  { key: 7, name: '小绿', age: 15, score: 77, grade: '四年级' },
                  { key: 8, name: '阿紫', age: 20, score: 88, grade: '五年级' },
                  { key: 9, name: 'tony', age: 28, score: 78, grade: '二年级' },
                  { key: 10, name: 'mark', age: 30, score: 22, grade: '三年级' },
                ],
                columns: [
                  {title: '姓名', field: 'name'},
                  {title: '年龄', field: 'age'},
                  {title: '分数', field: 'score'},
                  {title: '年级', field: 'grade'}
                ]
              }
            }
          }
        <\/script>
      `,
      indexCode: `
        <div>
          <m-table :columns="columns" :data-source="dataSource" :extended-columns="extendedColumns"></m-table>
        </div>

        <script>
          export default {
            data() {
              return {
                dataSource: [
                  { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' },
                  { key: 2, name: '小李', age: 9, score: 40, grade: '二年级' },
                  { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级' },
                  { key: 4, name: '老王', age: 30, score: 60, grade: '六年级' },
                ],
                columns: [
                  {title: '姓名', field: 'name'},
                  {title: '年龄', field: 'age'},
                  {title: '分数', field: 'score'},
                  {title: '年级', field: 'grade'}
                ],
                extendedColumns: [
                  { field: 'index', width: 50}
                ]
              }
            }
          }
        <\/script>
      `,
      selectedCode: `
        <div>
          <m-table
            :columns="columns" :data-source="dataSource"
            :extended-columns="extendedColumns" :selected-items.sync="selectedItems"
          ></m-table>
        </div>

        <script>
          export default {
            data() {
              return {
                dataSource: [
                  { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' },
                  { key: 2, name: '小李', age: 9, score: 40, grade: '二年级' },
                  { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级' },
                  { key: 4, name: '老王', age: 30, score: 60, grade: '六年级' },
                ],
                columns: [
                  {title: '姓名', field: 'name'},
                  {title: '年龄', field: 'age'},
                  {title: '分数', field: 'score'},
                  {title: '年级', field: 'grade'}
                ],
                extendedColumns: [
                  { field: 'selection', width: 50 }
                ],
                selectedItems: []
              }
            }
          }
        <\/script>
      `,
      descriptionCode: `
        <div>
          <m-table
            :columns="columns" :data-source="dataSource"
            :extended-columns="extendedColumns"
          ></m-table>
        </div>

        <script>
          export default {
            data() {
              return {
                dataSource: [
                  { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级', description: '这是一行描述文字'},
                  { key: 2, name: '小李', age: 9, score: 40, grade: '二年级', description: '这是一行描述文字' },
                  { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级', description: '这是一行描述文字' },
                  { key: 4, name: '老王', age: 30, score: 60, grade: '六年级', description: '这是一行描述文字' },
                ],
                columns: [
                  {title: '姓名', field: 'name'},
                  {title: '年龄', field: 'age'},
                  {title: '分数', field: 'score'},
                  {title: '年级', field: 'grade'}
                ],
                extendedColumns: [
                  { field: "expend", expendField: "description", width: 50 }
                ]
              }
            }
          }
        <\/script>
      `,
      sortCode: `
        <div>
          <m-table
            :columns="columns" :data-source="dataSource"
            @on-sort="onSort"
          ></m-table>
        </div>

        <script>
          export default {
            data() {
              return {
                dataSource: [
                  { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级'},
                  { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级'},
                  { key: 4, name: '老王', age: 30, score: 60, grade: '六年级'},
                  { key: 2, name: '小李', age: 9, score: 40, grade: '二年级'},
                ],
                columns: [
                  {title: '姓名', field: 'name'},
                  {title: '年龄', field: 'age', sortType: true},
                  {title: '分数', field: 'score', sortType: true},
                  {title: '年级', field: 'grade'}
                ]
              }
            },
            methods: {
              onSort({ sortType, currentColumn }) {
                const field = currentColumn.field;
                this.dataSource3 = this.dataSource3.sort((a, b) => {
                  // 升序
                  if(sortType === 'asc') {
                    return b[field] - a[field]
                  }
                  // 降序
                  if(sortType === 'desc') {
                    return a[field] - b[field]
                  }
                })
            }
          }
        <\/script>
      `,
      extendCode: `
        <m-table :columns="columns2" :data-source="dataSource">
          <template v-slot:actions="slotProps">
            <m-button>编辑</m-button>
            <m-button>删除</m-button>
          </template>
        </m-table>

        <script>
          export default {
            data() {
              return {
                dataSource: [
                  { key: 1, name: '阿豆', age: 10, score: 100, grade: '三年级' },
                  { key: 2, name: '小李', age: 9, score: 40, grade: '二年级' },
                  { key: 3, name: '阿花', age: 12, score: 90, grade: '五年级' },
                  { key: 4, name: '老王', age: 30, score: 60, grade: '六年级' },
                ],
                columns: [
                  {title: '姓名', field: 'name', width: 100},
                  {title: '年龄', field: 'age', width: 100},
                  {title: '分数', field: 'score', width: 100},
                  {title: '年级', field: 'grade', width: 150}
                ]
              }
            }
          }
        <\/script>
      `
    }
  },
  methods: {
    onSort({ sortType, currentColumn }) {
      const field = currentColumn.field;
      this.dataSource3 = this.dataSource3.sort((a, b) => {
        // 升序
        if(sortType === 'asc') {
          return b[field] - a[field]
        }
        // 降序
        if(sortType === 'desc') {
          return a[field] - b[field]
        }
      })
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
