import request from '@/utils/request'
import api from './API'

/**
 * 查询离退审核列表
 * @param query
 */
export function exitList(query) {
  return request({
    url: api.exit.exitList,
    method: 'post',
    data: query
  })
}
/**
 * 待审核人员退出列表
 * @param query
 */
export function querypendinglist(query) {
  return request({
    url: api.exit.querypendinglist,
    method: 'post',
    data: query
  })
}
/**
 * 修改人员退出信息
 * @param query
 */
export function changeExit(query) {
  return request({
    url: api.exit.changeExit,
    method: 'post',
    data: query
  })
}
/**
 * 删除人员退出信息
 * @param query
 */
export function deleteExit(query) {
  return request({
    url: api.exit.deleteExit,
    method: 'delete',
    params: query
  })
}
/**
 * 人员退出详情
 * @param query
 */
export function infoExit(query) {
  return request({
    url: api.exit.infoExit,
    method: 'get',
    params: query
  })
}
/**
 * 新增人员退出
 * @param query
 */
export function addExit(query) {
  return request({
    url: api.exit.addExit,
    method: 'post',
    data: query
  })
}
/**
 * 人员可退出列表
 * @param query
 */
export function canExitPersonsList(query) {
  return request({
    url: api.exit.canExitPersonsList,
    method: 'post',
    data: query
  })
}
