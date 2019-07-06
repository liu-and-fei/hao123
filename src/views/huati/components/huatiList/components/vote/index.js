import React, { Component } from 'react'
import "./style.css";
import fenxiang from "../list/fenxiang.png";
import { Popover} from 'antd-mobile';
const Item = Popover.Item;

export default class Vote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      qingshang: 0,
      zhishang: 0
    }
    this.handlePk.bind(this,this.qingshang)
    this.handlePk1.bind(this.state.zhishang)
  }
  handlePk (zhishang) {
    this.setState ({
      zhishang: zhishang*1+1
    })
  }
  handlePk1 (qingshang) {
    this.setState ({
      qingshang: qingshang*1+1
    })
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
    let qingshang = this.state.qingshang
    let zhishang = this.state.zhishang
    let data = this.props.data
    let style1 = {
      width: zhishang*1/(qingshang*1+zhishang*1)*341+'px'
    }
    let style2 = {
      left: zhishang*1/(qingshang*1+zhishang*1)*341-10+'px'
    }
    return (
      <>
      <li className="huati_list">
        <div className="list_header">
          <img src={data.topic_info.cover_img} alt=""/>
          {data.topic_info.topic_name}
        </div>
        <h4>{data.title}</h4>
        <div className="vote_img">
          <img src={data.img_list[0]} alt=""/>
        </div>
        <div className="vote_pk">
          <div className="zhishang" onClick={this.handlePk.bind(this,zhishang)} style={style1}>智商({Math.round(zhishang*1/(zhishang*1+qingshang*1)*100)}%)</div>
          <span style={style2}></span>
          <div className="qingshang" onClick={this.handlePk1.bind(this,qingshang)} >情商({100-Math.round(zhishang*1/(zhishang*1+qingshang*1)*100)}%)</div>
        </div>
        <div className="vote_tag">
          <p><i>{data.comment_total}评论</i></p>
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
      </>
    )
  }

  static getDerivedStateFromProps(props, state) {
    const qingshang = props.data['100']
    const zhishang = props.data['101']
    if(zhishang !== state.zhishang && qingshang !== state.qingshang) {
      return {
        qingshang: qingshang,
        zhishang: zhishang
      }
    }
    return null
  }
}
