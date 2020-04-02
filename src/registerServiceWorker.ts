/*
这个文件可以视情况用或者不用，它是用来做离线缓存等任务的，实际上就是为Vue项目注册了一个service worker。
这样的话，如果在线上，只要访问过一次该网站，以后即使没有网络也可以访问（此时使用的是之前缓存的资源）。
只在生产环境中有效（process.env.NODE_ENV === ‘production’）
*/

/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });
}
