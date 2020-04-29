// 配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import home from "../components/Home"
import about from "../components/about"

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
  const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的关系
  // routes 代表传入的选项
  // 具体实现在上面
  routes
})

// 3.将router对象传入到Vue实例
export default router
