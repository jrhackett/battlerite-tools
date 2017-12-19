import React from 'react'
import { withRouter } from 'react-router-dom'
import ChampionsContainer from '../../containers/champions/ChampionsContainer'
import AbilitiesContainer from '../../containers/abilities/AbilitiesContainer'

const ChampionsWithAbilities = ({ match }) => (
  <div>
    <ChampionsContainer />
    <AbilitiesContainer activeChampion={ parseInt(match.params.champion, 10) } />
  </div>
)

export default withRouter(ChampionsWithAbilities)
