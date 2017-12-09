import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ChampionsContainer from '../containers/champions/ChampionsContainer'

class ChampionsRoot extends Component {
  componentDidMount() {
    this.props.load()
  }

  render() {
    if(this.props.error.length > 0 || this.props.isFetching) {
      return <span>Loading...</span>
    }

    if(this.props.error.length > 0) {
      return <span>{`Error: ${this.props.error}`}</span>
    }

    return (
      <div>
        <Route path={ `${ this.props.match.path }/:champion?` } component={ ChampionsContainer } />
      </div>
    )
  }
}

export default ChampionsRoot
