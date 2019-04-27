---
title: Menu 菜单
---
# Menu 菜单
### 引入组件
```vue
<template>
  <div>
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
  </div>
</template>

<script>
  import { MMenu, MMenuItem, MSubMenu } from "@csr/m_ui";
  export default {
    components: {
      MMenu,
      MMenuItem,
      MSubMenu
    }
  }
</script>
```
<menu-demos></menu-demos>