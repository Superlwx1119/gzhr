export default [
  { type: 'selection' },
  { type: 'index', label: '序号', width: '55px' },
  { prop: 'nameCode', label: '批次号', align: 'center' },
  { prop: 'nameCode', label: '征缴期间', align: 'center' },
  { prop: 'code', label: '到账时间', align: 'center' },
  { prop: 'nameCode', label: '应到金额（元）', align: 'center' },
  { prop: 'nameCode', label: '实到金额（元）', minWidth: '200px', align: 'center' },
  { prop: 'code', label: '回盘文件', align: 'center' },
  { prop: 'code', label: '医保区划', align: 'center' },
  { type: 'operation', label: '操作', fixed: 'right', width: '200px' }
]
