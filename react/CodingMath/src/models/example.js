
export default {
  //命名空间
  namespace: 'example',

  //原始数据
  state: {
    num:2000
  },

  //异步操作
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  //同步操作
  reducers: {
    changebtn(state,action) {
      console.log(action)
      if(action.payload.type==='+'){
        ++state.num
      }else{
        --state.num
      }
      return { ...state};
    },
  },

};
