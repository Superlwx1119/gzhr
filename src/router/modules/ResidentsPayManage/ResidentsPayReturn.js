//  居民应缴纳返还管理
export default {
  path: '/residents-pay-return',
  component: () => import('@/views/residents-pay-manage/residents-pay-return/index'),
  name: 'residentsPayReturn',
  meta: { title: '居民应缴纳返还管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'return-of-premium',
      component: () => import('@/views/residents-pay-manage/residents-pay-return/return-of-premium/index'),
      name: 'returnOfPremium',
      meta: { title: '居民医疗保险费返还', icon: 'spot' }
    },
    {
      path: 'return-of-premium-audit',
      component: () => import('@/views/residents-pay-manage/residents-pay-return/return-of-premium-audit/index'),
      name: 'returnOfPremiumAudit',
      meta: { title: '居民医疗保险费返还审核', icon: 'spot' }
    },
    {
      path: 'cancel-after-verification',
      component: () => import('@/views/residents-pay-manage/residents-pay-return/cancel-after-verification/index'),
      name: 'cancelAfterVerification',
      meta: { title: '居民应缴核销', icon: 'spot' }
    },
    {
      path: 'cancel-after-verification-audit',
      component: () => import('@/views/residents-pay-manage/residents-pay-return/cancel-after-verification-audit/index'),
      name: 'cancelAfterVerificationAudit',
      meta: { title: '居民应缴核销审核', icon: 'spot' }
    }
  ]
}
