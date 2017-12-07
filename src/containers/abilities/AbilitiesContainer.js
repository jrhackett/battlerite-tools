import { connect } from 'react-redux'
import ChampionsRoot from '../../components/ChampionsRoot'
import { fetchAbilities } from '../../actions/abilities'

const mapStateToProps = state => ({
  isFetching: state.abilities.isFetching,
  error: state.abilities.error,
  abilities: state.abilities.abilities
})

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(fetchAbilities())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsRoot)
