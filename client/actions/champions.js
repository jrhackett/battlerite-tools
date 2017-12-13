import axios from 'axios';
import * as actionTypes from '../actionTypes'

export const requestChampions = () => ({
  type: actionTypes.REQUEST_CHAMPIONS
})

export const receiveChampions = (data) => ({
  type: actionTypes.RECEIVE_CHAMPIONS,
  champions: data
})

export const errorChampions = (data) => ({
  type: actionTypes.ERROR_CHAMPIONS,
  error: data
})

export const fetchChampions = () => {
  return dispatch => {
    dispatch(requestChampions());
    axios.get(`/api/champions`)
      .then(res => dispatch(receiveChampions(res.data)))
      .catch(err => dispatch(errorChampions(err)))
  }
}
