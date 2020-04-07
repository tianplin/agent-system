import Vue from "vue";
import VueRouter from "vue-router";




/*
 *@Description: vue-router
 *@Author: ChenTianP
 *@Date: 2020-04-02 15:10:56
*/

//页面总布局
const Layout=()=>import ("@/layout/index.vue")

//首页
const Home=()=>import("@/views/home/index.vue")

//菜单管理

//后台菜单
const Back=()=>import("@/views/menu-management/back/index.vue")
//前台管理
const Front=()=>import("@/views/menu-management/front/index.vue")


Vue.use(VueRouter);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const routes = [
  {
   path:"/",
   component:Layout,
   meta:{title:'系统首页',icon:"",role:""},
   children:[
    {
      path:"home",
      name:"home",
      component:Home,
      meta:{title:'首页',icon:"",role:""}
    }
   ]
  },
  //菜单管理
  {
    path:"/menuManagement",
    name:"menuManagement",
    component:Layout,
    meta:{title:'菜单管理',icon:"",role:""},
    children:[
      {
        path:"back",
        name:"back",
        component:Back,
        meta:{title:'后台管理',icon:"",role:""},
      },
      {
        path:"front",
        name:"front",
        component:Front,
        meta:{title:'前台管理',icon:"",role:""},
      },
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
