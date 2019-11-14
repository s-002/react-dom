import React,{Component} from 'react'

class Details extends Component{
    state={
        list:this.props.location.state
    }
    render(){
        console.log(this.props)
        return <div>
             <p onClick={()=>{this.props.history.goBack()}}>返回</p>
                <div className='divs'>
                    <span className="spans">{this.state.list.name}</span>
                    <h4>{this.state.list.qusetion}</h4>
                    <p>{this.state.list.befaulr}</p>
                    <span className="spans">{this.state.list.num}赞同·41评论</span>
                </div>      
        </div>
    }
}
export default Details