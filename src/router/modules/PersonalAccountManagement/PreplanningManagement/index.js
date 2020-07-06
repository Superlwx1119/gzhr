export default {
  path: '/preplanning-management',
  component: () => import('@/views/personal-account-management/preplanning-management'),
  name: 'personalAccountPreplanningManagement',
  meta: { title: '个人账户预划管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'preplaning',
      component: () => import('@/views/personal-account-management/preplanning-management/preplaning'),
      name: 'personalAccountPreplaning',
      meta: { title: '个人账户预划', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/personal-account-management/preplanning-management/review'),
      name: 'personalAccountPreplaningReview',
      meta: { title: '个人账户预划审核', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-account-management/preplanning-management/query'),
      name: 'personalAccountPreplaningQuery',
      meta: { title: '个人账户预划查询', icon: 'spot' }
    }
  ]
}
