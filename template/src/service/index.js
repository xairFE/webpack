import axios from 'axios'

export const queryData = (method, url) => {
  return (params = {}) => new Promise((resolve, reject) => {
    if (['get', 'delete'].indexOf(method.toLowerCase()) > -1) {
      params = { params }
    }
    return axios[method](url, params).then(({data}) => {
      data.status === 200 ? resolve(data.data) : reject(data.message)
    }).catch(() => {
      reject('通讯异常')
    })
  })
}
