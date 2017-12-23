import React, { Component } from 'react'
import styles from './Abilities.scss'

class Abilities extends Component {
  componentDidMount() {
    this.props.load()
  }

  onAbilityClick(id) {
    this.props.onClick(id)
  }

  render() {
    const { activeAbility } = this.props
    if(this.props.shouldRender) {
      return (
        <div className={ styles.abilitiesContainer }>
          <div className={ styles.abilities }>
            {this.props.abilities.map(ability => (
              <div className={ activeAbility && activeAbility.id === ability.id ? styles.activeAbilityContainer : styles.abilityContainer } key={ ability.name }>
                <div>
                  <img 
                    src={ require(`../../assets/images/champions/${ this.props.activeChampionName }/${ ability.key }.png`) } 
                    alt={ `${ ability.name }-icon` } 
                    onClick={ () => this.onAbilityClick(ability.id) }/>
                  <p>{ ability.key.toUpperCase() }</p>
                </div>
              </div>
            ))}
          </div>
          {activeAbility &&
            <div className={ styles.abilityDetails }>
              <h3>{ activeAbility.name }</h3>
              <p>{ activeAbility.description }</p>
            </div>
          }
        </div>
      )
    }
    return null
  }
}

export default Abilities
