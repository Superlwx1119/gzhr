export default {
  path: '/person-hiring',
  component: () => import('@/views/personnel-assignment/person-hiring/index'),
  name: 'PersonHiring',
  meta: { title: '省直事业单位人员招聘', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'hiring-apply',
      component: () => import('@/views/personnel-assignment/person-hiring/hiring-apply/index'),
      name: 'HiringApply',
      meta: { title: '人员招聘-申报', icon: 'spot' }
    },
    {
      path: 'hiring-summary',
      component: () => import('@/views/personnel-assignment/person-hiring/hiring-summary/index'),
      name: 'HiringSummary',
      meta: { title: '人员招聘-事业处资料汇总', icon: 'spot' }
    },
    {
      path: 'hiring-first-audit',
      component: () => import('@/views/personnel-assignment/person-hiring/hiring-first-audit/index'),
      name: 'HiringFirstAudit',
      meta: { title: '人员招聘-初审', icon: 'spot' }
    },
    {
      path: 'hiring-second-audit',
      component: () => import('@/views/personnel-assignment/person-hiring/hiring-second-audit/index'),
      name: 'HiringSecondAudit',
      meta: { title: '人员招聘-审定', icon: 'spot' }
    },
    {
      path: 'hiring-approval',
      component: () => import('@/views/personnel-assignment/person-hiring/hiring-approval/index'),
      name: 'HiringApproval',
      meta: { title: '人员招聘-批准', icon: 'spot' }
    },
    {
      path: 'hiring-send',
      component: () => import('@/views/personnel-assignment/person-hiring/hiring-send/index'),
      name: 'HiringSend',
      meta: { title: '人员招聘-发文', icon: 'spot' }
    },
    {
      path: 'hiring-statistical',
      component: () => import('@/views/personnel-assignment/person-hiring/hiring-statistical/index'),
      name: 'HiringStatistical',
      meta: { title: '人员招聘-统计', icon: 'spot' }
    }
  ]
}
