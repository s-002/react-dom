import {govList,addGov} from '../services/index'
export default {
  // 命名空间
  namespace: 'gov',

  // 原始数据
  state: {
    list:[],
    type:'',
    info:{}
  },

  // 异步操作
  effects: {
    *getGovList({ payload }, { call, put }) {  // eslint-disable-line
      let res=yield call(govList,1,2)
      console.log('data...',res) 
      yield put({ type: 'changeList' ,payload:res.data.list});
    },
    *addGov({payload},{call,put,select}){
      let {type}=yield select(state=>state.gov)
      console.log('type',type)
      if(type==='new'){
        let res=yield call(addGov,payload);
        console.log('res...',res)
      }else if(type==='edit'){

      }
    }
  },

  // 同步操作
  reducers: {
    changeList(state,{payload}){
      return {...state,list:payload}
    },
    goDetail(state, {payload}){
      let {type, info} = payload;
      return {...state, type, info}
    }
  },

};
