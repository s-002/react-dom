import {createStore} from 'redux'

let reducer=(state,action)=>{
    if(action.type==='DATA'){
        state.list=action.list
    }
    
    return {...state}
}
let initstate={
    list:[]
}

let store=createStore(reducer,initstate)
export default store