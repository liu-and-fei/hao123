import { createStore, combineReducers, compose } from 'redux';

import * as reducers from './reducer'

export default createStore(
  combineReducers(reducers),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
