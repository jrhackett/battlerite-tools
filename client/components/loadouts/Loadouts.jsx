import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styles from './Loadouts.scss'

const Loadouts = ({ loadouts, match }) => {
  if(loadouts.length === 0) {
    return <p>There are no loadouts here...</p>
  }

  return (
    <div className={ styles.loadoutsContainer }>
      <h3>Loadouts</h3>
      <Link to={ `${ match.path }/new` } className={ styles.createLink }>Create a Loadout</Link>
      {loadouts.map(loadout => (
        <div className={ styles.loadoutContainer } key={ `loadout-${ loadout.uuid }` }>
          <p>{ loadout.name }</p>
          <p>{ loadout.champion_name }</p>
        </div>
      ))}
    </div>
  )
}

export default withRouter(Loadouts)
