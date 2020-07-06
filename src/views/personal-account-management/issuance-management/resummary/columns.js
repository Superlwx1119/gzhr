export default {
  columns1: [
    { type: 'index', label: '序号', width: '55px' },
    { prop: 'nameCode', label: '变更项目', align: 'center' },
    { prop: 'nameCode', label: '黑名单数', align: 'center' },
    { prop: 'code', label: '影响本次记录数', align: 'center' }
  ],
  columns2: [
    // { type: 'selection' },
    { type: 'index', label: '序号', width: '55px' },
    { prop: 'nameCode', label: '交换数据批号', align: 'center' },
    { prop: 'nameCode', label: '医保区划', align: 'center' },
    { prop: 'code', label: '业务状态', align: 'center' },
    { prop: 'nameCode', label: '确认状态', align: 'center' },
    { prop: 'nameCode', label: '人数', minWidth: '200px', align: 'center' },
    { prop: 'code', label: '人次', align: 'center' },
    { prop: 'code', label: '金额（元）', align: 'center' },
    { type: 'operation', label: '操作', fixed: 'right', width: '80px' }
  ],
  columns3: [
    // { type: 'selection' },
    { type: 'index', label: '序号', width: '55px' },
    { prop: 'nameCode', label: '银行数据批号', align: 'center' },
    { prop: 'nameCode', label: '银行名称', align: 'center' },
    { prop: 'code', label: '业务状态', align: 'center' },
    { prop: 'nameCode', label: '制盘时间', align: 'center' },
    { prop: 'nameCode', label: '总人数', minWidth: '200px', align: 'center' },
    { prop: 'code', label: '总记录', align: 'center' },
    { prop: 'code', label: '总金额（元）', align: 'center' },
    { type: 'operation', label: '操作', fixed: 'right', width: '300px' }
  ],
  columns4: [
    // { type: 'selection' },
    { type: 'index', label: '序号', width: '55px' },
    { prop: 'nameCode', label: '交换数据批号', align: 'center' },
    { prop: 'nameCode', label: '医保区划', align: 'center' },
    { prop: 'code', label: '核查项目', align: 'center' },
    { prop: 'nameCode', label: '人数', align: 'center' },
    { prop: 'nameCode', label: '人次', minWidth: '200px', align: 'center' },
    { prop: 'code', label: '金额（元）', align: 'center' },
    { prop: 'code', label: '修改量', align: 'center' }
    // { type: 'operation', label: '操作', fixed: 'right', width: '200px' }
  ]
}
