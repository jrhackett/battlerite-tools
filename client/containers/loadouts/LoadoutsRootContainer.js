import { connect } from 'react-redux'
import { fetchChampions } from '../../actions/champions'
import { fetchBattlerites } from '../../actions/battlerites'
import { fetchLoadouts } from '../../actions/loadouts'
import LoadoutsRoot from '../../components/LoadoutsRoot'

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.loadouts.isFetching || state.champions.isFetching || state.battlerites.isFetching,
  error: state.loadouts.error
})

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(fetchChampions())
    dispatch(fetchBattlerites())
    // TODO need to page here or only get a certain number back for performance
    dispatch(fetchLoadouts())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutsRoot)
