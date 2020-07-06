export const tableColumns = [
  { type: 'selection' },
  { label: '序号', type: 'index' },
  { label: '交换数据批号', prop: '交换数据批号' },
  { label: '核查项目', prop: '核查项目' },
  { label: '人数', prop: '人数' },
  { label: '人次', prop: '人次' },
  { label: '金额(元)', prop: '金额(元)' },
  { label: '业务状态', prop: '业务状态' },
  { label: '操作', type: 'operation', width: '120' }
]

export const calculateLogColumns = [
  // { type: 'selection' },
  { label: '序号', type: 'index' },
  { label: '计算政策号', prop: '计算政策号' },
  { label: '计算政策', prop: '计算政策' },
  { label: '备注', prop: '备注' },
  { label: '记录时间', prop: '记录时间' }
]

export const issueLogColumns = [
  // { type: 'selection' },
  { label: '序号', type: 'index' },
  { label: '核发项目', prop: '核发项目' },
  { label: '检查项目', prop: '检查项目' },
  { label: '备注', prop: '备注' },
  { label: '记录时间', prop: '记录时间' }
]

export const detailColumns = [
  // { type: 'selection' },
  { label: '序号', type: 'index' },
  { label: '姓名', prop: '交换数据批号' },
  { label: '证件号码', prop: '费款所属期' },
  { label: '单位名称', prop: '对应费款所属期' },
  { label: '账户收支类型', prop: '参保身份' },
  { label: '费款所属期', prop: '个人划入个账金额(元)' },
  { label: '对应费款所属期', prop: '单位划入个账金额(元)' },
  { label: '注资业务状态', prop: '门诊统筹基金扣减金额(元)' },
  { label: '总金额（元）', prop: '实际划款(元)' },
  { label: '单位划入个账金额（元）', prop: '注资基数' },
  { label: '个人划入个账金额（元）', prop: '医保区划' },
  { label: '实划金额（元）', prop: '医保区划' },
  { label: '划缴日期', prop: '医保区划' },
  { label: '参保身份', prop: '医保区划' },
  { label: '历史批号', prop: '医保区划' },
  { label: '备注', prop: '医保区划' }
]
