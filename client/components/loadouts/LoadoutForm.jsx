import React, { Component } from 'react'
import ChampionsContainer from '../../containers/champions/ChampionsContainer'
import BattleritesContainer from '../../containers/battlerites/BattleritesContainer'

class LoadoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      battlerite: []
    }
  }

  render() {
    return (
      <div>
        <h2>Create a Loadout</h2>
        <ChampionsContainer />
        <BattleritesContainer activeChampion={ this.props.activeChampion } />
      </div>
    )
  }
}

export default LoadoutForm
