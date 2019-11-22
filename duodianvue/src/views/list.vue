<template>
  <div>
    <router-link to='/main/home'>返回</router-link>
    列表
    <ul>
       <li v-for="(item, index) in list" :key="index">
            <input type="checkbox" :checked='item.id==current' @click="getcuttent(item.id)"/>
            <div>
              <span>{{item.name}}</span>
              <span>{{item.phone}}</span>
              <span>{{item.address+item.detail}}</span>
              <span>￥{{item.pirece}}元</span>
              
            </div>
            <button @click="changelist('detele',item.id)">-</button>
            <span>{{item.num}}</span>
            <button @click="changelist('add',item.id)">+</button>
            <button @click="goedit(item.id)">编辑</button>
        </li>
    </ul>
    <button @click="goedit()">添加</button>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  computed:{
    ...mapState({
        list:state=>state.list,
        current:state=>state.current
    })
  },
  methods:{
     ...mapMutations({
       getcuttent:'getcuttent',
       detele:'detele',
       add:'add'
     }),
      goedit(id){//判断id跳路由
          id?this.$router.push('/edit?id='+id):this.$router.push('/edit');
      },
      changelist(type,id){//加减
        if(type=='detele'){
          this.detele(id)
        }else{
          this.add(id)
        }
      }
  }
}
</script>
<style lang="scss">
  li{
    margin: 10px;
  }
</style>