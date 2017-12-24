import React, { Component } from 'react'

class Battlerites extends Component {
  componentDidMount() {
    this.props.load()
  }

  render() {
    if(!this.props.isFetching) {
      return (
        <div>
          {this.props.battlerites.map(battlerite => (
            <div key={ battlerite.name }>
              <div>
                <p>{ battlerite.name }</p>
              </div>
            </div>
          ))}
        </div>
      )
    }
    return null
  }
}

export default Battlerites
