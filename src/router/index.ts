import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";



/*
 *@Description: vue-router
 *@Author: ChenTianP
 *@Date: 2020-04-02 15:10:56
*/

Vue.use(VueRouter);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.



const routes = [
  {path: "/", name: "Home", component: Home  },
  { path: "/about",name: "About", component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")   }
    
 
];

const router = new VueRouter({
  routes
});

export default router;
