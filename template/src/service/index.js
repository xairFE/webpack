import axios from 'axios'
import qs from 'qs'

// 此处需定制
export const queryData = (method, url) => {
  return (params = {}, config = {}) => new Promise((resolve, reject) => {
    if (!params.fromUrl) params.fromUrl = window.location.href
    if (['get', 'delete'].indexOf(method.toLowerCase()) > -1) {
      params = Object.assign({params}, config)
    } else {
      params = qs.stringify(params)
    }
    var _hash = window.location.hash
    return axios[method](url, params, config).then(({data}) => {
      if (data.status === 8888) {
        window.location.href = data.data
      } if (data.status === 7777) {   // 登录页面
        if (_hash !== window.location.hash) return
        if (window.location.hash.indexOf('#/user/login') === -1) {
          window.location.hash = '#/user/login'
        }
        reject(new Error('正在前往登录...'))
      } else {
        data.status === 200 ? resolve(data.data) : reject(new Error(data.message || '服务器内部错误'))
      }
    }).catch((err) => {
      reject(new Error(getErrMessage(err)))
    })
  })
}

function getErrMessage (err) {
  var message = ''
  if (err.message === 'Network Error') {
    message = '网络连接失败，请检查网络状态！'
  } else if (err.response) {
    message = err.response.status === 404 ? '接口地址不存在' : '服务器内部错误'
  } else {
    message = '通讯异常'
  }
  return message
}
