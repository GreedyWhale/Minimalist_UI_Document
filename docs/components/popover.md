---
title: Popover 气泡卡片
---
# Popover 气泡卡片
### 引入组件
```vue
<template>
  <m-popover>
    <template v-slot:content>
      <p>这虽然是游戏，但可不是闹着玩的</p>
    </template>
    <m-button :options="{shape: 'rounded'}">Click Me</m-button>
  </m-popover>
  <m-popover trigger="hover">
    <template v-slot:content>
      <p>这味道……是说谎的味道</p>
    </template>
    <m-button :options="{shape: 'rounded', color: 'red'}">Hover Me</m-button>
  </m-popover>
</template>

<script>
  import { MPopover, MButton } from "@csr/m_ui";
  export default { 
    components: {
      MPopover,
      MButton
    }
  }
</script>
```

<popover-demos></popover-demos>