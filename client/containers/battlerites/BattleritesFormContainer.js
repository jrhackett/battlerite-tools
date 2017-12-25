import { connect } from 'react-redux'
import BattleritesForm from '../../components/battlerites/BattleritesForm'
import { fetchBattlerites } from '../../actions/battlerites'

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.battlerites.isFetching,
  battlerites: state.battlerites.battlerites,
  selected: ownProps.selected,
  key: ownProps.activeChampion
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  load: () => {
    if(ownProps.activeChampion >= 0) {
      dispatch(fetchBattlerites(ownProps.activeChampion))
    }
  },
  onChange: (value, id) => {
    ownProps.onChange(value, id)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BattleritesForm)
