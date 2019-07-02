import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
import HuatiList from "./components/huatiList";
import { Popover, NavBar, Icon } from 'antd-mobile';

export default class Huati extends Component {
  constructor (props) {
    super (props)
    this.state = {
      headerImg: 'https://gss0.bdstatic.com/5eR1cXSg2QdV5wybn9fN2DJv/assets/wise-huati/img/huati/logo_dc5cbd5.png',
      resource_list: [],
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
    let {headerImg, resource_list, QQ, sina} = this.state
    return (
      <div>
        <header className="header">
          <Link to='/home'>返回</Link>
          <img src={headerImg} alt="有料" className="header_img"/>
          <Link to='/'>我的关注</Link>
        </header>
        <ul>
          {resource_list.map((item, index) => (
            <HuatiList Huati={item} key={index}></HuatiList>
          ))}
        </ul>
      </div>
    )
  }

    componentDidMount () {
      axios.get('/hao123_api/huati/getRootData')
      .then(response => {
        this.setState({
          resource_list: response.data.data.resource_list.list
        })
      })

  }

}


