import React from 'react'
import RouterView from '../router/routerView'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../css/index.css'
class Main extends React.Component{
    render() {
        return <div className='box'>
            <div className='content'>
                <RouterView routes={this.props.routes}></RouterView>
            </div>
            <div className='tapBar'>
                <Link to='/main/home'>保送到家</Link>
                <Link to='/main/about'>分类</Link>
                <Link to='/main/vip'>会员</Link>
                <Link to='/main/cart'>购物车<span className='cartnum'> {
                    this.props.cartlist.reduce((total,item)=>{return total+=item.count},0)
                }</span></Link>
                <Link to='/main/my'>我的</Link>
            </div>
        </div>
    }
}


let mapStateToProps=store=>{
    // console.log(store)
    let {cartlist}=store
    return {
        cartlist
    }
}

let mapDispatchToProps=dispatch=>{
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)
