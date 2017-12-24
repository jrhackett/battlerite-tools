import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import abilities from './abilities'
import battlerites from './battlerites'
import champions from './champions'
import loadouts from './loadouts'

const reducers = combineReducers({
  abilities,
  battlerites,
  champions,
  loadouts,
  routing: routerReducer
})

export default reducers
