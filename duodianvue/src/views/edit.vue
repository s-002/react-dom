<template>
   <div>
        <p class="type">编辑地址</p>
        <div>
            <div>
                <label for="">联系人</label>
                <input type="text" v-model="info.name">
            </div>
            <div>
                <label for="">手机号</label>
                <input type="number" v-model="info.phone">
            </div>
            <div>
                <label for="">地址</label>
                <input type="text" v-model="info.address">
            </div>
            <div>
                <label for="">详细地址</label>
                <input type="text" v-model="info.detail">
            </div>
        </div>
        <button v-if="this.id?true:false" @click="detallist">删除</button>
        <button @click="finish">完成</button>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  computed:{
    ...mapState({
      list:state=>state.list
    }),
    info(){
      if(this.id){
        let index=this.list.findIndex(item=>item.id==this.id)
        return this.list[index]
      }else{
        return {
          id:'',
          name:'',
          phone:'',
          address:'',
          detail:''
        }
      }
    }
  },
    created(){
      this.id=this.$route.query.id
    },
    methods:{
      ...mapMutations({
        deletelist:'deletelist',
        finishlist:'finishlist'
      }),
      detallist(){
        this.deletelist(this.info.id)
        window.history.back
      },
      finish(){
        // 判断字段是否合格
        if (!this.info.name){
            alert('请输入联系人')
            return;
        }
        if (!/\d{11}/.test(this.info.phone)){
            alert('请输入正确的手机号')
            return;
        }
        if (!this.info.address){
            alert('请输入联系地址')
            return;
        }
        if (!this.info.detail){
            alert('请输入详细地址')
            return;
        }
        this.finishlist(this.info)
        alert('添加成功')
        window.history.back();
      }
    }
}
</script>
