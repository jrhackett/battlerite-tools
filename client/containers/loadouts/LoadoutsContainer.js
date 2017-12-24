import { connect } from 'react-redux'
import Loadouts from '../../components/loadouts/Loadouts'

const mapStateToProps = state => ({
  loadouts: state.loadouts.loadouts
})

export default connect(mapStateToProps)(Loadouts)
