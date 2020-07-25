import request from '@/utils/request'
import api from './Api.js'
/**
 * 新增单位信息
 * @param query
 */
export function addCorp(query) {
  return request({
    url: api.addCorp,
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
    url: api.modifyCorp,
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
    url: api.queryCorpList,
    method: 'get',
    params: query
  })
}
/**
 * 查询单位列表
 * @param query
 */
export function queryCorpInfo(query) {
  return request({
    url: api.queryCorpInfo,
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
    url: api.queryCorpDetail,
    method: 'get',
    params: query
  })
}
/**
 * 查询单位变更记录
 * @param query
 */
export function queryChangeCorpList(query) {
  return request({
    url: api.queryChangeCorpList,
    method: 'get',
    params: query
  })
}
