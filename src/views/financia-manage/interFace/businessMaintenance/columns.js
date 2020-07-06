export default [
  { type: 'selection' },
  { type: 'index', label: '业务类型', align: 'center' },
  { prop: 'nameCode', label: '匹配码', align: 'center' },
  { prop: 'nameCode', label: '项目名称', align: 'center' },
  { prop: 'code', label: '财务账套', align: 'center', type: 'custom', slotName: 'select' },
  { prop: 'nameCode', label: '借方科目', align: 'center', type: 'custom', slotName: 'input' },
  { prop: 'nameCode', label: '贷方科目', minWidth: '200px', align: 'center', type: 'custom', slotName: 'input' },
  { prop: 'code', label: '业务方向', align: 'center', type: 'custom', slotName: 'select' },
  { prop: 'code', label: '是否有效', align: 'center', type: 'custom', slotName: 'select' },
  { type: 'operation', label: '操作', fixed: 'right', width: '200px' }
]
