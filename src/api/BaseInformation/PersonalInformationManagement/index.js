import request from '@/utils/request'
import api from './API'
/**
 * 新增人员信息
 * @param query
 */
export function addPerson(query) {
  return request({
    url: api.staffRegistration.addPerson,
    method: 'post',
    data: query
  })
}

/**
 * 修改人员信息
 * @param query
 */
export function modifyPerson(query) {
  return request({
    url: api.staffRegistration.modifyPerson,
    method: 'put',
    data: query
  })
}
/**
 * 人员进入申报
 * @param query
 */
export function personApply(query) {
  return request({
    url: api.staffRegistration.personApply,
    method: 'post',
    params: query
  })
}

/**
 * 查询人员列表
 * @param query
 */
export function list(query) {
  return request({
    url: api.staffRegistration.list,
    method: 'post',
    data: query
  })
}
/**
 * 查询人员详情
 * @param query
 */
export function personDetail(query) {
  return request({
    url: api.staffRegistration.personDetail,
    method: 'get',
    params: query
  })
}

/**
 * 删除人员
 * @param query
 */
export function deletePerson(query) {
  return request({
    url: api.staffRegistration.deletePerson,
    method: 'delete',
    params: query
  })
}

/**
 * 人员进入审核
 * @param query
 */
export function approveNew(query) {
  return request({
    url: api.newAudit.approveNew,
    method: 'post',
    params: query
  })
}
