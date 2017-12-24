import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchLoadouts } from '../../actions/loadouts'
import LoadoutsRoot from '../../components/LoadoutsRoot'

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.loadouts.isFetching,
  error: state.loadouts.error
})

const mapDispatchToProps = dispatch => ({
  load: () => {
    // TODO need to page here or only get a certain number back for performance
    dispatch(fetchLoadouts())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutsRoot)
