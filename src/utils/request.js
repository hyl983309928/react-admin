/* eslint-disable */
import axios from 'axios'
const http = axios

http.interceptors.response.use(checkStatus)

http.interceptors.request.use(config => {
  var token = window.localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = 'JWT ' + window.localStorage.getItem('token')
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

if (process.env.NODE_ENV !== 'development') {
  http.defaults.baseURL = process.env.API_ROOT
}
http.defaults.validateStatus = function (status) {
  if (status === 401) {
    window.authUser()
  }
  return status >= 200 && status < 300;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.data
  } else {
    console.log(response)
    var error = new Error(response.data)
    error.response = response
    throw error
  }
}

function getUrl(url, param) {
  if (!param) {
    return url
  }
  url += '?'
  var list = []
  for (var key in param) {
    if (param.hasOwnProperty(key)) {
      var val = param[key]
      if (Object.prototype.toString.call(val) == '[object Array]') {
        for (let i = 0; i < val.length; i++) {
          if (val[i]) {
            var temp = encodeURIComponent(val[i])
            list.push(key + '=' + temp)
          }
        }
      } else {
        if (val) {
          val = encodeURIComponent(val)
          list.push(key + '=' + val)
        }
      }
    }
  }
  url += list.join('&')
  return url
}
var CancelToken = axios.CancelToken
var source = CancelToken.source()


export function apiRequest(path, method = 'get', data = null, isCancel = false) {
  var url = path
  var headers = {
  }
  if (method === 'get') {
    return http.get(getUrl(url, data), { headers })
  } else if (method === 'delete') {
    return http.delete(getUrl(url, data), { headers })
  } else if (method === 'post') {
    headers['Content-type'] = 'application/json; charset=utf-8'
    return http.post(url, data, { headers })
  } else if (method === 'put') {
    headers['Content-type'] = 'application/json; charset=utf-8'
    return http.put(url, data, { headers })
  } else if (method === 'patch') {
    headers['Content-type'] = 'application/json; charset=utf-8'
    return http.patch(url, data, { headers })
  } else if (method === 'form') {
    headers['Content-type'] = ' application/x-www-form-urlencoded;charset=utf-8'
    return http.post(url, data, { headers })
  }
}
