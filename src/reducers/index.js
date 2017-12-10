import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import abilities from './abilities'
import battlerites from './battlerites'
import champions from './champions'

const reducers = combineReducers({
  abilities,
  battlerites,
  champions,
  routing: routerReducer
})

export default reducers
