import React, { Component } from 'react'
import { Popover} from 'antd-mobile';
import "./style.css";
import fenxiang from "./fenxiang.png";
const Item = Popover.Item;

export default class List extends Component {
  constructor (props) {
    super(props)
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
    let data = this.props.data
    return (
      <li className="huati_list">
        <div className="list_header">
          <img src={data.topic_info.cover_img} alt=""/>
          {data.topic_info.topic_name}
        </div>
        <h4>{data.title}</h4>
        <div className="list_img">
          <img src={data.img_list[0]} alt=""/>
        </div>
        <div className="list_tag">
          <p><i>{data.time}</i><span>图集</span></p>
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
              <p>分享<img src={fenxiang} alt=""/></p>
            </Popover>
        </div>
      </li>
    )
  }
}
