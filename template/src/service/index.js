import axios from 'axios'

export const queryData = (method, url) => {
  return query => new Promise((resolve, reject) => {
    return axios[method](url, query).then(rs => {
      if (rs.data.status === 200) {
        resolve(rs.data.data)
      } else {
        reject(rs.data.message)
      }
    }).catch(() => {
      reject('网络异常')
    })
  })
}
