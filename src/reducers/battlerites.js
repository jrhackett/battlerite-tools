import * as actionTypes from '../actionTypes'

const initialState = {
  isFetching: false,
  error: '',
  battlerites: []
}

const battlerites = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_BATTLERITES:
      return { 
        ...state, 
        isFetching: true 
      }
    case actionTypes.ERROR_BATTLERITES:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case actionTypes.RECEIVE_BATTLERITES:
      return  {
        ...state,
        isFetching: false,
        battlerites: action.battlerites
      }
    default:
      return state
  }
}

export default battlerites
