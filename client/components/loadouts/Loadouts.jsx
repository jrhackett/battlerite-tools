import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styles from './Loadouts.scss'

class Loadouts extends Component {
  componentDidMount() {
    this.props.load()
  }

  render() {
    if(this.props.loadouts.length === 0) {
      return <p>There are no loadouts here...</p>
    }

    return (
      <div className={ styles.loadoutsContainer }>
        <div className={ styles.header }>
          <h2>Loadouts</h2>
          <Link to={ `${ this.props.match.path }/new` } className={ styles.createLink }>Create a Loadout</Link>
        </div>
        <div className={ styles.tableHeader }>
          <h3 className={ styles.flexTable4 }>Name</h3>
          <h3 className={ styles.flexTable6 }>Build</h3>
          <h3 className={ styles.flexTable2 }>Champion</h3>
          <div className={ styles.divider }></div>
        </div>
        {this.props.loadouts.map(loadout => (
          <div className={ styles.loadoutContainer } key={ `loadout-${ loadout.uuid }` }>
            <p className={ styles.flexTable4 }>{ loadout.name }</p>
            <p className={ styles.flexTable6 }>{ loadout.build.join(', ') }</p>
            <p className={ styles.flexTable2 }>{ loadout.champion_name }</p>
            <div className={ styles.divider }></div>
          </div>
        ))}
      </div>
    )
  }
}

export default withRouter(Loadouts)
