import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middleware = applyMiddleware(thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(middleware))

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('root')
)
