import React, { Component } from 'react'
import styles from './Champions.scss'

class Champions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeChampion: -1
    }
  }

  onChampionClick(id) {
    this.setState({
      activeChampion: id === this.state.activeChampion ? -1 : id
    })
  }

  render() {
    return (
      <div className={ styles.championsContainer }>
        {this.props.champions.map(champion => {
          return (
            <div
              className={ champion.id === this.state.activeChampion ? styles.activeChampionContainer : styles.championContainer }
              onClick={ () => this.onChampionClick(champion.id) }
              key={ champion.id }>
              <img 
                src={ require(`../../assets/images/champions/${ champion.name.toLowerCase() }/icon.png`) } 
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
