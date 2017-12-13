import axios from 'axios';
import * as actionTypes from '../actionTypes'

export const requestAbilities = () => ({
  type: actionTypes.REQUEST_ABILITIES
})

export const receiveAbilities = (data) => ({
  type: actionTypes.RECEIVE_ABILITIES,
  abilities: data
})

export const errorAbilities = (data) => ({
  type: actionTypes.ERROR_ABILITIES,
  error: data
})

export const fetchAbilities = (champion_id) => {
  return dispatch => {
    dispatch(requestAbilities())
    axios.get(`/api/abilities?champion_id=${ champion_id }`)
      .then(res => dispatch(receiveAbilities(res.data)))
      .catch(err => dispatch(errorAbilities(err)))
  }
}
