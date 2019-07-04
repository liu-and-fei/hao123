import React, { Component } from 'react'
import './login.css'
import { connect } from 'react-redux'

 class Login extends Component {
  render() {
    let date=this.props.res.date
    let temp=this.props.res.weather &&this.props.res.weather.temp;
    let desc=this.props.res.weather &&this.props.res.weather.desc;
    return (
      <div  className="login">
        {/* 头像等头部 */}
          <div className="heard">
            <p>
              <img src="//m.hao123.com/static/img/logo-menu.png"/>
              <i className="iconfont ont icon-guanbi" onClick={this.fn5}></i>
            </p>
          <span>
            <img src='https://gss1.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/288de599ace7a9bae5b08a8e3e'/>
          </span>
          <div className='login_btn'>
              <a href='javascipt:;'>签到领金币</a>
              <a href='javascipt:;' onClick={this.fn6}>退出登录</a>
          </div>
          </div>
          {/*日期、温度、天气 */}
          <div className='hd_menu_pos'>
            <a href="" className="a_1">
            <i className="iconfont icon-riqi"></i>
            {date}
             </a>
            <a href="" className="a_2">{temp}°C&nbsp;/&nbsp;{desc}</a>
          </div>
          {/* 各种服务 */}
            <div className="hd_menu_set">
              <a href="">客服端</a>
              <a href="" className="img_1">意见反馈</a>
              <a href="" className="img_2">位置服务</a>
              <a href="" className="img_3">好答学院</a>
              <a href="" className="img_4">pc版</a>
              <a href="" className="img_5">网址大全</a>
            </div>

          {/* 底部内容 */}
          <div className="hd-menu-record">
              <a href="">
                <span></span>
                <span>京公网安备 11000002000001号  京ICP证030173号</span>
              </a>
              <div className="hd-menu-record-item">
                <a href="">
                服务协议
                </a>
                <span></span>
                <a href="">
                转码声明
                </a>
                <span></span>
                <a href="">
                意见反馈
                </a>
              </div>
          </div>
      </div>
    )
  }

  fn5=() => {
    this.props.history.push('/')
    document.getElementById('root').style.backgroundColor='#fff'
  }

  fn6=() => {
    this.props.history.push('/')
    document.getElementById('root').style.backgroundColor='#fff'
  }

  componentDidMount(){
    document.getElementById('root').style.backgroundColor='rgba(0,0,0,.5)'
  }
}

export default connect(
  state => {
    return {
      res:state.heard.res
    }
  },null
)(Login)