export const tableColumns = [
  { label: '序号', type: 'index' },
  { type: 'selection' },
  { label: '拒付原因编号', prop: '拒付原因编号', type: 'custom', slotName: 'reasonNo' },
  { label: '拒付原因', prop: '拒付原因', type: 'custom', slotName: 'reason' },
  { label: '拒付类别', prop: '拒付类别', type: 'custom', slotName: 'category' },
  { label: '所属中心', prop: '所属中心', type: 'custom', slotName: 'center' },
  { label: '有效标志', prop: '有效标志', type: 'custom', slotName: 'sign' },
  { type: 'operation', label: '操作', fixed: 'right', width: '120px' }
]

