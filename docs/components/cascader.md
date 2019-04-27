---
title: Cascader 级联选择器
---
# Cascader 级联选择器
### 引入组件
```vue
<template>
  <div>
    <m-cascader :source="sourceData"></m-cascader>
  </div>
</template>

<script>
  import { MCascader } from "@csr/m_ui";
  export default {
    components: {
      MCascader
    },
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
  }
</script>
```
<cascader-demos></cascader-demos>