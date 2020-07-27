import request from '@/utils/request'
import api from './Api'
/**
 * 岗位设置方案查询
 * @param query
 */
export function queryPostSetup(query) {
  return request({
    url: api.queryPostSetup,
    method: 'post',
    data: query
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
    params: query
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
/**
 * 异动/聘用流程--点击新增跳转
 * @param query
 */
export function addPostFlow(query) {
  return request({
    url: api.addPostFlow,
    method: 'put',
    data: query
  })
}
/**
 * 保存岗位设置数
 * @param query
 */
export function savePostSetup(query) {
  return request({
    url: api.savePostSetup,
    method: 'post',
    data: query
  })
}
/**
 * 删除岗位设置
 * @param query
 */
export function delPostSetup(query) {
  return request({
    url: api.delPostSetup,
    method: 'delete',
    params: query
  })
}
/**
 * 岗位设置详情
 * @param query
 */
export function editPostSetup(query) {
  return request({
    url: api.editPostSetup,
    method: 'delete',
    params: query
  })
}
