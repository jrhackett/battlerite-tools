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
  return dispatch => {
    dispatch(requestBattlerites());
    axios.get(`/api/battlerites?champion_id=${ id }`)
      .then(res => dispatch(receiveBattlerites(res.data)))
      .catch(err => dispatch(errorBattlerites(err)))
  }
}
