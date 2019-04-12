import * as actionTypes from "./types";


export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.POST_MESSAGE:
    console.log(action.payload, 'we got the payload')
      return {...state, userData: action.payload}
    default:
      return state
  }
}