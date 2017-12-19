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

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.abilities.isFetching,
  error: state.abilities.error,
  abilities: state.abilities.abilities,
  activeChampionName: getActiveChampionName(ownProps.activeChampion, state.champions.champions),
  key: ownProps.activeChampion,
  activeAbility: getActiveAbility(state.abilities)
})

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
