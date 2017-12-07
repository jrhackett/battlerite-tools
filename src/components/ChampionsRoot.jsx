import React, { Component } from 'react'
import Champions from './champions/Champions'

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
        <Champions champions={ this.props.champions } />
      </div>
    )
  }
}

export default ChampionsRoot
