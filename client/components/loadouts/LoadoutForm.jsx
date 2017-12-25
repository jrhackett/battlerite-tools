import React, { Component } from 'react'
import ChampionsContainer from '../../containers/champions/ChampionsContainer'
import BattleritesFormContainer from '../../containers/battlerites/BattleritesFormContainer'

class LoadoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'test',
      champion_id: this.props.activeChampion,
      build: []
    }
  }

  handleChange(value, id) {
    this.setState({
      build: value ? [ ...this.state.build, id ] : this.state.build.filter(i => i !== id)
    })
  }

  handleFormSubmit() {
    // TODO validation
    this.props.submit(this.state)
  }

  render() {
    return (
      <div>
        <h2>Create a Loadout</h2>
        <ChampionsContainer />
        <BattleritesFormContainer activeChampion={ this.props.activeChampion } onChange={ (value, id) => this.handleChange(value, id) } />
        <a onClick={ () => this.handleFormSubmit() }>Save</a>
      </div>
    )
  }
}

export default LoadoutForm
