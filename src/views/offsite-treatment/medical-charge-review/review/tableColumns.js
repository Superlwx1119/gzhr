export const summaryColumns = [
  { type: 'selection' },
  { type: 'index', label: '序号' },
  { label: '申报受理号', prop: '申报受理号' },
  { label: '审核状态', prop: '审核状态' },
  { label: '结算申报类型', prop: '结算申报类型' },
  { label: '结算申报号', prop: '结算申报号' },
  { label: '医疗机构编码', prop: '医疗机构编码' },
  { label: '申报机构', prop: '申报机构' },
  { label: '申报开始日期', prop: '申报开始日期' },
  { label: '申报结束日期', prop: '申报结束日期' },
  { label: '批次总人数', prop: '批次总人数' },
  { label: '总费用金额(元)', prop: '总费用金额(元)' },
  { label: '总基金支付金额(元)', prop: '总基金支付金额(元)' },
  { label: '拨付中心', prop: '拨付中心' }
]

export const detailColumns = [
  { type: 'selection' },
  { type: 'index', label: '序号' },
  { label: '审核状态', prop: '审核状态' },
  { label: '结算方式', prop: '结算方式' },
  { label: '业务类型', prop: '业务类型' },
  { label: '身份证号码', prop: '身份证号码' },
  { label: '姓名', prop: '姓名' },
  { label: '性别', prop: '性别' },
  { label: '疾病诊断', prop: '疾病诊断' },
  { label: '住院天数', prop: '住院天数' },
  { label: '入院时间', prop: '入院时间' },
  { label: '出院时间', prop: '出院时间' },
  { label: '医疗费用(元)', prop: '医疗费用(元)' },
  { label: '扣付金额', prop: '扣付金额' },
  { label: '扣减原因', prop: '扣减原因' },
  { label: '基金总支付', prop: '基金总支付' },
  { label: '个人自付金额', prop: '个人自付金额' },
  { label: '基本统筹支付金额', prop: '基本统筹支付金额' },
  { label: '大病统筹支付金额', prop: '大病统筹支付金额' },
  { type: 'operation', label: '操作', fixed: 'right', width: '120px' }
]

export const deductionColumns = [
  { type: 'selection' },
  { type: 'index', label: '序号' },
  { label: '就医登记号', prop: '就医登记号' },
  { label: '费用序列号', prop: '费用序列号' },
  { label: '目录编码', prop: '目录编码' },
  { label: '目录名称', prop: '目录名称' },
  { label: '目录类别', prop: '目录类别' },
  { label: '目录等级', prop: '目录等级' },
  { label: '数量', prop: '数量' },
  { label: '单价(元)', prop: '单价(元)' },
  { label: '金额(元)', prop: '金额(元)' },
  { label: '暂扣金额', prop: '暂扣金额' },
  { label: '暂扣原因', prop: '暂扣原因' },
  { label: '费用发生日期', prop: '费用发生日期' },
  { label: '限制用药标识', prop: '限制用药标识' },
  { label: '限制范围', prop: '限制范围' },
  { label: '是否全自费', prop: '是否全自费' }
]
