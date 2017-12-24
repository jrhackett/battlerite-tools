import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoadoutContainer from '../containers/loadouts/LoadoutContainer'
import LoadoutsContainer from '../containers/loadouts/LoadoutsContainer'
import CreateLoadoutContainer from '../containers/loadouts/CreateLoadoutContainer'
import EditLoadoutContainer from '../containers/loadouts/EditLoadoutContainer'

class LoadoutsRoot extends Component {
  componentDidMount() {
    this.props.load()
  }

  render() {
    if(this.props.error.length > 0 || this.props.isFetching) {
      return <span>Loading...</span>
    }

    if(this.props.error.length > 0) {
      return <span>{`Error: ${ this.props.error }`}</span>
    }

    return (
      <div>
        <Switch>
          <Route path={ `${ this.props.match.path }/new/:champion?` } component={ CreateLoadoutContainer } />
          <Route path={ `${ this.props.match.path }/:loadout` } component={ LoadoutContainer } />
          <Route path={ `${ this.props.match.path }/:loadout/edit` } component={ EditLoadoutContainer } />
          <Route path={ `${ this.props.match.path }` } component={ LoadoutsContainer } />
        </Switch>
      </div>
    )
  }
}

export default LoadoutsRoot
