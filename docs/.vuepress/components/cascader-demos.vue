<template>
  <div>
    <h3 class="title">基础用法</h3>
    <div class="components-wrappper">
      <m-cascader :source="sourceData"></m-cascader>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(code) }}</code></pre>
    </div>

    <h3 class="title">禁用选项</h3>
    <div class="components-wrappper">
      <m-cascader :source="sourceData1"></m-cascader>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(disableCode) }}</code></pre>
    </div>

    <h3 class="title">默认选中</h3>
    <div class="components-wrappper">
      <m-cascader :source="sourceData" v-model="selected"></m-cascader>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(selectedCode) }}</code></pre>
    </div>

    <h3 class="title">动态加载次级选项</h3>
    <div class="components-wrappper">
      <m-cascader :source.sync="sourceData2" v-model="selected1" :loadData="loadMore"></m-cascader>
      <div class="code">代码</div>
      <pre><code>{{ trimFromCodeStr(loadCode) }}</code></pre>
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
          <td>默认选中的选项，选中选项发生改变，改值会同步更新</td>
          <td>array</td>
          <td></td>
        </tr>
        <tr>
          <td>source</td>
          <td>
            级联选择器选项数据，如果需要动态加载次级选项，需要加上.sync修饰符，
            或监听update:source事件手动更新。详情参考sourceItem表</td>
          <td>array</td>
          <td></td>
        </tr>
        <tr>
          <td>loadData</td>
          <td>
            用于动态加载次级选项的函数，该函数接受两个参数：
            <p>selectedItem: 当前选中的选项，类型：object</p>
            <p>callback: 将新数据传入该回调函数用于更新source</p>
          </td>
          <td>array</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h3 class="title">sourceItem</h3>
    <table class="table">
      <thead>
        <tr>
          <th>属性</th><th>说明</th><th>类型</th><th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>选项的值</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>label</td>
          <td>选项的展示的文本</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>children</td>
          <td>
            选项的子选项，该值是一个数组，数组中的每一项的格式和sourceItem相同，
            如果选项需要动态的加载子选项，那么该属性必须存在，值为空数组
          </td>
          <td>array</td>
          <td></td>
        </tr>
        <tr>
          <td>disable</td>
          <td>
            是否禁用选项
          </td>
          <td>array</td>
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
          <td>select</td>
          <td>点击选项时触发</td>
          <td>当前点击的选项的value，返回类型为：array</td>
        </tr>
        <tr>
          <td>change</td>
          <td>点击选项时触发</td>
          <td>当前点击的选项，返回类型为：object</td>
        </tr>
         <tr>
          <td>selected-items</td>
          <td>点击选项时触发</td>
          <td>各父级选项组成的数组：array</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { MCascader } from "@csr/m_ui";
import { highlightCode, trimFromCodeStr } from "../methods";

