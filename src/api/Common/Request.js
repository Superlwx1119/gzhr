/*
  公共Api
 */
import request from '@/utils/request'
import api from './Api'
/**
 * 码表
 * @param query
 */
export function getCodeByType(query) {
  return request({
    url: api.getCodeByType,
    method: 'get',
    params: query
  })
}
/**
 * 附件上传
 * @param query
 */
export function uploadAttachment(query) {
  return request({
    url: api.uploadAttachment,
    method: 'post',
    data: query
  })
}
/**
 * 行政区划级联
 * @param query
 */
export function getOrgAreaSub(query) {
  return request({
    url: `/code/${query.orguntId}/getOrgAreaSub`,
    method: 'get',
    params: query
  })
}
/**
 * 查询code表
 * @param query
 */
export function getCodeByTypeCodes(query) {
  return request({
    url: api.getCodeByTypeCodes,
    method: 'get',
    params: query
  })
}
/**
 * 流程申报
 * @param query
 */
export function apply(query) {
  return request({
    url: api.apply,
    method: 'post',
    params: query
  })
}
/**
 * 流程审核
 * @param query
 */
export function audit(query) {
  return request({
    url: api.audit,
    method: 'post',
    params: query
  })
}
/**
 * 启动流程
 * @param query
 */
export function startprocess(query) {
  return request({
    url: api.startprocess,
    method: 'post',
    params: query
  })
}
