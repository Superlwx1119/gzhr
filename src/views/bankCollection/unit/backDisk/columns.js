export default [
  { type: 'selection' },
  { type: 'index', label: '序号', width: '55px' },
  { prop: 'nameCode', label: '费用来源', align: 'center' },
  { prop: 'nameCode', label: '缴费银行', align: 'center' },
  { prop: 'code', label: '统筹区', align: 'center' },
  { prop: 'nameCode', label: '到账日期', align: 'center' },
  { prop: 'nameCode', label: '缴费人数合计', minWidth: '200px', align: 'center' },
  { prop: 'code', label: '应缴总金额（元）', align: 'center' },
  { prop: 'code', label: '实缴总金额合计（元）', align: 'center' },
  { prop: 'code', label: '医保区划', align: 'center' },
  { type: 'operation', label: '操作', fixed: 'right', width: '200px' }
]
