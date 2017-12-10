import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Champions from '../../components/champions/Champions'

const getActiveChampionName = (id, champions) => {
  const champion = champions.find(champion => champion.id === parseInt(id, 10))
  return champion ? champion.name.toLowerCase() : ''
}

const mapStateToProps = (state, ownProps) => {
  const champions = state.champions.champions
  const activeChampion = parseInt(ownProps.match.params.champion, 10)
  return {
    champions: champions,
    activeChampion: activeChampion || -1,
    activeChampionName: getActiveChampionName(activeChampion, champions),
    linkHref: ownProps.match.path.substr(0, ownProps.match.path.lastIndexOf("/"))
  }
}

export default withRouter(connect(mapStateToProps)(Champions))
