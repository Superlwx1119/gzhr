
export default {
  path: '/authorization-management',
  component: () => import('@/views/personal-account-management/authorization-management'),
  name: 'personalAccountAuthorizationManagement',
  meta: { title: '账户共济授权管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'view',
      component: () => import('@/views/personal-account-management/authorization-management/view'),
      name: 'personalAccountAuthorizationManagementView',
      meta: { title: '账户共济授权', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/personal-account-management/authorization-management/review'),
      name: 'personalAccountAuthorizationManagementReview',
      meta: { title: '账户共济授权审核', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-account-management/authorization-management/query'),
      name: 'personalAccountAuthorizationManagementQuery',
      meta: { title: '账户共济授权查询', icon: 'spot' }
    }
  ]
}
