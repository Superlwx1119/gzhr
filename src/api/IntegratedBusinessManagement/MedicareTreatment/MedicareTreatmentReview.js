import request from '@/utils/request'
import api from './Api.js'

/**
 * 审核
 * @param data
 */
export function checkDeal(data) {
  return request({
    url: api.checkDeal,
    method: 'put',
    data
  })
}
