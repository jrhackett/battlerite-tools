import axios from 'axios';
import * as actionTypes from '../actionTypes'

export const requestBattlerites = () => ({
  type: actionTypes.REQUEST_BATTLERITES
})

export const receiveBattlerites = data => ({
  type: actionTypes.RECEIVE_BATTLERITES,
  battlerites: data
})

export const errorBattlerites = data => ({
  type: actionTypes.ERROR_BATTLERITES,
  error: data
})

export const fetchBattlerites = id => {
  let url = '/api/battlerites'
  if(id)
    url += `?champion_id=${ id }`
  return dispatch => {
    dispatch(requestBattlerites());
    axios.get(url)
      .then(res => dispatch(receiveBattlerites(res.data)))
      .catch(err => dispatch(errorBattlerites(err)))
  }
}
