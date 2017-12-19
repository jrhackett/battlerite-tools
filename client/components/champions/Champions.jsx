import React from 'react'
import { Link } from 'react-router-dom'
import AbilitiesContainer from '../../containers/abilities/AbilitiesContainer'
import styles from './Champions.scss'

const Champions = ({ champions, activeChampion, activeChampionName, linkHref }) => (
  <div>
    <div className={ styles.championsContainer }>
      {champions.map(champion => {
        return (
          <div className={ champion.id === activeChampion ? styles.activeChampionContainer : styles.championContainer } key={ champion.id }>
            <Link to={ `${ linkHref }/${ champion.id }` }>
              <img 
                src={ require(`../../assets/images/champions/${ champion.name.toLowerCase() }/icon.png`) } 
                alt={ `${ champion.name }-icon` } />
            </Link>
          </div>
        )
      })}
    </div>
    <AbilitiesContainer activeChampion={ activeChampion } activeChampionName={ activeChampionName } />
  </div>
)

export default Champions
