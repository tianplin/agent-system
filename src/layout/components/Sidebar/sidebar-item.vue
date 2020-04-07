
<style lang="scss" >
.horizontal-collapse-transition .el-submenu__title .el-submenu__icon-arrow{
  opacity: 1;
}
</style>
<template>
<fragment>
    <template v-for="menu in menu_data" >
    <el-submenu :index="menu.path" v-if="menu.children" :key="menu.path">
        <template slot="title">
            <i class="el-icon-location"></i>
           <span >{{menu.meta.title}}</span>
        </template>
        <template>
           <sidebarItem :menu_data="menu.children"></sidebarItem>
        </template>
    </el-submenu>
    <app-link  v-else :key="menu.path" :to="menu.path">
    <el-menu-item :index="menu.path" >
        <i class="el-icon-menu"></i>
        <span slot="title">{{menu.meta.title}}</span>
    </el-menu-item>
    </app-link>
    </template>
</fragment>
</template>

<script>
import sidebarItem from './sidebar-item.vue'
import AppLink from './Link';
export default {
  name:"sidebarItem",
  components: {
    sidebarItem,
    AppLink

  },
  props: {
    menu_data: Array
  },
  data () {
    return {
      xx:"",
      hah:"",
      sidebarCollapse:false,
    }
  },
  mounted(){
          //eventBus 组件通讯




  },
  methods: {
  }

}
</script>
