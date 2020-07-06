export default {
  path: '/insurance-status-management',
  component: () => import('@/views/Integrated-business-management/insurance-status-management/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '险种状态管理', icon: '' },
  children: [
    {
      path: 'adjustment-review',
      component: () => import('@/views/Integrated-business-management/insurance-status-management/adjustment-review/index'),
      name: 'adjustmentReview',
      meta: { title: '险种状态调整审核', icon: 'spot' }
    },
    {
      path: 'business-query',
      component: () => import('@/views/Integrated-business-management/insurance-status-management/business-query/index'),
      name: 'businessQuery',
      meta: { title: '险种状态业务查询', icon: 'spot' }
    }
  ]
}
