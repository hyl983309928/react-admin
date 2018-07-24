
import * as type from './type.js'

export const updateUserinfo = (userinfo) => {
  return {
    type: type.UPDARE_USERINFO,
    userinfo
  }
}

export const updateToken = (token) => {
  return {
    type: type.UPDARE_TOKEN,
    token
  }
}