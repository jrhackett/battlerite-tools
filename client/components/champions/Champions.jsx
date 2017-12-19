import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Champions.scss'

const Champions = ({ champions, activeChampion, linkHref }) => (
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
)

export default Champions
