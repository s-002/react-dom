import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
class Home extends React.Component{
    detail=(item)=>{
        this.props.history.push('/detail',item)
    }
    addcart=(e,item)=>{
        e.stopPropagation()//阻止事件冒泡
        this.props.addcart(item)   
    }
    render() {
        let {list} =this.props
        return <div className='contentbox'>
            <div>上面的版  效果敲完再排！ 嗯  好的</div>
            <div className='listdata'>
                {
                    list.map((item,index)=>{
                        return <dl key={index} onClick={()=>{this.detail(item)}}>
                            <dd><img src={item.src}></img></dd>
                            <dt>
                                <p>{item.varietal}</p><br/>
                                <p>
                                    <span>￥{item.price}</span>
                                    <button className='btn'  onClick={(e)=>{this.addcart(e,item)}}>+</button> 
                                </p>
                            </dt>
                            
                        </dl>
                        
                    })
                    
                }
            </div>
        </div>
    }
    async componentDidMount(){
        let res=await axios.get('/mock/data.json')
        // console.log(res.data)
        this.props.getdata(res.data)
    }
}

let mapStateToProps=store=>{
    // console.log(store)
    let {list}=store
    return {
        list
    }
}

let mapDispatchToProps=dispatch=>{
    return {
        getdata(data){
            dispatch({
                type:'GETDATA',
                data
            })
        },
        addcart(item){
            dispatch({
                type:'ADDcart',
                data:item
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)