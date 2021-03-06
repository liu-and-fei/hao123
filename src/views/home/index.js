import React, { Component } from 'react'
import IconList from "./minComponents/iconList";
//例如映入按钮组件 ：import { Button } from 'antd-mobile'
import { withRouter } from 'react-router'

//这里导入组件
import Head from './minComponents/heard/index'
import Sortlist from './minComponents/sortList';
import Class from '../class/index.js';

const Head_1=withRouter(Head)

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <Head_1></Head_1>
        <IconList></IconList>
        <Sortlist></Sortlist>
        <Class />
      </div>
    )
  }

}
