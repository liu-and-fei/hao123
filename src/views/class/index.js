import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './index.css'

import Tuijian from './tuijian/index';
import Junshi from './junshi/index';
import Yule from './yule/index';
import Guoji from './guoji/index';
import Shehui from './shehui/index';
import Gaoxiao from './gaoxiao/index';
import Tiyu from './tiyu/index';

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
                <span><NavLink to={`/`}>推荐</NavLink></span>
                <span><NavLink to={`/junshi`}>军事</NavLink></span>
                <span><NavLink to={`/yule`}>娱乐</NavLink></span>
                <span><NavLink to={`/guoji`}>国际</NavLink></span>
                <span><NavLink to={`/shehui`}>社会</NavLink></span>
                <span><NavLink to={`/gaoxiao`}>搞笑</NavLink></span>
                <span><NavLink to={`/tiyu`}>体育</NavLink></span>
            </nav>
        </div>
        <Switch>
          <Route path={`/`} component={Tuijian} />
          <Route path={`/junshi`} component={Junshi} />
          <Route path={`/yule`} component={Yule} />
          <Route path={`/guoji`} component={Guoji} />
          <Route path={`/shehui`} component={Shehui} />
          <Route path={`/gaoxiao`} component={Gaoxiao} />
          <Route path={`/tiyu`} component={Tiyu} />
          {/* <Redirect to="/tuijan" /> */}
        </Switch>

      </div>
    );
  }

}

