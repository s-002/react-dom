import React,{Component} from 'react'
import {connect} from 'react-redux'
import Request from '../until/request'
class Details extends Component{
    state={
        list:this.props.location.state,
        flage:false
    }
    num(id){
        Request('/get/num',id).then(data=>{
            // console.log(data)
            this.setState({
                list:data,
                flage:true
            })
        })
    }
    render(){
        return <div>
             <p onClick={()=>{this.props.history.goBack()}}>返回</p>
                <div className='divs'>
                    <span className="spans">{this.state.list.name}</span>
                    <h4>{this.state.list.qusetion}</h4>
                    <p>{this.state.list.befaulr}</p>
                    {this.state.flage?<span className="spans" >{this.state.list.num}已赞同·41评论</span>:
                    <span className="spans" onClick={()=>{this.num(this.state.list.id)}}>{this.state.list.num}赞同·41评论</span>}
                </div>      
        </div>
    }
    
}
let mapStateToProps=(store)=>{
    return {

    }
}

let mapdispatchToProps=(dispatch)=>{
    return {
        
    }
}
Details=connect(mapStateToProps,mapdispatchToProps)(Details)
export default Details