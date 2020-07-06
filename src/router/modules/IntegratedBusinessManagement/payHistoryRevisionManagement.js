// 缴费历史修订管理
export default {
  path: '/payment-history-revision-management',
  component: () => import('@/views/Integrated-business-management/payment-history-revision-management/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '缴费历史修订管理', icon: '' },
  children: [
    {
      path: 'trial',
      component: () => import('@/views/Integrated-business-management/payment-history-revision-management/trial/index'),
      name: 'paymentHistoryRevisionManagementTrial',
      meta: { title: '缴费历史修订初审', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/Integrated-business-management/payment-history-revision-management/review/index'),
      name: 'paymentHistoryRevisionManagementReview',
      meta: { title: '缴费历史修订复核', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/Integrated-business-management/payment-history-revision-management/query/index'),
      name: 'paymentHistoryRevisionManagementQuery',
      meta: { title: '缴费历史修订查询', icon: 'spot' }
    }

  ]
}
