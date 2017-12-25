import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import LoadoutForm from '../../components/loadouts/LoadoutForm'

const mapStateToProps = (state, ownProps) => ({
  activeChampion: parseInt(ownProps.match.params.champion, 10)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: (formValues) => {
    axios.post(`/api/loadouts`, formValues)
      .then(res => {
        ownProps.history.push(`/loadouts/${ res.data[0].uuid }`)
      })
      .catch(err => console.log(err))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadoutForm))