export default {
  name: 'cascader-demos',
  components: {
    MCascader
  },
  data() {
    return {
      trimFromCodeStr: trimFromCodeStr,
      selected: ['chunwu', 'shifengbu', 'biqigubafan'],
      selected1: [],
      sourceData: [
        {
          label: "火影",
          value: "huoying",
          children: [
            {
              label: "三忍",
              value: "sanren",
              children: [
                { label: "自来也", value: "zilaiye" },
                { label: "大蛇丸", value: "dashewan" },
                { label: "纲手", value: "gangshou" }
              ]
            },
            {
              label: "晓",
              value: "xiao",
              children: [
                { label: "佩恩", value: "peien" },
                { label: "小南", value: "xiaonan" },
                { label: "迪达拉", value: "didala" },
                { label: "蝎", value: "xie" },
                { label: "角都", value: "jiaodu" },
                { label: "飞段", value: "feiduan" },
                { label: "鼬", value: "you" },
                { label: "干柿鬼鲛", value: "ganshiguijiao" },
                { label: "绝", value: "jue" },
                { label: "阿飞", value: "afei" },
                { label: "枇杷十藏", value: "pipashizang" },
              ]
            }
          ]
        },
        {
          label: "银魂",
          value: "yinhun",
          children: [
            {
              label: "万事屋",
              value: "wanshiwu",
              children: [
                { label: "坂田银时", value: "bantianyinshi" },
                { label: "神乐", value: "shenle" },
                { label: "志村新八", value: "zhicunxinba" },
              ]
            }
          ]
        },
        {
          label: "春物",
          value: "chunwu",
          children: [
            {
              label: "侍奉部",
              value: "shifengbu",
              children: [
                { label: "比企谷八幡", value: "biqigubafan" },
                { label: "由比滨结衣", value: "youbibinjieyi" },
                { label: "雪之下雪乃", value: "xuezhixiaxuenai" },
              ]
            }
          ]
        }
      ],
      sourceData1: [
        {
          label: "火影",
          value: "huoying",
          children: [
            {
              label: "三忍",
              value: "sanren",
              children: [
                { label: "自来也", value: "zilaiye", disable: true },
                { label: "大蛇丸", value: "dashewan" },
                { label: "纲手", value: "gangshou" }
              ]
            },
            {
              label: "晓",
              value: "xiao",
              children: [
                { label: "佩恩", value: "peien" },
                { label: "小南", value: "xiaonan" },
                { label: "迪达拉", value: "didala" },
                { label: "蝎", value: "xie" },
                { label: "角都", value: "jiaodu" },
                { label: "飞段", value: "feiduan" },
                { label: "鼬", value: "you" },
                { label: "干柿鬼鲛", value: "ganshiguijiao" },
                { label: "绝", value: "jue" },
                { label: "阿飞", value: "afei" },
                { label: "枇杷十藏", value: "pipashizang" },
              ]
            }
          ]
        },
        {
          label: "银魂",
          value: "yinhun",
          disable: true,
          children: [
            {
              label: "万事屋",
              value: "wanshiwu",
              children: [
                { label: "坂田银时", value: "bantianyinshi" },
                { label: "神乐", value: "shenle" },
                { label: "志村新八", value: "zhicunxinba" },
              ]
            }
          ]
        },
        {
          label: "春物",
          value: "chunwu",
          children: [
            {
              label: "侍奉部",
              value: "shifengbu",
              children: [
                { label: "比企谷八幡", value: "biqigubafan" },
                { label: "由比滨结衣", value: "youbibinjieyi" },
                { label: "雪之下雪乃", value: "xuezhixiaxuenai" },
              ]
            }
          ]
        }
      ],
      sourceData2: [
        {
          label: "火影",
          value: "huoying",
          children: [
            {
              label: "三忍",
              value: "sanren",
              children: [
                {
                  label: "自来也",
                  value: "zilaiye",
                  children: []
                },
                { label: "大蛇丸", value: "dashewan" },
                { label: "纲手", value: "gangshou" }
              ]
            },
            {
              label: "晓",
              value: "xiao",
              children: [
                { label: "佩恩", value: "peien" },
                { label: "小南", value: "xiaonan" },
                { label: "迪达拉", value: "didala" },
                { label: "蝎", value: "xie" },
                { label: "角都", value: "jiaodu" },
                { label: "飞段", value: "feiduan" },
                { label: "鼬", value: "you" },
                { label: "干柿鬼鲛", value: "ganshiguijiao" },
                { label: "绝", value: "jue" },
                { label: "阿飞", value: "afei" },
                { label: "枇杷十藏", value: "pipashizang" },
              ]
            }
          ]
        },
        {
          label: "银魂",
          value: "yinhun",
          children: [
            {
              label: "万事屋",
              value: "wanshiwu",
              children: [
                { label: "坂田银时", value: "bantianyinshi" },
                { label: "神乐", value: "shenle" },
                { label: "志村新八", value: "zhicunxinba" },
              ]
            }
          ]
        },
        {
          label: "春物",
          value: "chunwu",
          children: [
            {
              label: "侍奉部",
              value: "shifengbu",
              children: [
                { label: "比企谷八幡", value: "biqigubafan" },
                { label: "由比滨结衣", value: "youbibinjieyi" },
                { label: "雪之下雪乃", value: "xuezhixiaxuenai" },
              ]
            }
          ]
        }
      ],
      code: `
        <m-cascader :source="sourceData"></m-cascader>

        <script>
          export default {
            data() {
              return {
                sourceData: [
                  {
                    label: "火影",
                    value: "huoying",
                    children: [
                      {
                        label: "三忍",
                        value: "sanren",
                        children: [
                          { label: "自来也", value: "zilaiye" },
                          { label: "大蛇丸", value: "dashewan" },
                          { label: "纲手", value: "gangshou" }
                        ]
                      },
                      {
                        label: "晓",
                        value: "xiao",
                        children: [
                          { label: "佩恩", value: "peien" },
                          { label: "小南", value: "xiaonan" },
                          { label: "迪达拉", value: "didala" },
                          { label: "蝎", value: "xie" },
                          { label: "角都", value: "jiaodu" },
                          { label: "飞段", value: "feiduan" },
                          { label: "鼬", value: "you" },
                          { label: "干柿鬼鲛", value: "ganshiguijiao" },
                          { label: "绝", value: "jue" },
                          { label: "阿飞", value: "afei" },
                          { label: "枇杷十藏", value: "pipashizang" }
                        ]
                      }
                    ]
                  },
                  {
                    label: "银魂",
                    value: "yinhun",
                    children: [
                      {
                        label: "万事屋",
                        value: "wanshiwu",
                        children: [
                          { label: "坂田银时", value: "bantianyinshi" },
                          { label: "神乐", value: "shenle" },
                          { label: "志村新八", value: "zhicunxinba" }
                        ]
                      }
                    ]
                  },
                  {
                    label: "春物",
                    value: "chunwu",
                    children: [
                      {
                        label: "侍奉部",
                        value: "shifengbu",
                        children: [
                          { label: "比企谷八幡", value: "biqigubafan" },
                          { label: "由比滨结衣", value: "youbibinjieyi" },
                          { label: "雪之下雪乃", value: "xuezhixiaxuenai" }
                        ]
                      }
                    ]
                  }
                ],
              }
            }
          }
        <\/script>
      `,
      disableCode: `
        <m-cascader :source="sourceData"></m-cascader>

        <script>
          export default {
            data() {
              return {
                sourceData: [
                  {
                    label: "火影",
                    value: "huoying",
                    children: [
                      {
                        label: "三忍",
                        value: "sanren",
                        children: [
                          { label: "自来也", value: "zilaiye", disable: true },
                          { label: "大蛇丸", value: "dashewan" },
                          { label: "纲手", value: "gangshou" }
                        ]
                      },
                      {
                        label: "晓",
                        value: "xiao",
                        children: [
                          { label: "佩恩", value: "peien" },
                          { label: "小南", value: "xiaonan" },
                          { label: "迪达拉", value: "didala" },
                          { label: "蝎", value: "xie" },
                          { label: "角都", value: "jiaodu" },
                          { label: "飞段", value: "feiduan" },
                          { label: "鼬", value: "you" },
                          { label: "干柿鬼鲛", value: "ganshiguijiao" },
                          { label: "绝", value: "jue" },
                          { label: "阿飞", value: "afei" },
                          { label: "枇杷十藏", value: "pipashizang" }
                        ]
                      }
                    ]
                  },
                  {
                    label: "银魂",
                    value: "yinhun",
                    disable: true,
                    children: [
                      {
                        label: "万事屋",
                        value: "wanshiwu",
                        children: [
                          { label: "坂田银时", value: "bantianyinshi" },
                          { label: "神乐", value: "shenle" },
                          { label: "志村新八", value: "zhicunxinba" }
                        ]
                      }
                    ]
                  },
                  {
                    label: "春物",
                    value: "chunwu",
                    children: [
                      {
                        label: "侍奉部",
                        value: "shifengbu",
                        children: [
                          { label: "比企谷八幡", value: "biqigubafan" },
                          { label: "由比滨结衣", value: "youbibinjieyi" },
                          { label: "雪之下雪乃", value: "xuezhixiaxuenai" }
                        ]
                      }
                    ]
                  }
                ],
              }
            }
          }
        <\/script>
      `,
      selectedCode: `
        <m-cascader :source="sourceData" v-model="selected"></m-cascader>

        <script>
          export default {
            data() {
              return {
                sourceData: [
                  {
                    label: "火影",
                    value: "huoying",
                    children: [
                      {
                        label: "三忍",
                        value: "sanren",
                        children: [
                          { label: "自来也", value: "zilaiye" },
                          { label: "大蛇丸", value: "dashewan" },
                          { label: "纲手", value: "gangshou" }
                        ]
                      },
                      {
                        label: "晓",
                        value: "xiao",
                        children: [
                          { label: "佩恩", value: "peien" },
                          { label: "小南", value: "xiaonan" },
                          { label: "迪达拉", value: "didala" },
                          { label: "蝎", value: "xie" },
                          { label: "角都", value: "jiaodu" },
                          { label: "飞段", value: "feiduan" },
                          { label: "鼬", value: "you" },
                          { label: "干柿鬼鲛", value: "ganshiguijiao" },
                          { label: "绝", value: "jue" },
                          { label: "阿飞", value: "afei" },
                          { label: "枇杷十藏", value: "pipashizang" }
                        ]
                      }
                    ]
                  },
                  {
                    label: "银魂",
                    value: "yinhun",
                    children: [
                      {
                        label: "万事屋",
                        value: "wanshiwu",
                        children: [
                          { label: "坂田银时", value: "bantianyinshi" },
                          { label: "神乐", value: "shenle" },
                          { label: "志村新八", value: "zhicunxinba" }
                        ]
                      }
                    ]
                  },
                  {
                    label: "春物",
                    value: "chunwu",
                    children: [
                      {
                        label: "侍奉部",
                        value: "shifengbu",
                        children: [
                          { label: "比企谷八幡", value: "biqigubafan" },
                          { label: "由比滨结衣", value: "youbibinjieyi" },
                          { label: "雪之下雪乃", value: "xuezhixiaxuenai" }
                        ]
                      }
                    ]
                  }
                ],
              }
            }
          }
        <\/script>
      `,
      loadCode: `
        <m-cascader :source.sync="sourceData" v-model="selected" :loadData="loadMore"></m-cascader>

        <script>
          export default {
            data() {
              return {
                sourceData: [
                  {
                    label: "火影",
                    value: "huoying",
                    children: [
                      {
                        label: "三忍",
                        value: "sanren",
                        children: [
                          { label: "自来也", value: "zilaiye", children: []},
                          { label: "大蛇丸", value: "dashewan" },
                          { label: "纲手", value: "gangshou" }
                        ]
                      },
                      {
                        label: "晓",
                        value: "xiao",
                        children: [
                          { label: "佩恩", value: "peien" },
                          { label: "小南", value: "xiaonan" },
                          { label: "迪达拉", value: "didala" },
                          { label: "蝎", value: "xie" },
                          { label: "角都", value: "jiaodu" },
                          { label: "飞段", value: "feiduan" },
                          { label: "鼬", value: "you" },
                          { label: "干柿鬼鲛", value: "ganshiguijiao" },
                          { label: "绝", value: "jue" },
                          { label: "阿飞", value: "afei" },
                          { label: "枇杷十藏", value: "pipashizang" }
                        ]
                      }
                    ]
                  },
                  {
                    label: "银魂",
                    value: "yinhun",
                    children: [
                      {
                        label: "万事屋",
                        value: "wanshiwu",
                        children: [
                          { label: "坂田银时", value: "bantianyinshi" },
                          { label: "神乐", value: "shenle" },
                          { label: "志村新八", value: "zhicunxinba" }
                        ]
                      }
                    ]
                  },
                  {
                    label: "春物",
                    value: "chunwu",
                    children: [
                      {
                        label: "侍奉部",
                        value: "shifengbu",
                        children: [
                          { label: "比企谷八幡", value: "biqigubafan" },
                          { label: "由比滨结衣", value: "youbibinjieyi" },
                          { label: "雪之下雪乃", value: "xuezhixiaxuenai" }
                        ]
                      }
                    ]
                  }
                ],
              }
            },
            methods: {
              loadMore(sourceItem, onUpdateSource) {
                if(sourceItem.value === 'zilaiye') {
                  let data = [
                    { label: "少年佩恩", value: "shaonianpeien" },
                    { label: "鸣人", value: "mingren" },
                    { label: "波风水门", value: "bofengshuimen" }
                  ]
                  setTimeout(() => {
                    onUpdateSource(data)
                  }, 3000)
                }
              }
            }
          }
        <\/script>
      `
    }
  },
  methods: {
    loadMore(sourceItem, onUpdateSource) {
      if(sourceItem.value === 'zilaiye') {
        let data = [
          { label: "少年佩恩", value: "shaonianpeien" },
          { label: "鸣人", value: "mingren" },
          { label: "波风水门", value: "bofengshuimen" }
        ]
        setTimeout(() => {
          onUpdateSource(data)
        }, 3000)
      }
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
