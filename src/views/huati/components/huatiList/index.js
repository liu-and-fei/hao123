import React, { Component } from 'react'
import { Popover} from 'antd-mobile';
import image from '../../images/fenxiang.png'
import List from "./components/list";
import Text from "./components/text";
import Vote from "./components/vote";
import { connect } from "react-redux";

const Item = Popover.Item;

class HuatiList extends Component {
  constructor (props) {
  super (props)
    this.state = {
      visible: false,
      selected: '',
      HuatiList: {}
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
    console.log(this.props.huati.huatiList.huati.resource_list.list)
    let images = null
    return (
        <li className="list_item">
          {/* <div className="item_header">
            <img src={list.topic_info.cover_img} alt="" className="item_img" />
            {list.topic_info.topic_name}
          </div>
          <h2>{list.title}</h2>
          <div className="atlas">
            {
              list.map((item) => {
              if (item.conten_type === 'image-list') {
                images = List
              }else if (item.conten_type === 'image-text') {
                images = Text
              }else if (item.conten_type === 'vote') {
                images = Vote
              }
              return images
              })
          }
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
          </div> */}
        </li>
    )
  }
}
export default connect (
  (huati) => ({
    huati
  })
)(HuatiList)
