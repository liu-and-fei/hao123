import React from 'react';
import '../common/index.css';
import Imglist from '../common/imglist';
import Imglisttwo from '../common/imglisttwo';
import Smallicon from '../common/smallicon';

export default class Tuijian extends React.Component {
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this)
    this.state = {
      page: 1,
      list: []
    }
  }
  render() {
    return (
      <div>
        <ul className="bd-feed">
          {this.state.list.map((item, index) => {
            if (item.news_id) {
              // console.log(item.imgs.length)
              if (item.imgs.length !== 1) {
                return (
                  <li key={index}>
                    <a href={`https://m.hao123.com/news/shoubaiDetail/${item.originid}?id=${item.channel}`}>
                      <div>
                        <h2 className="title">{item.title}</h2>
                        <Imglist imgList={item.imgs} imgnum={item.image_num}/>
                        <p className="tags">
                          <span className="tag">{item.author}</span>
                          <span className="tag">{item.display_time}</span>
                        </p>
                      </div>
                    </a>
                  </li>
                )
              } else {
                return (
                  <li className="li-two" key={index}>
                    <a href={`https://m.hao123.com/news/shoubaiDetail/${item.originid}?id=${item.channel}`}>
                      <div>
                        <h2 className="title oneimg">{item.title}</h2>
                        <Imglisttwo imgList={item.imgs} imgnum={item.image_num}/>
                        <p className="tags tag-two">
                        <span className="tag">{item.author}</span>
                        <span className="tag">{item.display_time}</span>
                        </p>
                      </div>
                    </a>
                </li>
                )
              }

            } else {
              return null;
            }
          })}
        </ul>
        <Smallicon callback={this.callback}/>
      </div>
    )
  }
  componentDidMount() {
    this.getshehuilist(1); //默认加载第一页数据
    window.addEventListener('scroll', this.refresh)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.refresh)
  }
  callback = () => {
    // console.log(1)
    let page = this.state.page + 1;
      this.setState({
        page: page
      })
    // console.log(page);
    this.getshehuilist(1);
    this.getshehuilist(page);

  }
  refresh() {
    //当前滚动条位置
    let scrolllist = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(scrolllist);
    //文章高度
    var h = document.body.scrollHeight || document.documentElement.scrollHeight
    // console.log(h)
    //浏览器视口高度
    var w = document.documentElement.clientHeight || document.body.clientHeight
    // console.log(w)
    if (h - w - scrolllist < 1) {
      // console.log(1);
      let page = this.state.page + 1;
      this.setState({
        page: page
      })
      // console.log(page)
      this.getshehuilist(page);
    }
  }

  getshehuilist(page){
    fetch(`/hao123_api/stream/news?params={%22page%22:%22index_cxv3%22}&newIndex=1&size=8&max_id=0&timestamp=1562212595491&page=${page}&id=102&city=%E6%B7%B1%E5%9C%B3`)
  .then(response => response.json())
    .then(res => {
      // console.log(res.list);
      if (page === 1) {
        this.setState({
          list: res.list
        })
      } else {
        this.setState({
          list: this.state.list.concat(res.list)
        })
      }

    })
  }

}

