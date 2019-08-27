<template>
  <div id="app" class="app-container">
     <mt-header fixed title="地表最强JS"></mt-header>   
      <!-- 让route-view内容切换的时候有个动画 -->
      <transition>
        <router-view></router-view>
      </transition>  
      <!-- 底部TabBar区域 -->
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopcar">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    
  }
}
</script>

<style scoped>
.app-container{
  padding-top: 40px;
  overflow-x: hidden;
}

/* 切换router-view区域时候的动画 */
.v-enter{
  opacity: 0;
  transform: translate(100%);
}
.v-leave-to{
  opacity: 0;
  /* 让页面往左方消失 */
  transform: translate(-100%);
  /* 防止页面先往下跑在往左消失 */
  position: absolute; 
}

.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
</style>
