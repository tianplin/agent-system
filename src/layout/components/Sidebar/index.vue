<style  lang="scss"  scoped>
   
//菜单栏宽度
$sidebarWidth:200px;
.sidebar{
  width: $sidebarWidth;
}
.logo {
  width: 100%;
  height: 60px;
  text-align: center;
   background: white;
  line-height: 60px;
  color: #006DF1;
  overflow: hidden;
  font-size: 22px;
  font-weight: bold;
}
.zt_bold {
  display: inline-block;
  overflow: hidden;
}
</style>
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
<template>
  <div class="sidebar horizontal-collapse-transition" :style="{'width':sidebarCollapse?'63px':'200px'}" ref="sidebar"  >
    <div class="logo ">
         MFAN&nbsp;代理系统
    </div>

    <el-menu
      :style="{'height':(winHeight-60)+'px'}"
      default-active="1"
      class="el-menu-vertical-demo"
      :unique-opened="false"
      collapse-transition
      :collapse="sidebarCollapse"
      @select="handleMenuSelect"
      ref="sidebarMenu"
    >
     <sidebarItem :menu_data="routers"></sidebarItem>
    </el-menu>

  </div>
</template>

<script>
import sidebarItem from './sidebar-item'
import EventBus from "@/utils/event-bus.ts"
export default {
  components: {
    sidebarItem,
  
  },
  props: {
    collapse: Boolean
  },
  data () {
    return {
        //屏幕高度 客户端高度||整体高度
        winHeight: document.documentElement.clientHeight || document.body.clientHeight,
        //是否折叠
        sidebarCollapse:false,
        
    }
  },
  computed: {
     routers(){
       console.log(this.$router.options.routes)
       return this.$router.options.routes
     }
  },
  mounted: function () {
    this.init()
      //eventBus 组件通讯
      EventBus.$on("fold",()=>{
      
        this.sidebarCollapse=true
      })

      EventBus.$on("extend",()=>{
        this.sidebarCollapse=false
      })      
  },
  watch: {
    // 折叠触发窗口变化
  },
  methods: {
    // 初始化项目
    init () {
      console.log("init")
    },
    // 遍历路由查询
    handleMenuSelect (index, indexPath) {
      console.log(indexPath)
    }
  
    

  }
}
</script>
