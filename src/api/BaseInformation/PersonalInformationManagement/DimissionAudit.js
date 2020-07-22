import request from '@/utils/request'
import api from './API'

/**
 * 查询离退审核列表
 * @param query
 */
export function list(query) {
  return request({
    url: api.dimissionAudit.list,
    method: 'get',
    params: query
  })
}
/**
 * 查询离退人员详情
 * @param query
 */
export function info(query) {
  return request({
    url: api.dimissionAudit.info,
    method: 'get',
    params: query
  })
}

