
export default {
  path: '/annual-carry-forward',
  component: () => import('@/views/personal-account-management/annual-carry-forward'),
  name: 'personalAccountAnnualCarryForward',
  meta: { title: '个人账户年度结转(虚)', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'view',
      component: () => import('@/views/personal-account-management/annual-carry-forward/view'),
      name: 'personalAccountAnnualCarryForwardView',
      meta: { title: '个人账户年度结转', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/personal-account-management/annual-carry-forward/review'),
      name: 'personalAccountAnnualCarryForwardReview',
      meta: { title: '个人账户年度结转审核', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-account-management/annual-carry-forward/query'),
      name: 'personalAccountAnnualCarryForwardQuery',
      meta: { title: '个人账户年度结转查询', icon: 'spot' }
    }
  ]
}
