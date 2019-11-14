import React,{Component} from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import '../css/index.css'
import {connect} from 'react-redux'
import Request from '../until/request'

class Home extends Component{
    state={
        navlist:[
            {
                name:'关注',
            },{
                name:'推荐',
            },{
                name:'热榜',
            }
        ],
        bootlist:[
            {
                name:'首页',
            },{
                name:'想法',
            },{
                name:'大学',
            },{
                name:'消息',
            },{
                name:'我的',
            }
        ],
        isNan:0
    }
    detail=(item)=>{
        this.props.history.push('/detail',item)
    }
    render(){
        let {navlist,bootlist,isNan}=this.state
        let {list} =this.props
        return <div className='box'>
            <div className="topnav">
                <input type='text' placeholder="高考志愿填报" />
                <span style={{color:'blue'}}>提问</span>
            </div>
            <div className="content">
                {/* 顶部导航 */}
                <ul className="ul">
                    {
                        navlist.map((item,index)=>{
                            return <li className={isNan===index?'active':''}  key={index}>{item.name}</li>
                        })
                    }
                </ul>
                {/* 列表数据渲染 */}
                <div className='con'>
                {
                      list.map((item,key)=>{
                          return <div onClick={()=>{this.detail(item)}} key={key} className='divs'>
                              <span className="spans">{item.name}</span>
                              <h4>{item.qusetion}</h4>
                              <p>{item.befaulr}</p>
                              <span className="spans">{item.num}赞同·41评论</span>
                          </div>
                      })  
                    }  
                </div>
            </div>
            {/* 底部导航 */}
            <div className="bootlist">
                {
                    bootlist.map((item,index)=>{
                        return <span className={isNan===index?'active':''} key={index}>{item.name}</span>
                    })
                }
            </div>
        </div>
    }
    componentDidMount(){
        this.props.getdata()
    }
}

let mapStateToProps=(store)=>{
    // console.log(store)
    let {list} =store
    return {
        list
    }
}
let mapDispathToProps=(dispatch)=>{
    return {
        getdata(){
            Request('/get/data').then(data=>{
                dispatch({type:'DATA',list:data})
            })
        }
    }
}

Home=connect(mapStateToProps,mapDispathToProps)(Home)
export default Home