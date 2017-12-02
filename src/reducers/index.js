import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import demo from './demo'
import champions from './champions'

const reducers = combineReducers({
    champions,
    demo,
    routing: routerReducer
})

export default reducers
