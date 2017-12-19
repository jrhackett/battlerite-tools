import * as actionTypes from '../actionTypes'

const initialState = {
  isFetching: false,
  error: '',
  abilities: [],
  activeAbility: -1
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
    case actionTypes.SET_ACTIVE_ABILITY:
      return {
        ...state,
        activeAbility: action.id
      }
    default:
      return state
  }
}

export default abilities
