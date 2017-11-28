import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppContainer from '../containers/AppContainer'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={ AppContainer } />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
)

export default Root
