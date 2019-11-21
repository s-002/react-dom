import React,{Component} from 'react'
import {connect} from 'react-redux'
class Cart extends Component{
    maxmoney=(cartlist)=>{//计算总价
        let maxmoney=0
         cartlist.forEach(item=>{
            if(item.flage){//循环判断是否选中
               maxmoney+=item.count*item.price
            }
        })
        return maxmoney
      
    }
    render(){
        // console.log(this.props)
        return <div>
           购物车
           <div className='cartcont'>
               <div style={{display:'flex',height:'20px',lineHeight:'20px',borderBottom: "1px solid #ccc"}}>
                    <input type='checkbox' onChange={()=>{this.props.allcheck()}} checked={this.props.allchecked} style={{margin:'4px'}}/>
                    <p>多点超市</p>
               </div>
                {
                    this.props.cartlist.map((item,index)=>{
                        return <dl key={index}>
                            <input type='checkbox' onChange={()=>{this.props.checkbtn(item)}} checked={item.flage}  style={{margin:'30px 10px'}}/>
                            <dt>
                                <p>{item.varietal}</p><br/>
                                <p>
                                    <span>￥{item.price}</span>
                                </p>
                            </dt>
                            <dd>
                                <button onClick={()=>{this.props.changenum('remove',item)}}>-</button>
                                <span>{item.count}</span>
                                <button onClick={()=>{this.props.changenum('add',item)}}>+</button>
                            </dd>
                        </dl>
                    })
                }
            </div>
            <div>
                 <p>合计:￥{this.maxmoney(this.props.cartlist)}</p>
            </div>
        </div>
    }
}

let mapStateToProps=store=>{
    // console.log(store)
  let {cartlist,allchecked}=store
    return {
        cartlist,
        allchecked
    }
}

let mapDispatchToProps=dispatch=>{
    return {
        changenum(type,item){//加减
            dispatch({
                type,
                item
            })
        },
        checkbtn(item){//反选
            dispatch({
                type:'CHECK',
                item
            })
        },
        allcheck(){///全选
            dispatch({
                type:'ALL-check'
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)