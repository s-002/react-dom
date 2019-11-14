import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component{
  render() {
    let {changebtn} =this.props
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <button onClick={()=>changebtn('+')}>+</button>
        <span>{this.props.num}</span>
        <button onClick={()=>changebtn('-')}>-</button>
      </div>
    );
  }
}

//props默认类型
IndexPage.propTypes = {
  num:Number 
};
//props默认值
IndexPage.defaultProps={
  num:1000
}

let mapStateToProps=(state)=>{
  // console.log(state)
  let {num}=state.example
  return{
    num
  }
}
let mapDispathToProps=(dispatch)=>{
  return {
    changebtn(type){
      dispatch({type:'example/changebtn',payload:{type}})
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(IndexPage);
