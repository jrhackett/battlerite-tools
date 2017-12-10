import React, { Component } from 'react'

class Battlerites extends Component {
  componentDidMount() {
    this.props.load()
  }

  render() {
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
}

export default Battlerites
