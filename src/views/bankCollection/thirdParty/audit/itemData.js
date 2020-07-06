export default [
  { label: '制单日期', prop: 'aaa', type: 'dateRange' },
  {
    label: '缴费来源', prop: 'collBank', type: 'select', hidden: false, options: [
      { value: '1', label: '农业银行' },
      { value: '2', label: '工商银行' }
    ]
  },
  { label: '单据状态', prop: 'xxx', type: 'select' },
  { label: '单据号', prop: 'xxx', type: 'input' }
]
