import request from '@/utils/request'
import api from './Api.js'

/**
 * 保存一次性缴核定事项
 * @param query
 */
export function saveDspoClctCrtfMatt(data) {
  return request({
    url: api.saveDspoClctCrtfMatt,
    method: 'post',
    data
  })
}
