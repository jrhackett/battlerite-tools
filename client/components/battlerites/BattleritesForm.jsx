import React, { Component } from 'react'
import styles from './Battlerites.scss'

class BattleritesForm extends Component {
  componentDidMount() {
    this.props.load()
  }

  handleCheckboxChange(value, id) {
    this.props.onChange(value, id)
  }

  render() {
    if(!this.props.isFetching) {
      return (
        <div className={ styles.battleritesFormContainer }>
          {this.props.battlerites.map(battlerite => (
            <div className={ styles.battleriteContainer } key={ battlerite.name }>
              <div>
                <input type="checkbox" onChange={ e => this.handleCheckboxChange(e.target.checked, battlerite.b_id) } />
                <p>{ battlerite.name }</p>
                <p>{ battlerite.description }</p>
              </div>
            </div>
          ))}
        </div>
      )
    }
    return null
  }
}

export default BattleritesForm
