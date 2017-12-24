import React from 'react'

const Loadouts = ({ loadouts }) => {
  if(loadouts.length === 0) {
    return <p>There are no loadouts here...</p>
  }

  return (
    <div>
      <h3>Loadouts</h3>
      {loadouts.map(loadout => (
        <p>{ loadout.name }</p>
      ))}
    </div>
  )
}

export default Loadouts
