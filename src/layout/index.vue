<style lang="scss" scoped>

.menu_layout{
    width: 100%;
    margin: 0px 0px;
    display: flex; 
}
.content_large{
     width: calc( 100% - 200px );
}
.content_small{
     width: calc( 100% - 63px );
}
</style>
<template>
    <div class="menu_layout">
        <!--elmenu-->
        <Sidebar></Sidebar>
        <div class="content horizontal-collapse-transition" :class="sidebarCollapse ?'content_small': 'content_large'">
          <Narbar></Narbar>
            <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/layout/components/Sidebar"
import Narbar from "@/layout/components/Narbar/index"
import EventBus from "@/utils/event-bus.ts"
export default {
    components:{
       Sidebar,
       Narbar
    },
    data(){
        return {
            sidebarCollapse:false
        }
    },
    computed: {
    key() {
        console.log(this.$route.path)
        return this.$route.path
    }
  },
  mounted(){
     console.log("注册")
           //eventBus 组件通讯
      EventBus.$on("fold",()=>{
        console.log("fold")
         this.sidebarCollapse=true
      })

      EventBus.$on("extend",()=>{
        console.log("extend")
         this.sidebarCollapse=false
      })   

  },
  methods:{

  }

}
</script>
