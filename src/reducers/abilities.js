import * as actionTypes from '../actionTypes'

const initialState = {
  isFetching: false,
  error: '',
  abilities: []
}

const abilities = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_ABILITIES:
      return { 
        ...state, 
        isFetching: true 
      }
    case actionTypes.ERROR_ABILITIES:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case actionTypes.RECEIVE_ABILITIES:
      return  {
        ...state,
        isFetching: false,
        abilities: action.abilities
      }
    default:
      return state
  }
}

export default abilities
