import React from 'react'
import { withRouter } from 'react-router-dom'
import ChampionsContainer from '../../containers/champions/ChampionsContainer'
import AbilitiesContainer from '../../containers/abilities/AbilitiesContainer'

const ChampionsWithAbilities = ({ match }) => (
  <div>
    <ChampionsContainer />
    <AbilitiesContainer activeChampion={ match.params.champion } />
  </div>
)

export default withRouter(ChampionsWithAbilities)
