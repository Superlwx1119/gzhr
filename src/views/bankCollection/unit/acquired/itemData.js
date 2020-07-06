export default [
  { label: '应缴时间', prop: 'aaa', type: 'dateRange' },
  {
    label: '托收类别', prop: 'collCategory', type: 'select', options: [
      { value: 'bank', label: '银行托收', dispose: false },
      { value: 'jurisdiction', label: '辖区托收', dispose: true }
    ]
  },
  {
    label: '托收银行', prop: 'collBank', type: 'select', hidden: false, options: [
      { value: '1', label: '农业银行' },
      { value: '2', label: '工商银行' }
    ]
  },
  { label: '出盘状态', prop: 'xxx', type: 'select' }
]
