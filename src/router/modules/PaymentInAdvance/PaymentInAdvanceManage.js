//  预缴管理
export default {
  path: '/payment-in-advance-manage',
  component: () => import('@/views/payment-in-advance/payment-in-advance-manage/index'),
  redirect: 'noRedirect',
  name: 'paymentInAdvanceManage',
  alwaysShow: true,
  meta: { title: '医疗待遇信息查询', icon: 'example' },
  children: [
    {
      path: 'company-verification',
      component: () => import('@/views/payment-in-advance/payment-in-advance-manage/company-verification/index'),
      name: 'companyVerification',
      meta: { title: '单位预缴核定', icon: 'spot' }
    },
    {
      path: 'company-audit',
      component: () => import('@/views/payment-in-advance/payment-in-advance-manage/company-audit/index'),
      name: 'companyAudit',
      meta: { title: '单位预缴审核', icon: 'spot' }
    },
    {
      path: 'company-refund',
      component: () => import('@/views/payment-in-advance/payment-in-advance-manage/company-refund/index'),
      name: 'companyRefund',
      meta: { title: '单位预缴返还', icon: 'spot' }
    },
    {
      path: 'company-query',
      component: () => import('@/views/payment-in-advance/payment-in-advance-manage/company-query/index'),
      name: 'companyQuery',
      meta: { title: '单位预缴查询', icon: 'spot' }
    }
  ]
}
