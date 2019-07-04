import React, { Component } from 'react'
//例如映入按钮组件 ：import { Button } from 'antd-mobile'

//这里导入组件
import Sortlist from './minComponents/sortList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Sortlist></Sortlist>
      </div>
    )
  }
}
