import React, { Component } from 'react'
import styles from './Abilities.scss'

class Abilities extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.abilities.map(ability => {
          return (
            <p>{ ability }</p>
          )
        })}
      </div>
    )
  }
}

export default Abilities
