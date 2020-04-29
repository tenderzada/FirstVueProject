import Vue from 'vue'
import App from './App.vue'

//自动寻找roter目录中的index.js
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

// 挂载路由
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// axios({
//   // 默认为 get 请求
//   url:'http://123.207.32.32:8000/home/multidata',
//   // method:'post'
// }).then(res =>{
//   console.log(res);
// })
