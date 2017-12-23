import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Champions.scss'

const Champions = ({ champions, activeChampion, linkHref }) => (
  <div className={ styles.championsContainer }>
    <h3>Choose a Champion</h3>
    {champions.map(champion => {
      return (
        <div className={ champion.id === activeChampion ? styles.activeChampionContainer : styles.championContainer } key={ champion.id }>
          <Link to={ `${ linkHref }/${ champion.id }` }>
            <img 
              src={ require(`../../assets/images/champions/${ champion.name.toLowerCase() }/icon.png`) } 
              alt={ `${ champion.name }-icon` } />
            <p>{ champion.name }</p>
            <p>{ champion.role }</p>
          </Link>
        </div>
      )
    })}
  </div>
)

export default Champions
