import Vue from 'vue'
import Router from 'vue-router' // Router.1.1 导入路由包
import HelloWorld from '@/components/HelloWorld'

// 导入需要的路由组件
import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'

// Router.1.2 安装路由
Vue.use(Router)

export default new Router({
  routes: [ // 配置路由规则
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',      
      component: HomeContainer
    },
    {
      path: '/member',      
      component: MemberContainer
    },
    {
      path: '/shopcar',      
      component: ShopcarContainer
    },
    {
      path: '/search',      
      component: SearchContainer
    }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的class, 默认的class: router-link-active
})
