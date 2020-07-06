//  居民到账管理
export default {
  path: '/residents-account-manage',
  component: () => import('@/views/residents-pay-manage/residents-account-manage/index'),
  name: 'residentsAccountManage',
  meta: { title: '居民到账管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'fiscal-apply',
      component: () => import('@/views/residents-pay-manage/residents-account-manage/fiscal-apply/index'),
      name: 'fiscalApply',
      meta: { title: '居民财政申拨', icon: 'spot' }
    },
    {
      path: 'fiscal-apply-account',
      component: () => import('@/views/residents-pay-manage/residents-account-manage/fiscal-apply-account/index'),
      name: 'fiscalApplyAccount',
      meta: { title: '居民财政申拨到账', icon: 'spot' }
    },
    {
      path: 'payment-register',
      component: () => import('@/views/residents-pay-manage/residents-account-manage/payment-register/index'),
      name: 'paymentRegister',
      meta: { title: '居民缴费登记', icon: 'spot' }
    },
    {
      path: 'payment-register-audit',
      component: () => import('@/views/residents-pay-manage/residents-account-manage/payment-register-audit/index'),
      name: 'paymentRegisterAudit',
      meta: { title: '居民缴费登记审核', icon: 'spot' }
    }
  ]
}
