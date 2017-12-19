import { connect } from 'react-redux'
import Abilities from '../../components/abilities/Abilities'
import { fetchAbilities, setActiveAbility } from '../../actions/abilities'

const getAbilityDescription = (abilitiesState, activeChampion) => {
  const ability = abilitiesState.abilities.find(ability => ability.id === abilitiesState.activeAbility)
  return ability && ability.description ? ability.description : ''
}

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.abilities.isFetching,
  error: state.abilities.error,
  abilities: state.abilities.abilities,
  activeChampionName: ownProps.activeChampionName,
  key: ownProps.activeChampion,
  abilityDescription: getAbilityDescription(state.abilities, ownProps.activeChampion)
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
