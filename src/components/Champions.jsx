import React, { Component } from 'react'

class Champions extends Component {
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
        {this.props.champions.map(champion => {
          return <div>{champion.name}</div>
        })}
      </div>
    )
  }
}

export default Champions
