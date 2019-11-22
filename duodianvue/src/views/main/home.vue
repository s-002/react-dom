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
import axios from 'axios'
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
      ...mapMutations({
        getdata:'getdata'
      }),
      golist(){
        this.$router.push('/list')
      }
  },
  created(){
    axios.get('/api/data').then(res=>{
      console.log('res..',res)
      this.getdata(res.data)
    })
  }
}
</script>