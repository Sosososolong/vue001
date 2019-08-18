// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 在组件内使用组件第一步1. 引用
import router from './router'

// 按需导入 Mint-UI 中的组件
import { Header } from 'mint-ui'
// 引入样式
import 'mint-ui/lib/style.css'

// 做底部Tabbar引入mui样式 (mui直接复制过来的)
import './lib/mui/css/mui.min.css'
// 手动注册
Vue.component(Header.name, Header)

Vue.config.productionTip = false

/* eslint-disable no-new */
/* 这个Vue实例(Vue组件)没有标签名, 它时直接挂在到主渲染页面"index.html"的<div id="app"></div>标签上的, 那么渲染时它的"template"属性会直接替换掉它所挂在的标签<div id="app"></div> 
   所以此Vue实例的"template"模板中可以包含id="app"的div, 这就是它的"template"是"App.vue"组件, 包含了<div id=app></div>而不会冲突的原因 */
new Vue({
  el: '#app',
  router,
  components: { App }, // 使用组件第二步2. 声明
  template: '<App/>' // 使用组件第三步3. 使用
})
