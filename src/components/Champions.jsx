import React, { Component } from 'react'
import styles from './champions/Champions.scss'

class Champions extends Component {
  componentDidMount() {
    this.props.load()
  }

  render() {
    if(this.props.error.length > 0 || this.props.isFetching) {
      return <span>Loading...</span>
    }

    if(this.props.error.length > 0) {
      return <span>{`Error: ${this.props.error}`}</span>
    }

    return (
      <div className={ styles.championsContainer }>
        {this.props.champions.map(champion => {
          return (
            <div className={ styles.championContainer }>
              <img src={ require(`../assets/images/${ champion.name.toLowerCase() }/icon.png`) } alt={ `${ champion.name }-icon` } />
              <p>{champion.name}</p>
              <p>{champion.role}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Champions
