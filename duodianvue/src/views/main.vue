<template>
  <div>
    <div class="box">
      <router-view></router-view>
    </div>
    
    <footer>
      <router-link to='/main/home'>配送到家</router-link>
      <router-link to='/main/classify'>分类</router-link>
      <router-link to='/main/vip'>vip</router-link>
      <router-link to='/main/cart'>购物车</router-link>
      <router-link to='/main/my'>我的</router-link>
    </footer>
  </div>
</template>
<style lang="scss">
  .box{
    width: 100%;
    height: 630px;
    overflow: auto;
  }
  footer{
    width: 100%;
    height: 40px;
    line-height:35px;
    display: flex;
    justify-content: space-around;
  }
</style>