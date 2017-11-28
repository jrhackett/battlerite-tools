import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import demo from './demo'

const reducers = combineReducers({
    demo,
    routing: routerReducer
})

export default reducers
