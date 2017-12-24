import axios from 'axios';
import * as actionTypes from '../actionTypes'

export const requestLoadouts = () => ({
  type: actionTypes.REQUEST_LOADOUTS
})

export const receiveLoadouts = (data) => ({
  type: actionTypes.RECEIVE_LOADOUTS,
  loadouts: data
})

export const errorLoadouts = (data) => ({
  type: actionTypes.ERROR_LOADOUTS,
  error: data
})

export const fetchLoadouts = () => {
  return dispatch => {
    dispatch(requestLoadouts());
    axios.get(`/api/loadouts`)
      .then(res => dispatch(receiveLoadouts(res.data)))
      .catch(err => dispatch(errorLoadouts(err)))
  }
}
