import axios from 'axios'

export const queryData = (method, url) => {
  return query => axios[method](url, query).then(rs => {
    return new Promise((resolve, reject) => {
      if (rs.data.status === 200) {
        resolve(rs.data.data)
      } else {
        reject(rs.data.message)
      }
    })
  }).catch(err => {
    console.log('请求失败')
  })
}
