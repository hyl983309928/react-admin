import { apiRequest } from '@/utils/request.js'

export default {
  upload (files) {
    let fd = new window.FormData()
    fd.append('files', files)
    return apiRequest('/generalfileupload/', 'form', fd, true)
  },
  user: {
    login (username, password) {
      return apiRequest('/api-jwt-auth/', 'post', { username, password })
    },
    smscode (mobile) {
      return apiRequest('/smscode/', 'post', { mobile })
    },
    reguser (data) {
      return apiRequest('/reguser/', 'post', data)
    },
    getUserInfo () {
      return apiRequest(`/userprofile/`, 'get')
    },
    getUserList (params) {
      return apiRequest(`/userlist/`, 'get', params)
    }
  },
  code: {
    addBatch (name) {
      return apiRequest('/activationcodebatch/', 'post', { batch_name: name })
    },
    getBatchList (params) {
      return apiRequest('/activationcodebatch/', 'get', params)
    },
    delBatch (id) {
      return apiRequest(`/activationcodebatch/${id}/`, 'delete')
    },
    uploadBatch (data) {
      return apiRequest(`/activationcodebatch/${data.id}/`, 'patch', data)
    },
    addBatchCode (params) {
      return apiRequest('/createmulticodes/', 'post', params)
    },
    getCodeList (params) {
      return apiRequest('/activationcode/', 'get', params)
    },
    getCodeDetail (id) {
      return apiRequest(`/activationcode/${id}/`, 'get')
    },
    getCodeRecordyz (id) {
      return apiRequest(`/activationcoderecordyz/`, 'get', { activation_code: id })
    },
    uploadCode (data) {
      return apiRequest(`/activationcode/${data.id}/`, 'patch', data)
    },
    delCode (id) {
      return apiRequest(`/activationcode/${id}/`, 'delete')
    },
    getCodeType () {
      return apiRequest('/activationcodetype/', 'get')
    }
  },
  service: {
    getServiceList () {
      return apiRequest('/servicetype/', 'get')
    }
  }
}
