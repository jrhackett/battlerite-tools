import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import ChampionsContainer from '../containers/champions/ChampionsContainer'
import LoadoutsContainer from '../containers/loadouts/LoadoutsContainer'
import TopNavigation from './navigation/TopNavigation'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <div>
          <TopNavigation />
          <Switch>
            <Route path="/loadouts" component={ LoadoutsContainer } />
            <Route path="/champions" component={ ChampionsContainer } />
            <Route path="/" component={ Home } />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
)

export default Root
