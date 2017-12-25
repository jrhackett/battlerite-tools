import React, { Component } from 'react'
import ChampionsContainer from '../../containers/champions/ChampionsContainer'
import BattleritesFormContainer from '../../containers/battlerites/BattleritesFormContainer'

class LoadoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      champion_id: this.props.activeChampion,
      build: []
    }
  }

  handleSelectedBattleritesChange(value, id) {
    this.setState({
      build: value ? [ ...this.state.build, id ] : this.state.build.filter(i => i !== id)
    })
  }

  handleNameChange(value) {
    this.setState({
      name: value
    })
  }

  handleFormSubmit() {
    // TODO validation
    this.props.submit(this.state)
  }

  render() {
    if(this.props.isFetching)
      return null
    return (
      <div>
        <h2>Create a Loadout</h2>
        <ChampionsContainer />
        <input type="text" onChange={ e => this.handleNameChange(e.target.value) } placeholder="Enter loadout name..." />
        <BattleritesFormContainer activeChampion={ this.props.activeChampion } onChange={ (value, id) => this.handleSelectedBattleritesChange(value, id) } />
        <a onClick={ () => this.handleFormSubmit() }>Save</a>
      </div>
    )
  }
}

export default LoadoutForm
