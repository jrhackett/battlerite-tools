import { connect } from 'react-redux'
import Abilities from '../../components/abilities/Abilities'
import { fetchAbilities } from '../../actions/abilities'

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.abilities.isFetching,
  error: state.abilities.error,
  abilities: state.abilities.abilities,
  key: ownProps.activeChampion
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  load: () => {
    if(ownProps.activeChampion >= 0) {
      dispatch(fetchAbilities(ownProps.activeChampion))
    }
    return
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Abilities)
