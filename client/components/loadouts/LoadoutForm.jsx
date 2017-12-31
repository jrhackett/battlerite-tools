import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ChampionsContainer from '../../containers/champions/ChampionsContainer'
import BattleritesFormContainer from '../../containers/battlerites/BattleritesFormContainer'
import styles from './Loadouts.scss'

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
      <div className={ styles.loadoutsFormContainer }>
        <div className={ styles.header }> 
          <h2>Create a Loadout</h2>
        </div>
        <div className={ styles.nameInput }>
          <input type="text" onChange={ e => this.handleNameChange(e.target.value) } placeholder="Enter loadout name..." />
        </div>
        <ChampionsContainer />
        <BattleritesFormContainer activeChampion={ this.props.activeChampion } onChange={ (value, id) => this.handleSelectedBattleritesChange(value, id) } />
        <div className={ styles.formControls }>
          <a className={ `${styles.btn} ${styles.primary}` } onClick={ () => this.handleFormSubmit() }>Save</a>
          <Link to="/loadouts" className={ `${styles.btn} ${styles.default}` }>Cancel</Link>
        </div>
      </div>
    )
  }
}

export default LoadoutForm
