export default {
  path: '/fee-refund-registration-management',
  name: 'feeRefundRegistrationManagement',
  component: () => import('@/views/fixed-point-protocol-management/fee-refund-registration-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '退费备案登记管理', icon: '' },
  children: [
    {
      path: 'fee-refund-registration-register',
      component: () => import('@/views/fixed-point-protocol-management/fee-refund-registration-management/fee-refund-registration-register/index'),
      name: 'feeRefundRegistrationRegister',
      meta: { title: '退费备案登记', icon: 'spot' }
    },
    {
      path: 'fee-refund-registration-review',
      component: () => import('@/views/fixed-point-protocol-management/fee-refund-registration-management/fee-refund-registration-review/index'),
      name: 'feeRefundRegistrationReview',
      meta: { title: '退费备案登记审核', icon: 'spot' }
    },
    {
      path: 'fee-refund-registration-query',
      component: () => import('@/views/fixed-point-protocol-management/fee-refund-registration-management/fee-refund-registration-query/index'),
      name: 'feeRefundRegistrationQuery',
      meta: { title: '退费备案登记查询', icon: 'spot' }
    }
  ]
}
