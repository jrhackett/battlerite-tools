import React, { Component } from 'react'
import styles from './Abilities.scss'

class Abilities extends Component {
  componentDidMount() {
    this.props.load()
  }

  render() {
    return (
      <div>
        {this.props.abilities.map(ability => (
          <div>{ ability.name }</div>
        ))}
      </div>
    )
  }
}

export default Abilities
