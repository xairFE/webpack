import axios from 'axios'
import { urlQueryString } from 'utils/index'

export const queryData = (method, url) => {
  return params => new Promise((resolve, reject) => {
    if (method.toLowerCase() === 'get') {
      url = urlQueryString(url, params)
      params = {}
    }
    return axios[method](url, params).then(rs => {
      if (rs.data.status === 200) {
        resolve(rs.data.data)
      } else {
        reject(rs.data.message)
      }
    }).catch(() => {
      reject('通讯异常')
    })
  })
}
