import { connect } from 'react-redux'
import { fetchChampions } from '../../actions/champions'
import { fetchLoadouts } from '../../actions/loadouts'
import LoadoutsRoot from '../../components/LoadoutsRoot'

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.champions.isFetching,
  error: state.loadouts.error
})

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(fetchChampions())
    dispatch(fetchLoadouts())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutsRoot)
