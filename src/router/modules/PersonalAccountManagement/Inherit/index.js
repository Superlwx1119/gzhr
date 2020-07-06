export default {
  path: '/inherit',
  component: () => import('@/views/personal-account-management/inherit'),
  name: 'personalAccountInherit',
  meta: { title: '个人账户继承', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'inherit',
      component: () => import('@/views/personal-account-management/inherit/inherit'),
      name: 'personalAccountInheritIndex',
      meta: { title: '个人账户继承', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/personal-account-management/inherit/review'),
      name: 'personalAccountInheritReview',
      meta: { title: '个人账户继承审核', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-account-management/inherit/query'),
      name: 'personalAccountInheritQuery',
      meta: { title: '个人账户继承查询', icon: 'spot' }
    }
  ]
}
