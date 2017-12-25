import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styles from './Loadouts.scss'

const Loadouts = ({ loadouts, match }) => {
  if(loadouts.length === 0) {
    return <p>There are no loadouts here...</p>
  }

  return (
    <div className={ styles.loadoutsContainer }>
      <div className={ styles.header }>
        <h2>Loadouts</h2>
        <Link to={ `${ match.path }/new` } className={ styles.createLink }>Create a Loadout</Link>
      </div>
      <div className={ styles.tableHeader }>
        <h3>Name</h3>
        <h3>Build</h3>
        <h3>Champion</h3>
      </div>
      {loadouts.map(loadout => (
        <div className={ styles.loadoutContainer } key={ `loadout-${ loadout.uuid }` }>
          <p>{ loadout.name }</p>
          <p>{ loadout.build.join(', ') }</p>
          <p>{ loadout.champion_name }</p>
        </div>
      ))}
    </div>
  )
}

export default withRouter(Loadouts)
