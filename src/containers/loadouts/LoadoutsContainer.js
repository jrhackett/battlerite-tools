import { connect } from 'react-redux'
import LoadoutsRoot from '../../components/LoadoutsRoot'
import { fetchChampions } from '../../actions/champions'

const mapStateToProps = state => ({
  isFetching: state.champions.isFetching,
  error: state.champions.error,
  champions: state.champions.champions
})

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(fetchChampions())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutsRoot)
