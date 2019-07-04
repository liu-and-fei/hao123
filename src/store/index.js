import { createStore,combineReducers,} from 'redux'

import reducers from './reducer'

export default createStore(combineReducers(reducers))
