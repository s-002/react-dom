<template>
  <div>
    <p>用户名：<input type="text" v-model="user"></p>
    <p>密码：<input type="text" v-model="pwd"></p>
    <button @click="loginbtn()">登录</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      user:'',
      pwd:'',
      logindata:[]
    }
  },
  methods: {
    loginbtn(){
      let flage=this.logindata.some(item=>{
        return item.user==this.user&&item.pwd==this.pwd
      })
      // console.log(flage)
      if(flage){
        window.localStorage.setItem('islogin',flage)
        this.$router.push('/')
      }
    }
  },
  async created(){
    await axios.get('/api/login').then(res=>{
      console.log(res)
      this.logindata=res.data
    })
  }
}
</script>