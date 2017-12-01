import React, { Component } from 'react'

import styles from './App.scss'

class App extends Component {

  render() {
    return (
      <div className={styles.App} {...this.props}>
        <div className={styles.AppHeader}>
          <h2>Welcome to React - Fullstack!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.props.actions.dbTestNew}>Test if Battlerite models are working</button>
        <br />
        <br />
        <button onClick={this.props.actions.dbTestNew2}>Test if Loadout models are working</button>
        <div style={{ padding: '30px' }}>{this.props.results}</div>
      </div>
    );
  }
}

export default App
