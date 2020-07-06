export default {
  path: '/settlement-interest',
  component: () => import('@/views/personal-account-management/settlement-interest'),
  name: 'personalAccountSettlementInterest',
  meta: { title: '个人账户结息', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'view',
      component: () => import('@/views/personal-account-management/settlement-interest/view'),
      name: 'personalAccountSettlementInterestView',
      meta: { title: '个人账户结息', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-account-management/settlement-interest/query'),
      name: 'personalAccountSettlementInterestQuery',
      meta: { title: '个人账户结息查询', icon: 'spot' }
    }
  ]
}
