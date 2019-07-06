import React, { Component } from 'react'
import IconList from "./minComponents/iconList";
import { withRouter } from 'react-router-dom';

//这里导入组件
import Head from './minComponents/heard/index'
import Sortlist from './minComponents/sortList';
import Class from '../class/index.js';

const Head1=withRouter(Head);

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <Head1></Head1>
        <IconList></IconList>
        <Sortlist></Sortlist>
        <Class />
      </div>
    )
  }

}
