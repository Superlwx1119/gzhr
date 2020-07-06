import request from '@/utils/request'
import api from './Api'

//  新增医保待遇申报信息
export function addMedicalTeatment(data) {
  return request({
    url: api.addMedicalTeatment,
    method: 'post',
    data
  })
}

/**
 * 修改医保待遇申报信息
 * @param data
 */
export function updateMedicalTeatment(data) {
  return request({
    url: api.updateMedicalTeatment,
    method: 'put',
    data
  })
}
