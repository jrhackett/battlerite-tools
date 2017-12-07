import React, { Component } from 'react'
import styles from './champions/Champions.scss'

class Champions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeChampion: -1
    }
  }

  componentDidMount() {
    this.props.load()
  }

  onChampionClick(id) {
    this.setState({
      activeChampion: id === this.state.activeChampion ? -1 : id
    })
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
            <div 
              className={ champion.id === this.state.activeChampion ? styles.activeChampionContainer : styles.championContainer }
              onClick={ () => this.onChampionClick(champion.id) }>
              <img 
                src={ require(`../assets/images/champions/${ champion.name.toLowerCase() }/icon.png`) } 
                alt={ `${ champion.name }-icon` } />
              <p>{champion.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Champions
