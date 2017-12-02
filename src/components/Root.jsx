import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App/App'
import ChampionsContainer from '../containers/champions/ChampionsContainer'
import TopNavigation from './navigation/TopNavigation'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <div>
          <TopNavigation />
          <Switch>
            <Route path="/champions" component={ ChampionsContainer } />
            <Route path="/" component={ App } />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
)

export default Root
