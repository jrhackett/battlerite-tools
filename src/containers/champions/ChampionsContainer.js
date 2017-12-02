import { connect } from 'react-redux'
import Champions from '../../components/Champions'
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

export default connect(mapStateToProps, mapDispatchToProps)(Champions)
