import {createStore} from 'redux'

let reduce=(state,action)=>{
    state=JSON.parse(JSON.stringify(state))
    console.log(action)
    if(action.type==='GETDATA'){
        state.list=action.data
    }
    return state
}
let initstate={
    list:[]
}

export default createStore(reduce,initstate)