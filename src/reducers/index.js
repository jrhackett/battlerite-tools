import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import abilities from './abilities'
import champions from './champions'

const reducers = combineReducers({
  abilities,
  champions,
  routing: routerReducer
})

export default reducers
