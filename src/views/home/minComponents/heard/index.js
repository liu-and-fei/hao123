import React, { Component } from 'react'
import './heard.css'
import axios from 'axios'
import Baibu from '../baidu'
import { connect } from 'react-redux'
import { Route,Switch } from 'react-router-dom'
import Login from '../login'

 class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lunar: '',
      city: '',
      desc: '',
      w5: '晴天',
      option: [],
      temp: '',
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path='/search' component={Baibu}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      <div className="head">
        <h1>
          <a href="https://j.php?z=2&page=index_cxv3&pos=head_background&category=&qt=tz&url=http%3A%2F%2Fapp.hao123.com%2Fapp&key=03b198af68153ba7f1032ce48e470152" className="logo">
            <img src="//m.hao123.com/static/img/logo/logo-2.0.png" alt=""/>
          </a>

          {/* 滚动天气 */}
          <div className="calender">
            <div className="list">
              <div className="list_top">
                {this.state.city}
                <div className="list_top_i">
                  <div className="list-top_ii">
                    <i>{this.state.desc}</i>
                    <i>{this.state.w5}</i>
                    <i>未来七天</i>
                  </div>
                </div>
              </div>
              <div className="list-bot">
                <span className="span_1">
                  发财
                      </span>
                <span className='span_2'>{
                  this.state.lunar
                }</span>
              </div>
            </div>
          </div>

          {/* 天气图标 */}
          <a href={`https://m.baidu.com/s?word=天气&ie=utf-8&from=1014994n&sa=re_dl_cont_hao123_top_0&rsf=14558020510171201_99`} className="icon-tianqi">
          </a>
          {/* 温度 */}
          <a href={`https://m.baidu.com/s?word=温度&ie=utf-8&from=1014994n&sa=re_dl_cont_hao123_top_0&rsf=14558020510171201_99`} className="icon-wendu">
            {this.state.temp}
            <span></span>
          </a>
          {/* 登录弹出按钮 */}
          <div className="btn_login" onClick={this.fn3}>
            {
              [1, 2, 3].map(item => {
                return (
                  <span key={item}></span>
                )
              })
            }
          </div>
        </h1>
        {/* 百度搜索框 */}
        <div className="search">
          <input type="text" placeholder="搜你想搜的" onFocus={this.fn1}/>
          <span>
            <i className="iconfont icon-xiangji" ></i>
          </span>
          <a href="https://baidu.com">百度一下</a>
        </div>
        {/* 候选项 */}
        <div className="options">
          {
            this.state.option.map((item, index) => {
              return (
                <a href={`https://m.baidu.com/s?word=${item.title}&ie=utf-8&from=1014994n&sa=re_dl_cont_hao123_top_0&rsf=14558020510171201_99`} key={index} >
                  {item.title}
                </a>
              )
            })
          }
          <span className="yy"></span>
        </div>
      </div>

      </div>
    )

  }

  fn1=() => {
    this.props.history.push('/search');
  };
  fn3=() => {
    this.props.history.push('/login')
  };

  componentDidMount() {
    //数据请求
    axios.get('/hao123_api/page/getRootData?vit=h123&from=3w123&sample=1').then(respones => {
      let res = respones.data.header;
      // console.log(res);
      //将数据写到仓库中
      this.setState({
        lunar: res.almanac.date,
        option: res.gxhWords,
        city: res.weather.city,
        desc: res.weather.desc,
        //w5: res.weather.alarm[0].w5,
        temp: res.weather.temp
      });
      this.props.fn1(res.searchList);
      this.props.fn2(res)
    }
    );

    // this.props.fn1()

    // 滚动天气的小轮播图
    let top = document.getElementsByClassName('list_top_i')[0];
    // let maxTop=document.getElementsByClassName('calender')[0];
    let m = 16;
    let fn1 = () => {
      if (m > 32) {
        m = 0
        // top.scrollTop=0;
      }
      if (top.scrollTop >= m) {
        clearInterval(time);
        setTimeout(() => {
          m += 16;
          setInterval(fn1, 100);
        }, 1000);
      }
      top.scrollTop += 1;
    };

    // let fn2=() => {
    //   if(maxTop.scrollTop>41){
    //     maxTop.scrollTop=0;
    //   }
    //   console.log( maxTop.scrollTop)
    //   maxTop.scrollTop+=1;
    // }
    // let time_3=setInterval(fn2,100)
    let time = setInterval(fn1, 100);

   }
}

export default connect(
  null,
  dispatch => (
   {
     fn1(list){
       dispatch({
         type:'searchList',
         value:list
       })
      },
      fn2(res){
        dispatch({
          type:'SETRES',
          value:res
        })
      }
   }
  )
)(Head)

