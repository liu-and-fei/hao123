import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HuatiList from "./components/huatiList";
import { initHuatiData } from "./store/actionCreate";

import "./style.css";

class Huati extends Component {
  constructor (props) {
    super (props);
    this.state = {
      headerImg: 'https://gss0.bdstatic.com/5eR1cXSg2QdV5wybn9fN2DJv/assets/wise-huati/img/huati/logo_dc5cbd5.png',
      visible: false,
      selected: '',
    }
  }

  // onSelect = (opt) => {
  //   this.setState({
  //     visible: false,
  //     selected: opt.props.value,
  //   });
  // };
  // handleVisibleChange = (visible) => {
  //   this.setState({
  //     visible,
  //   });
  // };

  render() {
    let huati = this.props.huati.huatiList.huati;
    let {headerImg} = this.state;
    return (
      <div>
        <header className="header">
          <Link to='/home'>返回</Link>
          <img src={headerImg} alt="有料" className="header_img"/>
          <Link to='/'>我的关注</Link>
        </header>
        <ul>
          {huati.map((item, index) => (
            <HuatiList huati={item} key={index}></HuatiList>
          ))}
        </ul>
      </div>
    )
  }
  componentDidMount () {
      this.props.handleGetHuatiData()
  }
}
export default connect (
  (state)=> ({
    huati: state
  })
  ,
  dispatch => ({
    handleGetHuatiData(){
      dispatch(initHuatiData())
    }
  })
)(Huati)

