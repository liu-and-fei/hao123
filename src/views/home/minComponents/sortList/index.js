import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';

// 引入本页所需组件
import Fenleitop from './fenleitop';
import Fenleicontent from './fenleicontent';

// 引入本页style样式
import './style.scss';

class Sortlist extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tabs: [],
      hotSite: []
    }
  }

  componentDidMount () {
    // 发送ajax请求
    fetch('/hao123_api/page/getRootData?vit=h123&from=3w123&sample=1')
        .then(response => response.json())
        .then(res => {
          // console.log(res);
          this.setState({
            hotSite: res.hotSite,
            tabs: res.hotSite.map((item) => ({title: item.title}))
          })
        }, () => {
          console.log(this.state);
        });
  }
  render() {
    return (
        <div className="sortlist">
          { this.state.tabs.length>0
              ? <Tabs tabs={ this.state.tabs } initialPage={0} animated={false} tabBarUnderlineStyle={{ width: '30px',margin: '0 18px', borderColor: '#24a500' }}>
                { this.state.tabs.map((item, index) => (
                    <div className="sortlist-tab" key={ item.title } style={{ display: 'flex',flexDirection: 'column', backgroundColor: '#fff' }}>
                      <Fenleitop dataList={ this.state.hotSite.length > 0 ? this.state.hotSite[index].siteSales : [] }></Fenleitop>
                      <Fenleicontent index={ index } data={ this.state.hotSite.length>0 ? this.state.hotSite[index] : [] }></Fenleicontent>
                    </div>
                ))}
              </Tabs>
            : null
          }
          <div className="sortlist-more">
            <a href="https://baidu.com">
              更多 <span>></span>
            </a>
          </div>
        </div>
    );
  }
}

export default Sortlist;
