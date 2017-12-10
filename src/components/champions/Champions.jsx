import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AbilitiesContainer from '../../containers/abilities/AbilitiesContainer'
import styles from './Champions.scss'

class Champions extends Component {
  render() {
    return (
      <div>
        <div className={ styles.championsContainer }>
          {this.props.champions.map(champion => {
            return (
              <div className={ champion.id === this.props.activeChampion ? styles.activeChampionContainer : styles.championContainer } key={ champion.id }>
                <Link to={ `${ this.props.linkHref }/${ champion.id }` }>
                  <img 
                    src={ require(`../../assets/images/champions/${ champion.name.toLowerCase() }/icon.png`) } 
                    alt={ `${ champion.name }-icon` } />
                  <p>{champion.name}</p>
                </Link>
              </div>
            )
          })}
        </div>
        <AbilitiesContainer activeChampion={ this.props.activeChampion } activeChampionName={ this.props.activeChampionName } />
      </div>
    )
  }
}

export default Champions
