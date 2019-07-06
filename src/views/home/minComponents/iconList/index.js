import React from "react";

// import * as iconActions from './store/actionCreate';
import { connect } from 'react-redux';
import './index.css'
import axios from 'axios'
import { Link} from 'react-router-dom'

class Iconlist extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      iconList: [],
      links: [],
      urlList: []
    }
  }
  render () {
    // let iconList = this.props.list.iconList
    // let urlList = this.props.list.urlList
    // let links = this.props.list.links
    let {iconList ,urlList, links, style} = this.state;
    // console.log(style);

    return (
      <div className="list_all">
        <div className="iconList">
          {iconList.map((item, index) => (
            <div className="iconImg" key={index}>
              <img src={item.icon} alt=""/>
              <a href={item.url}>{item.title}</a>
            </div>
            ))}
        </div>
        <div className="urlList">
          {urlList.map((item, index) => (
          <a href={item.url} key={index}>{item.title}</a>
          ))}
        </div>
        <div className="hot_sale">
          <div className="hot">
            <Link to="/huati"></Link>
          </div>
          <div className="sale">
            <div className="inner_sale" style={style}>
              {links.map((item,index) => (
                <a href={item.url} key={index}>{item.title}</a>
              ))}
            </div>
          </div>
          <div className="go">
            <Link to="/huati">></Link>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {
    axios.get('/hao123_api/page/getRootData?vit=h123&from=3w123&sample=1')
    .then(response => {
      this.setState({
        iconList: response.data.siteIcon[0].sites,
        urlList: response.data.siteText[0].sites,
        links: response.data.midLine.links
      })
    })
  }
}

export default connect (
)(Iconlist)
