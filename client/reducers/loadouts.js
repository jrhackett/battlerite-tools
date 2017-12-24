import * as actionTypes from '../actionTypes'

const initialState = {
  isFetching: false,
  error: '',
  loadouts: []
}

const loadouts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LOADOUTS:
      return { 
        ...state, 
        isFetching: true 
      }
    case actionTypes.ERROR_LOADOUTS:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case actionTypes.RECEIVE_LOADOUTS:
      return  {
        ...state,
        isFetching: false,
        loadouts: action.loadouts
      }
    default:
      return state
  }
}

export default loadouts
