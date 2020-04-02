import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
//引入element -ui库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss"
import moment from 'moment'//导入文件 
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';

Vue.config.productionTip = false;

document.title="代理系统"

/*
 *@Description: 代理系统
 *@Author: ChenTianP
 *@Date: 2020-04-02 14:25:00
*/

//引用ElementUI
Vue.use(ElementUI)
//引用moment时间插件 具体方法见http://momentjs.cn/
Vue.prototype.$moment = moment

//引用图片查看器
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
