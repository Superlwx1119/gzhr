export default {
  path: '/assessment-info-management',
  component: () => import('@/views/fixed-point-protocol-management/assessment-info-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '考核信息管理', icon: '' },
  children: [
    {
      path: '/assessment-info-maintenance',
      component: () => import('@/views/fixed-point-protocol-management/assessment-info-management/assessment-info-maintenance/index'),
      name: 'assessmentInfoMaintenance',
      meta: { title: '考核信息维护', icon: 'spot' }
    },
    {
      path: '/assessment-info-review',
      component: () => import('@/views/fixed-point-protocol-management/assessment-info-management/assessment-info-review/index'),
      name: 'assessmentInfoReview',
      meta: { title: '考核信息审核', icon: 'spot' }
    },
    {
      path: '/assessment-info-query',
      component: () => import('@/views/fixed-point-protocol-management/assessment-info-management/assessment-info-query/index'),
      name: 'assessmentInfoQuery',
      meta: { title: '考核信息查询', icon: 'spot' }
    }
  ]
}
