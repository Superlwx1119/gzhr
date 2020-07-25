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
