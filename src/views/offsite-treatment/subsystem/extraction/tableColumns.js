export const sortingDetailColumns = [
  { type: 'selection' },
  { type: 'index', label: '序号' },
  { label: '就医地所属省', prop: '就医地所属省' },
  { label: '就医地所属市', prop: '就医地所属市' },
  { label: '就医地所属区县', prop: '就医地所属区县' },
  { label: '医疗机构编码(省平台)', prop: '医疗机构编码(省平台)' },
  { label: '定点医药机构编号', prop: '定点医药机构编号' },
  { label: '定点医药机构名称', prop: '定点医药机构名称' },
  { label: '社会保障号', prop: '社会保障号' },
  { label: '就诊登记号(省平台)', prop: '就诊登记号(省平台)' },
  { label: '结算流水号', prop: '结算流水号' },
  { label: '就诊事件ID', prop: '就诊事件ID' },
  { label: '结算事件ID', prop: '结算事件ID' },
  { label: '费用类型', prop: '费用类型' },
  { label: '经办机构支付总额(元)', prop: '经办机构支付总额(元)' }
]

export const summaryColumns = [
  { type: 'selection' },
  { type: 'index', label: '序号' },
  { label: '就医地所属省', prop: '就医地所属省' },
  { label: '就医地所属市', prop: '就医地所属市' },
  { label: '就医地所属区县', prop: '就医地所属区县' },
  { label: '医疗机构编码(省平台)', prop: '医疗机构编码(省平台)' },
  { label: '定点医药机构编码', prop: '定点医药机构编码' },
  { label: '定点医药机构名称', prop: '定点医药机构名称' },
  { label: '结算审核扣款信息ID', prop: '结算审核扣款信息ID' },
  { label: '社会保障号', prop: '社会保障号' },
  { label: '姓名', prop: '姓名' },
  { label: '就诊登记号(省平台)', prop: '就诊登记号(省平台)' },
  { label: '结算流水号(省平台)', prop: '结算流水号(省平台)' },
  { label: '对医疗机构审核扣款金额(元)', prop: '对医疗机构审核扣款金额(元)' },
  { label: '医疗费用结算扣款原因', prop: '医疗费用结算扣款原因' },
  { label: '扣款经办人', prop: '扣款经办人' },
  { label: '扣款经办时间', prop: '扣款经办时间' },
  { type: 'operation', label: '操作', fixed: 'right', width: '100px' }
]

export const deductionColumns = [
  { type: 'selection' },
  { type: 'index', label: '序号' },
  { label: '结算审核扣款信息ID', prop: '结算审核扣款信息ID' },
  { label: '费用明细审核扣款信息ID', prop: '费用明细审核扣款信息ID' },
  { label: '费用明细流水号', prop: '费用明细流水号' },
  { label: '医疗机构三大目录编码', prop: '医疗机构三大目录编码' },
  { label: '医疗机构三大目录名称', prop: '医疗机构三大目录名称' },
  { label: '本条费用明细扣款金额(元)', prop: '本条费用明细扣款金额(元)' },
  { label: '医疗费用扣款原因', prop: '医疗费用扣款原因' },
  { label: '备注', prop: '备注' },
  { label: '经办人', prop: '经办人' },
  { label: '经办时间', prop: '经办时间' }
]

export const contrastColumns = [
  { type: 'selection' },
  { type: 'index', label: '序号' },
  { label: '比对情况', prop: '比对情况' },
  { label: '就医地所属省', prop: '就医地所属省' },
  { label: '就医地所属市', prop: '就医地所属市' },
  { label: '就医地所属区县', prop: '就医地所属区县' },
  { label: '医疗机构编码', prop: '医疗机构编码' },
  { label: '医疗机构名称', prop: '医疗机构名称' },
  { label: '清分年月', prop: '清分年月' },
  { label: '业务类型', prop: '业务类型' },
  { label: '就医人次', prop: '就医人次' },
  { label: '就医人数', prop: '就医人数' },
  { label: '总费用(元)', prop: '总费用(元)' },
  { label: '个人支付费用(元)', prop: '个人支付费用(元)' },
  { label: '记账费用(元)', prop: '记账费用(元)' },
  { label: '审核扣减费用(元)', prop: '审核扣减费用(元)' },
  { label: '预付金实际支付费用(元)', prop: '预付金实际支付费用(元)' },
  { label: '确认标志', prop: '确认标志' },
  { label: '备注', prop: '备注' }
]
