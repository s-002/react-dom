import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    current:1,
  },
  mutations: {
    //获取数据
    getdata(state,payload){
      state.list=payload
    },
    //根据下标替换current
    getcuttent(state,payload){
      // console.log(payload)
      state.current=payload
    },
    //完成时判断id没有id直接push 有就找到对应数据替换
    finishlist(state,payload){
      if(payload.id){
        let index=state.list.findIndex(item=>item.id===payload.id)
        state.list[index]=payload
      }else{
        payload.id=state.list.length+1;
        state.list.push(payload)
      }
    },
    //删除
    deletelist(state,payload){
      let index=state.list.findIndex(item=>item.id===payload)
      state.list.splice(index,1)
      window.history.back()
    },
    //减
    detele(state,payload){
      let index=state.list.findIndex(item=>item.id===payload)
      if(state.list[index].num<=0){
        state.list[index].num=0
      }else{
        state.list[index].num--
      }
    },
    //加
    add(state,payload){
      let index=state.list.findIndex(item=>item.id===payload)
      ++state.list[index].num
    }
  },
  actions: {

  },
  modules: {
  }
})
