import request from '@/utils/request'
import api from './Api.js'

/**
 * 查询一次性缴核定事项列表
 * @param query
 */
export function listDspoClctCrtfMatt(query) {
  return request({
    url: api.listDspoClctCrtfMatt,
    method: 'get',
    params: query
  })
}

/**
 * 获取一次性缴详细信息
 * @param query
 */
export function getDspoClctCrtfMattDetail(query) {
  return request({
    url: api.getDspoClctCrtfMattDetail,
    method: 'get',
    params: query
  })
}

/**
 * 获取人员缴费基数
 * @param query
 */
export function getStaffConStd(query) {
  return request({
    url: api.getStaffConStd,
    method: 'get',
    params: query
  })
}

/**
 * 获取人员缴费费率
 * @param query
 */
export function getStaffExpRate(query) {
  return request({
    url: api.getStaffExpRate,
    method: 'get',
    params: query
  })
}
