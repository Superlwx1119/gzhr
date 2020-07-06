export default {
  path: '/reserved-manage',
  component: () => import('@/views/designated-institutions-settlement/reserved-manage/index'),
  name: 'ReservedManage',
  meta: { title: '预留金（保证金）管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'reserved-ratio-maintain',
      component: () => import('@/views/designated-institutions-settlement/reserved-manage/reserved-ratio-maintain/index'),
      name: 'ReservedRatioMaintain',
      meta: { title: '预留款比例维护', icon: '' }
    },
    {
      path: 'reserved-back-rule',
      component: () => import('@/views/designated-institutions-settlement/reserved-manage/reserved-back-rule/index'),
      name: 'ReservedBackRule',
      meta: { title: '预留金返还规则', icon: '' }
    },
    {
      path: 'make-reserved-plan',
      component: () => import('@/views/designated-institutions-settlement/reserved-manage/make-reserved-plan/index'),
      name: 'MakeReservedPlan',
      meta: { title: '制定预留金拨付计划', icon: '' }
    },
    {
      path: 'reserved-plan-audit',
      component: () => import('@/views/designated-institutions-settlement/reserved-manage/reserved-plan-audit/index'),
      name: 'ReservedPlanAudit',
      meta: { title: '预留金拨付计划审核', icon: '' }
    }
  ]
}
