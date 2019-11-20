import React from 'react'
import RouterView from '../router/routerView'
import {Link} from 'react-router-dom'
import '../css/index.css'
class Main extends React.Component{
    state={
        carnum:0
    }
  
    render() {
        // console.log(this.props)
        return <div className='box'>
        <div className='content'>
             <RouterView routes={this.props.routes}></RouterView>
        </div>
        <div className='tapBar'>
            <Link to='/main/home'>保送到家</Link>
            <Link to='/main/about'>分类</Link>
            <Link to='/main/vip'>会员</Link>
            <Link to='/main/cart'>购物车<span className='cartnum'> {this.state.carnum}</span></Link>
            <Link to='/main/my'>我的</Link>
        </div>
            
                
            
        </div>
    }
}
export default Main