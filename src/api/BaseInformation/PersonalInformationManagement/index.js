import request from '@/utils/request'
import api from './API'
/**
 * 新增人员信息
 * @param query
 */
export function addPerson(query) {
  return request({
    url: api.addPerson,
    method: 'post',
    data: query
  })
}

/**
 * 修改人员信息
 * @param query
 */
export function modifyCorp(query) {
  return request({
    url: '/person/modifyCorp',
    method: 'post',
    data: query
  })
}

/**
 * 查询人员列表
 * @param query
 */
export function list(query) {
  return request({
    url: api.list,
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
    url: api.deletePerson,
    method: 'delete',
    params: query
  })
}
