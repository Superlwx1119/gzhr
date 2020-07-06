/*
  公共Api
 */
import request from '@/utils/request'

/**
 * 码表
 * @param query
 */
export function getCodeByType(query) {
  return request({
    url: '/corp/getCodeByType',
    method: 'get',
    params: query
  })
}
