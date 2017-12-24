import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LoadoutForm from '../../components/loadouts/LoadoutForm'

const mapStateToProps = (state, ownProps) => ({
  activeChampion: parseInt(ownProps.match.params.champion, 10)
})

export default withRouter(connect(mapStateToProps)(LoadoutForm))
