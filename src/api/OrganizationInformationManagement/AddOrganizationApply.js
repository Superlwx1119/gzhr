import request from '@/utils/request'

/**
 * 新增单位信息
 * @param query
 */
export function addCorp(query) {
  return request({
    url: '/corp/addCorp',
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
    url: '/corp/modifyCorp',
    method: 'post',
    data: query
  })
}

/**
 * 查询单位信息
 * @param query
 */
export function queryCorpList(query) {
  return request({
    url: '/corp/queryCorpList',
    method: 'get',
    params: query
  })
}

/**
 * 查询单位信息详情
 * @param query
 */
export function queryCorpDetail(query) {
  return request({
    url: '/corp/queryCorpDetail',
    method: 'get',
    params: query
  })
}
