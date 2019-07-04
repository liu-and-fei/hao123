import React, { Component } from 'react'
import IconList from "./minComponents/iconList";
//例如映入按钮组件 ：import { Button } from 'antd-mobile'
import { withRouter } from 'react-router'
//这里导入组件 
import Head from './minComponents/heard/index'

const Head_1=withRouter(Head)

//这里导入组件
import Sortlist from './minComponents/sortList';

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <Head_1></Head_1>
        <IconList></IconList>
        <Sortlist></Sortlist>
      </div>
    )
  }
}
