import React, { Component } from 'react';
import classnames from 'classnames';

class App extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
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

export default App;
