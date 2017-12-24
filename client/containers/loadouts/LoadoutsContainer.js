import { connect } from 'react-redux'
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
  loadouts: augmentLoadouts(state.loadouts.loadouts, state.champions.champions)
})

// TODO add load function here to get all battlerites

export default connect(mapStateToProps)(Loadouts)
