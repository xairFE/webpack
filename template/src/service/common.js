import { queryData } from './index'

export const getUserInfo = queryData('get', '/v2/member/index')
export const getWXTicket = queryData('post', '/v2/public/get_jssdk')
