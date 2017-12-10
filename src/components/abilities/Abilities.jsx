import React, { Component } from 'react'
import styles from './Abilities.scss'

class Abilities extends Component {
  componentDidMount() {
    this.props.load()
  }

  render() {
    if(this.props.activeChampionName !== '') {
      return (
        <div className={ styles.abilitiesContainer }>
          {this.props.abilities.map(ability => (
            <div className={ styles.abilityContainer } key={ ability.name }>
              <div>
                <img 
                  src={ require(`../../assets/images/champions/${ this.props.activeChampionName }/${ ability.key.replace('ex-', '') }.png`) } 
                  alt={ `${ ability.name }-icon` } />
                <p>{ ability.name }</p>
              </div>
            </div>
          ))}
        </div>
      )
    }
    return null
  }
}

export default Abilities
