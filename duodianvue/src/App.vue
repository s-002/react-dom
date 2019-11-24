<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import axios from 'axios'

export default {
   methods:{
      ...mapMutations({
        getdata:'getdata'
      })
  },
  async created(){
   await axios.get('/api/data').then(res=>{
      console.log('res..',res)
      this.getdata(res.data)
    })
  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
