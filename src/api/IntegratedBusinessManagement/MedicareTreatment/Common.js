import request from '@/utils/request'
import api from './Api.js'

/**
 * 查询医保待遇申报列表
 * @param query
 */
export function listMedicalTeatment(query) {
  return request({
    url: api.listMedicalTeatment,
    method: 'get',
    params: query
  })
}

/**
 * 查询医保待遇申报详情
 * @param query
 */
export function getMedicalTeatmentDetail(query) {
  return request({
    url: api.getMedicalTeatmentDetail,
    method: 'get',
    params: query
  })
}
