import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";
import HuatiList from "./components/huatiList";
import { initHuatiData } from "./store/actionCreate";

class Huati extends Component {
  constructor (props) {
    super (props)
    this.state = {
      headerImg: 'https://gss0.bdstatic.com/5eR1cXSg2QdV5wybn9fN2DJv/assets/wise-huati/img/huati/logo_dc5cbd5.png',
      visible: false,
      selected: '',
    }
  }
  onSelect = (opt) => {
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  }
  render() {
    let {headerImg} = this.state
    return (
      <div>
        <header className="header">
          <Link to='/home'>返回</Link>
          <img src={headerImg} alt="有料" className="header_img"/>
          <Link to='/'>我的关注</Link>
        </header>
        <ul>
            <HuatiList></HuatiList>
        </ul>
      </div>
    )
  }
  componentDidMount () {
      this.props.handleGetHuatiData()
  }
}
export default connect (
  (huati)=> ({
    huati
  })
  ,
  dispatch => ({
    handleGetHuatiData(){
      dispatch(initHuatiData())
    }
  })
)(Huati)

