import { connect } from 'react-redux'
import { fetchLoadouts } from '../../actions/loadouts'
import Loadouts from '../../components/loadouts/Loadouts'

const augmentLoadouts = (loadouts, champions) => {
  return loadouts.map(loadout => {
    const champion = champions.find(champion => champion.id === loadout.champion_id)
    return {
      ...loadout,
      champion_name: champion ? champion.name : ''
    }
  })
}

const mapStateToProps = state => ({
  isFetching: state.loadouts.isFetching,
  loadouts: augmentLoadouts(state.loadouts.loadouts, state.champions.champions)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  load: () => {
    dispatch(fetchLoadouts())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Loadouts)
