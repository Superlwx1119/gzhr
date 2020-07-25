import request from '@/utils/request'
import api from './Api'
/**
 * 岗位设置方案查询
 * @param query
 */
export function queryPostSetup(query) {
  return request({
    url: api.queryPostSetup,
    method: 'get',
    params: query
  })
}
/**
 * 岗位设置方案新增跳转
 * @param query
 */
export function addPostSetup(query) {
  return request({
    url: api.addPostSetup,
    method: 'put',
    data: query
  })
}
/**
 * 岗位设置方案前提条件校验
 * @param query
 */
export function checkPostSetup(query) {
  return request({
    url: api.checkPostSetup,
    method: 'post',
    data: query
  })
}
/**
 * 岗位设置方案申报/审批
 * @param query
 */
export function applyPostSetup(query) {
  return request({
    url: api.applyPostSetup,
    method: 'put',
    data: query
  })
}
