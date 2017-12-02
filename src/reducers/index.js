import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import champions from './champions'

const reducers = combineReducers({
    champions,
    routing: routerReducer
})

export default reducers
