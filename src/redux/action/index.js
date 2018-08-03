
import * as type from './type.js'

export const updateUserinfo = (userinfo) => {
  return {
    type: type.UPDATE_USERINFO,
    userinfo
  }
}

export const updateToken = (token) => {
  return {
    type: type.UPDATE_TOKEN,
    token
  }
}

export const signOut = () => {
  return {
    type: type.SIGN_OUT
  }
}

export const updateSidebarOpen = () => {
  return {
    type: type.UPDATE_SIDEBAR_OPEN
  }
}