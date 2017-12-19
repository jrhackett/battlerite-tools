import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ChampionsWithAbilities from './champions/ChampionsWithAbilities'

class ChampionsRoot extends Component {
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
        <Route path={ `${ this.props.match.path }/:champion?` } component={ ChampionsWithAbilities } />
      </div>
    )
  }
}

export default ChampionsRoot
