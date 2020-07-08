import request from '@/utils/request'

/**
 * 新增人员信息
 * @param query
 */
export function addPerson(query) {
  return request({
    url: '/person',
    method: 'post',
    data: query
  })
}

/**
 * 修改单位信息
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
 * 查询人员信息
 * @param query
 */
export function list(query) {
  return request({
    url: '/person/list',
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
    url: '/person',
    method: 'delete',
    params: query
  })
}
