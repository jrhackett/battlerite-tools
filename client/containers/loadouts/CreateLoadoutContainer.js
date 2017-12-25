import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createLoadout } from '../../actions/loadouts'
import LoadoutForm from '../../components/loadouts/LoadoutForm'

const mapStateToProps = (state, ownProps) => ({
  activeChampion: parseInt(ownProps.match.params.champion, 10)
})

const mapDispatchToProps = dispatch => ({
  submit: (formValues) => {
    dispatch(createLoadout(formValues))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadoutForm))
