import request from '@/utils/request'
import api from './API'

/**
 * 查询离退审核列表
 * @param query
 */
export function list(query) {
  return request({
    url: api.dimission.list,
    method: 'post',
    params: query
  })
}
/**
 * 查询离退待审核列表
 * @param query
 */
export function querypendinglist(query) {
  return request({
    url: api.dimission.querypendinglist,
    method: 'post',
    data: query
  })
}
/**
 * 查询离退人员详情
 * @param query
 */
export function info(query) {
  return request({
    url: api.dimission.info,
    method: 'get',
    params: query
  })
}
/**
 * 可退离人员查询列表
 * @param query
 */
export function canBeList(query) {
  return request({
    url: api.dimission.canBeList,
    method: 'get',
    params: query
  })
}
/**
 * 添加离退人员信息
 * @param query
 */
export function retire(query) {
  return request({
    url: api.dimission.retire,
    method: 'post',
    params: query
  })
}
/**
 * 修改离退人员信息
 * @param query
 */
export function retireChange(query) {
  return request({
    url: api.dimission.retireChange,
    method: 'put',
    params: query
  })
}
/**
 * 离退人员申报
 * @param query
 */
export function retireApply(query) {
  return request({
    url: api.dimission.retireApply,
    method: 'post',
    params: query
  })
}
/**
 * 删除离退人员信息
 * @param query
 */
export function retireDelete(query) {
  return request({
    url: api.dimission.retireDelete,
    method: 'delete',
    params: query
  })
}
/**
 * 离退人员审核
 * @param query
 */
export function retireAudit(query) {
  return request({
    url: api.dimission.retireAudit,
    method: 'post',
    data: query
  })
}

