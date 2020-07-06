
export default {
  path: '/withdrawal-account-management',
  component: () => import('@/views/personal-account-management/withdrawal-account-management'),
  name: 'personalAccountWithdrawalAccountManagement',
  meta: { title: '支取个人账户管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'acceptance',
      component: () => import('@/views/personal-account-management/withdrawal-account-management/acceptance'),
      name: 'personalAccountWithdrawalAccountManagementAcceptance',
      meta: { title: '支取个人账户资金受理', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/personal-account-management/withdrawal-account-management/review'),
      name: 'personalAccountWithdrawalAccountManagementReview',
      meta: { title: '支取个人账户资金审核', icon: 'spot' }
    },
    {
      path: 'result',
      component: () => import('@/views/personal-account-management/withdrawal-account-management/result'),
      name: 'personalAccountWithdrawalAccountManagementResult',
      meta: { title: '接收银行处理结果', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-account-management/withdrawal-account-management/query'),
      name: 'personalAccountWithdrawalAccountManagementQuery',
      meta: { title: '支取个人账户资金查询', icon: 'spot' }
    }
  ]
}
