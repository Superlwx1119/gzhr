export default [
  { type: 'index', label: '序号', width: '55px' },
  { prop: 'nameCode', label: '姓名' },
  { prop: 'name', label: '性别' },
  { prop: 'code', label: '身份证号' },
  { prop: 'code', label: '出生日期' },
  { prop: 'medcial', label: '医疗', type: 'custom', slotName: 'medcial' },
  { prop: 'pension', label: '养老', type: 'custom', slotName: 'pension' },
  { prop: 'workInjury', label: '工伤', type: 'custom', slotName: 'workInjury' },
  { prop: 'childBirth', label: '生育', type: 'custom', slotName: 'childBirth' },
  { prop: 'unemployment', label: '失业', type: 'custom', slotName: 'unemployment' },
  { prop: 'nameCode', label: '单位参保日期' }
]
