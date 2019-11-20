import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
class Home extends React.Component{
    render() {
        let {list} =this.props
        return <div className='contentbox'>
            <div>上面的版  效果敲完再排！ 嗯  好的</div>
            <div className='listdata'>
                {
                    list.map((item,index)=>{
                        return <dl key={index}>
                            <dd><img src={item.src}></img></dd>
                            <dt>{item.varietal}</dt>
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
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)