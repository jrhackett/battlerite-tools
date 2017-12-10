import React, { Component } from 'react'
import styles from './Abilities.scss'

class Abilities extends Component {
  componentDidMount() {
    this.props.load()
  }

  render() {
    if(this.props.activeChampionName !== '') {
      return (
        <div>
          {this.props.abilities.map(ability => (
            <div key={ ability.name }>
              <p>{ ability.name }</p>
              <img 
                src={ require(`../../assets/images/champions/${ this.props.activeChampionName }/${ ability.key.replace('ex-', '') }.png`) } 
                alt={ `${ ability.name }-icon` } />
            </div>
          ))}
        </div>
      )
    }
    return null
  }
}

export default Abilities
