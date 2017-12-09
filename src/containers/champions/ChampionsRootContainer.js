import { connect } from 'react-redux'
import ChampionsRoot from '../../components/ChampionsRoot'
import { fetchChampions } from '../../actions/champions'

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.champions.isFetching,
  error: state.champions.error
})

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(fetchChampions())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsRoot)
