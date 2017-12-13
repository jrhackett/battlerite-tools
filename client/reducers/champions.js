import * as actionTypes from '../actionTypes'

const initialState = {
  isFetching: false,
  error: '',
  champions: []
}

const champions = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_CHAMPIONS:
      return { 
        ...state, 
        isFetching: true 
      }
    case actionTypes.ERROR_CHAMPIONS:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case actionTypes.RECEIVE_CHAMPIONS:
      return  {
        ...state,
        isFetching: false,
        champions: action.champions
      }
    default:
      return state
  }
}

export default champions
