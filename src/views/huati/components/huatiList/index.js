import React, { Component } from 'react'
import { Popover, NavBar, Icon } from 'antd-mobile';
import image from '../../images/fenxiang.png'

const Item = Popover.Item;

export default class HuatiList extends Component {
  constructor (props) {
  super (props)
    this.state = {
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
    console.log(this.props.Huati)
    let item = this.props.Huati
    return (
        <li className="list_item">
          <div className="item_header">
            <img src={item.topic_info.cover_img} alt="" className="item_img" />
            {item.topic_info.topic_name}
          </div>
          <h2>{item.title}</h2>
          <div className="atlas">
            <img src={item.img_list[0]} alt=""/>
          </div>
          <div className="list_bottm">
            <p><span>05/24</span><b>图集</b></p>
            <Popover
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Item key="4" value="scan">分享到:</Item>),
                (<Item key="5" value="special">QQ空间</Item>),
                (<Item key="6" value="button ct">新浪微博</Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <p>
                <i>分享</i><img src={image} alt=""/>
              </p>
            </Popover>
          </div>
        </li>
    )
  }
}
