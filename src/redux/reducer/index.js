import * as type from '../action/type';
import { combineReducers } from 'redux'

let initialState = {
  userinfo: {},
  token: '123123'
}

const handleApp = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDARE_USERINFO:
      return {
        ...state,
        userinfo: action.userinfo
      }
    case type.UPDARE_TOKEN:
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  App: handleApp
})

export default reducer
