import request from '@/utils/request'
import api from './Api.js'

/**
 * 审核一次性缴信息
 * @param query
 */
export function saveAuditDspo(data) {
  return request({
    url: api.saveAuditDspo,
    method: 'post',
    data
  })
}
