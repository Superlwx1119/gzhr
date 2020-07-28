import request from '@/utils/request'
import api from './Api'
/**
 * 聘用申报列表
 * @param query
 */
export function querydeclarelist(query) {
  return request({
    url: api.hire.querydeclarelist,
    method: 'post',
    data: query
  })
}
/**
 * 聘用新增跳转
 * @param query
 */
export function addPostFlow(query) {
  return request({
    url: api.hire.addPostFlow,
    method: 'get',
    params: query
  })
}
/**
 * 待聘用人员列表
 * @param query
 */
export function queryPostPerson(query) {
  return request({
    url: api.hire.queryPostPerson,
    method: 'get',
    params: query
  })
}
