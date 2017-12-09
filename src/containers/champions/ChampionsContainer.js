import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Champions from '../../components/champions/Champions'

const mapStateToProps = (state, ownProps) => ({
  champions: state.champions.champions,
  activeChampion: parseInt(ownProps.match.params.champion, 10) || -1,
  linkHref: ownProps.match.path.substr(0, ownProps.match.path.lastIndexOf("/"))
})

export default withRouter(connect(mapStateToProps)(Champions))
