export default {
  path: '/institution-management',
  component: () => import('@/views/offsite-treatment/institution-management'),
  name: 'institutionManagement',
  meta: { title: '异地医疗机构库管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'confirm',
      component: () => import('@/views/offsite-treatment/institution-management/confirm'),
      name: 'offsiteInstitutionConfirm',
      meta: { title: '省内异地医疗机构确认', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/offsite-treatment/institution-management/query'),
      name: 'offsiteInstitutionNotifyQuery',
      meta: { title: '省内异地医疗机构变动通知查询', icon: 'spot' }
    },
    {
      path: 'trans-confirm',
      component: () => import('@/views/offsite-treatment/institution-management/trans-confirm'),
      name: 'offsiteInstitutionTransConfirm',
      meta: { title: '跨省异地医疗机构确认', icon: 'spot' }
    },
    {
      path: 'add',
      component: () => import('@/views/offsite-treatment/institution-management/add'),
      name: 'offsiteInstitutionAdd',
      meta: { title: '异地医疗机构库手工新增', icon: 'spot' }
    }
  ]
}
