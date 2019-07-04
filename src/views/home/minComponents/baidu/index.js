import React, { Component } from 'react'
import './baidu.css'
import { connect } from "react-redux"
import axios from 'axios'

class Baidu extends Component {
  state={
    baidu_search:'',
  }

  render() {
    return (
      <div className='baidu'>
        {/* 百度搜索框 */}
        <h1>
          <div className="baidu_search">
            <input type='text' value={this.baidi_value} onChange={this.fn4} ></input>
            <a href={`https://m.baidu.com/s?word=${this.state.baidu_search}&=&ref=www_colorful&st=111041&tn=iphone&from=1014994a`}>百度一下</a>
          </div>
        </h1>

        {/* 推荐搜索 */}
        <div className="his">
            {
              this.props.searchList.map((item,index) => {
                  return (
                    <div key={index}>
                      <a href={item.url} key={index}>
                        {item.title}
                        <i className="re" key={index}>
                      </i>
                      </a>
                    </div>
                  )
              })
            }
        </div>

        {/* 关闭、热搜榜 */}

        <div className='close'>
            <span><a href="javascipt:;">热搜榜</a></span>
            <span onClick={this.fn5}>关闭</span>
        </div>
      </div>
    )
  }

  fn4=(event) =>{
    this.setState({
      baidu_search:event.target.value
    })
  }

  fn5= () => {
    this.props.history.push('/')
    document.getElementById('root').style.backgroundColor='#fff'
  }


  componentDidMount(){
    document.getElementById('root').style.backgroundColor='rgba(0,0,0,.5)'
    document.getElementsByTagName('input')[0].focus();
  }
}


//返回容器组件
export default connect(
  (
    state => {
      return {
        searchList:state.heard.searchList
      }
      
    }
  )
,null
)(Baidu)
