<template>
  <div>
    首页
   <p>
     <span>送至：</span>
     <span @click="golist()">{{info&&info.address}}</span>
   </p>
    
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  computed:{
    ...mapState({
        list:state=>state.list,
        current:state=>state.current
    }),
    info(){
        let index=this.list.findIndex(item=>item.id===this.current)
        return this.list[index]
    }
  },
  methods:{
      golist(){
        this.$router.push('/list')
      }
  }
}
</script>