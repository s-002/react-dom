import {createStore} from 'redux'

let reduce=(state,action)=>{
    state=JSON.parse(JSON.stringify(state))
    // console.log(action)
    if(action.type==='GETDATA'){
        state.list=action.data
    }
    //添加到购物车
    if(action.type==='ADDcart'){
        ++action.data.count
        let old=state.cartlist.some(item=>{
            return item.id===action.data.id
        })
        if(!old){
            state.cartlist.push(action.data)
            // alert('添加成功')
            // window.confirm('添加成功')
        }
    }
    ///加
    if(action.type==='add'){
        state.cartlist.forEach(item=>{
            if(item.id===action.item.id){
                ++item.count
            }
        })
    }
    ///减
    if(action.type==='remove'){
        state.cartlist.forEach((item,index)=>{
            if(item.id===action.item.id){
                if(item.count==1){
                    item.count=1
                   if(window.confirm('是否要删除')) {
                        state.cartlist.splice(index,1)
                   }
                   
                }
                else{
                    item.count--
                }
            }
        })
    }
    //反选
    if(action.type==='CHECK'){
        state.cartlist.forEach(item=>{
            if(item.id===action.item.id){
               item.flage=!item.flage
            }
        })
       state.allchecked=state.cartlist.every(item=>{
            return item.flage
        })
    }
    //全选
    if(action.type==='ALL-check'){
        state.allchecked=!state.allchecked
        state.cartlist.map(item=>{
            return item.flage=state.allchecked
        })
    }
    return state
}
let initstate={
    list:[],
    cartlist:[],
    allchecked:false
}

export default createStore(reduce,initstate)