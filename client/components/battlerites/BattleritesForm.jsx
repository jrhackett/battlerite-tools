import React, { Component } from 'react'

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
        <div>
          {this.props.battlerites.map(battlerite => (
            <div key={ battlerite.name }>
              <div>
                <input type="checkbox" onChange={ e => this.handleCheckboxChange(e.target.checked, battlerite.b_id) } />
                <p>{ battlerite.name }</p>
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
