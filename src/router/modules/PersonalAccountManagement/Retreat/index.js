
export default {
  path: '/retreat',
  component: () => import('@/views/personal-account-management/retreat'),
  name: 'personalAccountRetreat',
  meta: { title: '个人账户清退', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'view',
      component: () => import('@/views/personal-account-management/retreat/view'),
      name: 'personalAccountRetreatView',
      meta: { title: '个人账户清退', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/personal-account-management/retreat/review'),
      name: 'personalAccountRetreatReview',
      meta: { title: '个人账户清退审核', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-account-management/retreat/query'),
      name: 'personalAccountRetreatQuery',
      meta: { title: '个人账户清退查询', icon: 'spot' }
    }
  ]
}
