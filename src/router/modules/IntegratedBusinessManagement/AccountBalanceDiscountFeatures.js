export default {
  path: '/account-balance-discount-features',
  component: () => import('@/views/Integrated-business-management/account-balance-discount-features/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '死亡人员（超2年）个账余额扣回功能', icon: '' },
  children: [
    {
      path: 'account-balance-info-send-bank',
      component: () => import('@/views/Integrated-business-management/account-balance-discount-features/account-balance-info-send-bank/index'),
      name: 'AccountBalanceInfoSendBank',
      meta: { title: '死亡人员（超2年）个账信息发送银行', icon: 'spot' }
    },
    {
      path: 'personnel-account-deduction-receive',
      component: () => import('@/views/Integrated-business-management/account-balance-discount-features/personnel-account-deduction-receive/index'),
      name: 'PersonnelAccountDeductionReceive',
      meta: { title: '银行死亡两年人员个账扣减接收', icon: 'spot' }
    },
    {
      path: 'personnel-account-info-deduction-review',
      component: () => import('@/views/Integrated-business-management/account-balance-discount-features/personnel-account-info-deduction-review/index'),
      name: 'PersonnelAccountInfoDeductionReview',
      meta: { title: '死亡两年人员个账信息扣减到账复核', icon: 'spot' }
    }
  ]
}
