import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import ChampionsRootContainer from '../containers/champions/ChampionsRootContainer'
import LoadoutsRootContainer from '../containers/loadouts/LoadoutsRootContainer'
import TopNavigation from './navigation/TopNavigation'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <div>
          <TopNavigation />
          <Switch>
            <Route path="/champions" component={ ChampionsRootContainer } />
            <Route path="/loadouts" component={ LoadoutsRootContainer } />
            <Route path="/" component={ Home } />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
)

export default Root
