import request from '@/utils/request'
import api from './Api.js'

/**
 * 查询聘用合同签订情况列表
 * @param query
 */
export function getContractList(query) {
  return request({
    url: api.getContractList,
    method: 'get',
    params: query
  })
}
