import React, { Component } from 'react'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import  './styles/reset.css'
import { AppWrap } from './styles/index'
import Home from './views/home'

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
