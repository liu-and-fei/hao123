import React, { Component } from 'react'
import { HashRouter as Router,Route,Switch} from 'react-router-dom'
import { AppWrap } from './styles/index'
import  './styles/reset.css'
import 'antd-mobile/dist/antd-mobile.css';

import Home from './views/home'
import Huati from './views/huati'
// import Follow from './views/huati/follow'

export default class App extends Component {
  render() {
    return (
      <Router>
      <AppWrap>
        <Switch>
          <Route path='/huati' component={Huati}></Route>
            <Route path='/' component={Home} ></Route>
        </Switch>
      </AppWrap>
      </Router>
    )
  }
}
