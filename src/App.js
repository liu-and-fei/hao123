import React, { Component } from 'react'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import { AppWrap } from './styles/index'
import Home from './views/home'
import  './styles/reset.css'
import 'antd-mobile/dist/antd-mobile.css';

export default class App extends Component {
  render() {
    return (
      <Router>
      <AppWrap>
        <Switch>
           <Route path='/' component={ Home }></Route>
        </Switch>
      </AppWrap>
      </Router>
    )
  }
}
