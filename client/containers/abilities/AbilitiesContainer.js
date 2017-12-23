import { connect } from 'react-redux'
import Abilities from '../../components/abilities/Abilities'
import { fetchAbilities, setActiveAbility } from '../../actions/abilities'

const getActiveAbility = (abilitiesState) => {
  const ability = abilitiesState.abilities.find(ability => ability.id === abilitiesState.activeAbility)
  return ability ? ability : null
}

const getActiveChampionName = (id, champions) => {
  const champion = champions.find(champion => champion.id === parseInt(id, 10))
  return champion ? champion.name.toLowerCase() : ''
}

const mapStateToProps = (state, ownProps) => {
  const abilities = state.abilities.abilities
  const activeChampionName = getActiveChampionName(ownProps.activeChampion, state.champions.champions)
  // TODO fix render so we don't have to check if abilities are for this champion
  // should be done through loading new abilities at appropriate time and just checking isFetching
  return {
    shouldRender: !state.abilities.isFetching && activeChampionName !== '' && abilities.length > 0 && abilities[0].champion_id === parseInt(ownProps.activeChampion, 10),
    error: state.abilities.error,
    abilities: state.abilities.abilities,
    activeChampionName: getActiveChampionName(ownProps.activeChampion, state.champions.champions),
    key: ownProps.activeChampion,
    activeChampion: ownProps.activeChampion,
    activeAbility: getActiveAbility(state.abilities)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  load: () => {
    if(ownProps.activeChampion >= 0) {
      dispatch(fetchAbilities(ownProps.activeChampion))
    }
    return
  },
  onClick: (id) => {
    dispatch(setActiveAbility(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Abilities)
