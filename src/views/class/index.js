import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Tuijian from './tuijian/index';
import Junshi from './junshi/index';
import Yule from './yule/index';
import Guoji from './guoji/index';
import Shehui from './shehui/index';
import Gaoxiao from './gaoxiao/index';
import Tiyu from './tiyu/index';
import Login from '../home/minComponents/login';
import Baibu from '../home/minComponents/login';

import './index.css'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showdisplay: 'none'
    }
  }
  render() {
    return (
      <div className="main-feed">
        <div className="feed-fix" style={{ display: this.state.showdisplay }} >
            <nav className="feed-nav">
                <span><NavLink to={`/home`}>推荐</NavLink></span>
                <span><NavLink to={`/junshi`}>军事</NavLink></span>
                <span><NavLink to={`/yule`}>娱乐</NavLink></span>
                <span><NavLink to={`/guoji`}>国际</NavLink></span>
                <span><NavLink to={`/shehui`}>社会</NavLink></span>
                <span><NavLink to={`/gaoxiao`}>搞笑</NavLink></span>
                <span><NavLink to={`/tiyu`}>体育</NavLink></span>
            </nav>
        </div>
        <Switch>
          <Route path={`/home`} component={Tuijian} />
          <Route path={`/junshi`} component={Junshi} />
          <Route path={`/yule`} component={Yule} />
          <Route path={`/guoji`} component={Guoji} />
          <Route path={`/shehui`} component={Shehui} />
          <Route path={`/gaoxiao`} component={Gaoxiao} />
          <Route path={`/tiyu`} component={Tiyu} />
          <Route path='/search' component={Baibu}></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect to="/home" />
        </Switch>

      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.shownav)
  }
  shownav = () => {
    let scrolllist = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(scrolllist)
    if (scrolllist > 850) {
      this.setState({
        showdisplay: 'block'
      })
    } else {
      this.setState({
        showdisplay: 'none'
      })
    }
  }
}

