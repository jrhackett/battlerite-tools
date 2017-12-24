import React from 'react'
import styles from './Loadouts.scss'

const Loadouts = ({ loadouts }) => {
  if(loadouts.length === 0) {
    return <p>There are no loadouts here...</p>
  }

  return (
    <div className={ styles.loadoutsContainer }>
      <h3>Loadouts</h3>
      {loadouts.map(loadout => (
        <div className={ styles.loadoutContainer }>
          <p>{ loadout.name }</p>
        </div>
      ))}
    </div>
  )
}

export default Loadouts
