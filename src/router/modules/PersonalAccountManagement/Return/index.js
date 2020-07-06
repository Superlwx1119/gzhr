export default {
  path: '/return',
  component: () => import('@/views/personal-account-management/return'),
  name: 'personalAccountReturn',
  meta: { title: '个人账户返还', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'return',
      component: () => import('@/views/personal-account-management/return/return'),
      name: 'personalAccountReturnIndex',
      meta: { title: '个人账户返还', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/personal-account-management/return/review'),
      name: 'personalAccountReturnReview',
      meta: { title: '个人账户返还审核', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-account-management/return/query'),
      name: 'personalAccountReturnQuery',
      meta: { title: '个人账户返还查询', icon: 'spot' }
    }
  ]
}
