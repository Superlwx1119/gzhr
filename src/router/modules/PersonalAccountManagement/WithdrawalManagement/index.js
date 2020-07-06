
export default {
  path: '/withdrawal-management',
  component: () => import('@/views/personal-account-management/withdrawal-management'),
  name: 'personalAccountWithdrawalManagement',
  meta: { title: '个人账户提现管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'application',
      component: () => import('@/views/personal-account-management/withdrawal-management/application'),
      name: 'personalAccountWithdrawalManagementApplication',
      meta: { title: '个人账户提现申请', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/personal-account-management/withdrawal-management/review'),
      name: 'personalAccountWithdrawalManagementReview',
      meta: { title: '个人账户提现审核', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-account-management/withdrawal-management/query'),
      name: 'personalAccountWithdrawalManagementQuery',
      meta: { title: '个人账户提现查询', icon: 'spot' }
    }
  ]
}
