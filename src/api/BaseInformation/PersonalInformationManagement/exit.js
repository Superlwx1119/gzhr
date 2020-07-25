import request from '@/utils/request'
import api from './API'

/**
 * 查询离退审核列表
 * @param query
 */
export function exitList(query) {
  return request({
    url: api.exit.exitList,
    method: 'post',
    data: query
  })
}
