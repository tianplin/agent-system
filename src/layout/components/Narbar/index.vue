<style lang="scss" scoped>
 .narbar{
    width: 100%;
    min-width: 200px;
    height: 60px;
    background: #006DF1;
    color: white;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
     .option {
         width: 60%;
         height: 60px;
         display: flex;
         justify-content: space-around;
         align-items: center;

         i{
              font-size: 22px;
              cursor: pointer;
         }
    }
    .operate{
         width: 40%;
         height: 60px;
         font-size: 22px;
         display: flex;
         align-items: center;
         justify-content: flex-end;
         padding-right: 20px;

         .input-search{
            width:200px;
            margin-right:20px;
            height: 32px;
            transition: width 0.3s linear;
            font-size: 12px;
            color: #000 !important;
         }

         i{
              margin-right: 20px;
              cursor: pointer;
         }
         img{
              margin-right: 20px;
              background: white;
              border-radius: 50%;
              width: 30px;
              height: 30px;
              cursor: pointer; 
         }
         div{
              font-size: 16px;
              display: block;
              width: 100px;
              overflow: hidden;
         }
    }

 }

</style>
<template>
<div class="narbar">
     <div class="option">
         <i class="el-icon-s-unfold" v-if="collapse" @click="extend"></i>
          <i class="el-icon-s-fold" v-if="!collapse" @click="fold"></i>
         <div>首页</div>
         <div>会员</div>
         <div>财务</div>
         <div>业务</div>
         <div>生产</div>
         <div>工单</div>
         <div>备案</div>
         <div>站务</div>
         <div>系统</div>
     </div>
     <div class="operate">
     <el-input v-model="search" placeholder="输入功能关键字进行搜索" size="small" style="" class="input-search" suffix-icon="el-icon-search"></el-input>
        <i class="el-icon-message" ></i>
        <i class="el-icon-message-solid"  ></i>
        <i class="el-icon-s-home"></i>
        <img src="@/assets/icons/head.svg" />
        <div>超级管理员</div>
     </div>
</div>
</template>
<script>
import EventBus from "@/utils/event-bus.ts"

export default {
     data(){
         return {
              search:"",
              collapse:false

         }
     },
     methods:{
        fold:function(){
             this.collapse=true
             EventBus.$emit("fold")
           
        },
        extend:function(){
            this.collapse=false
            EventBus.$emit("extend")
        }
     }
}
</script>
