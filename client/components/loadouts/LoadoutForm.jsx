import React from 'react'
import ChampionsContainer from '../../containers/champions/ChampionsContainer'
import BattleritesContainer from '../../containers/battlerites/BattleritesContainer'

const LoadoutForm = ({ actionChampion }) => (
  <div>
    <h2>Create a Loadout</h2>
    <ChampionsContainer />
    <BattleritesContainer activeChampion={ actionChampion } />
  </div>
)

export default LoadoutForm
