import React,{Component} from 'react'
import {connect} from 'react-redux'
class Detail extends Component{
    state={
        detaildata:this.props.location.state
    }

    render(){
        // console.log(this.props)
        let {detaildata}=this.state
        return <div>
            <div className="topnav"> 
                <span onClick={()=>{this.props.history.goBack()}}>返回</span>
                <h4>{detaildata.varietal}</h4>
                <span>收藏</span>  
            </div>
            <div>
                <dl>
                    <dd><img src={detaildata.src} style={{width:'100%',height:'200px'}}></img></dd>
                    <dt>
                        <p>{detaildata.varietal}</p><br/>
                        <p><span>￥{detaildata.price}</span></p>
                    </dt>
                </dl>
            </div>
            <div className='cartbtn' onClick={()=>{this.props.addcart(detaildata)}}>加入购物车</div>
        </div>
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
        addcart(item){
            dispatch({
                type:'ADDcart',
                data:item
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)