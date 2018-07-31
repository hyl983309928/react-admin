import * as type from '../action/type';
import { combineReducers } from 'redux'

let initialState = {
  userinfo: {},
  token: window.localStorage.getItem('token') || ''
}

const handleApp = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDARE_USERINFO:
      return {
        ...state,
        userinfo: action.userinfo
      }
    case type.UPDARE_TOKEN:
      window.localStorage.setItem('token', action.token)
      return {
        ...state,
        token: action.token
      }
    case type.SIGN_OUT:
      window.localStorage.removeItem('token')
      return {
        ...state,
        token: ''
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  App: handleApp
})

export default reducer
