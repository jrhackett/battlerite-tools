import React, { Component } from 'react'
import styles from './Abilities.scss'

class Abilities extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.load()
  }

  onAbilityClick(id) {
    this.props.onClick(id)
  }

  render() {
    if(this.props.activeChampionName !== '') {
      return (
        <div>
          <div className={ styles.abilitiesContainer }>
            {this.props.abilities.map(ability => (
              <div className={ styles.abilityContainer } key={ ability.name }>
                <div>
                  <img 
                    src={ require(`../../assets/images/champions/${ this.props.activeChampionName }/${ ability.key.replace('ex-', '') }.png`) } 
                    alt={ `${ ability.name }-icon` } 
                    onClick={ () => this.onAbilityClick(ability.id) }/>
                  <p>{ ability.name }</p>
                </div>
              </div>
            ))}
          </div>
          {this.props.abilityDescription.length > 0 &&
            <p>{ this.props.abilityDescription }</p>
          }
        </div>
      )
    }
    return null
  }
}

export default Abilities
