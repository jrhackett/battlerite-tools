import { connect } from 'react-redux'
import Battlerites from '../../components/battlerites/Battlerites'
import { fetchBattlerites } from '../../actions/battlerites'

const mapStateToProps = state => ({
  isFetching: state.battlerites.battlerites,
  battlerites: state.battlerites.battlerites
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  load: () => {
    if(ownProps.activeChampion >= 0) {
      dispatch(fetchBattlerites(ownProps.activeChampion))
    }
    return
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Battlerites)
