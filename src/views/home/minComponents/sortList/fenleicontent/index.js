import React, {Component} from 'react';
import { Icon, Grid  } from 'antd-mobile';

// 引入本组件css
import './style.scss';

const Outlist = ({ outlist, gridData }) => {

  if (outlist) {
    return (
        <div className="outlist">
          { outlist.map((item, index) => <li key={ 'fc-outlist'+item.title } style={ item.color ? { color: item.color } : {} }>{ item.title }</li>) }
        </div>
    )
  } else if (gridData) {
    let gridStyle ={ width: 69, height: 40 };
    return (
        <div className="chaxun-grid">
          <Grid data={ gridData.map(item => ({text: item.title})) } square={false} columnNum={5} itemStyle={ gridStyle }></Grid>
        </div>
    )
  } else{
    return null;
  }

};

class Inlist extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false
    }
  }

  toggle () {
    this.setState({
      show: !this.state.show
    });
  }

  render () {
    return (
        <div className="inlist">
          { this.state.show ? <Grid data={ this.props.inlist.map(item => ({text: item.title})) } square={false} columnNum={4} itemStyle={{ width: 86, height: 40, lineHeight: 40, color: '#222' }}></Grid> : null }
          <div className="jiantou">
            <Icon type={ this.state.show ? 'up' : 'down' } size="xs" color="#ccc" onClick={ this.toggle.bind(this) }></Icon>
          </div>
        </div>
    )
  }
}


const Fenleicontent = ({ data }) => {
  let dataList = data.siteTexts;
  let iconList = data.siteIcons;
  let imgUrl;
  if (dataList.length>0) {
    // 只渲染6条数据
    if (dataList[0].length && dataList.length >6) {
      dataList = dataList.filter((item, index) => index<5);
    }
    if(iconList.length>0) {
      imgUrl = [
        { text: '按摩', icon: 'http://wap.hao123.com/static/wangzhi/fujin1.png' },
        { text: '洗浴', icon: 'http://wap.hao123.com/static/wangzhi/fujin2.png' },
        { text: '加油站', icon: 'http://wap.hao123.com/static/wangzhi/fujin3.png' },
        { text: '银行', icon: 'http://wap.hao123.com/static/wangzhi/fujin4.png' },
        { text: '附近', icon: 'http://wap.hao123.com/static/wangzhi/fujin5.png' }
      ]
    }
    return (
        <div className="fenlei-content">
          { iconList.length>0 ? <Grid data={ imgUrl } square={false} hasLine={false} columnNum={5} itemStyle={{ width: 80, height: 80 }}></Grid> : null }
          {
            dataList[0].length
              ? dataList.map((item, index) => {
                  return (
                      <div className="fenlei-item" key={'fenlei-item' + index}>
                        <Outlist outlist={item.filter((item, index) => index < 5)}></Outlist>
                        {item.length
                            ?
                            <Inlist inlist={item.length ? item.filter((item, index) => index>=5) : item }></Inlist>
                            : null
                        }
                      </div>
                  )})
              : <Outlist gridData={dataList}></Outlist>
          }
        </div>
    )
  }
  return null;
};

export default Fenleicontent;
