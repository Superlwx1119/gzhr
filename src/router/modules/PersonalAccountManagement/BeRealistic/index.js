
export default {
  path: '/be-realistic',
  component: () => import('@/views/personal-account-management/be-realistic'),
  name: 'personalAccountBeRealistic',
  meta: { title: '个人账户做实(虚)', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'view',
      component: () => import('@/views/personal-account-management/be-realistic/view'),
      name: 'personalAccountBeRealisticView',
      meta: { title: '个人账户做实', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/personal-account-management/be-realistic/review'),
      name: 'personalAccountBeRealisticReview',
      meta: { title: '个人账户做实审核', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-account-management/be-realistic/query'),
      name: 'personalAccountBeRealisticQuery',
      meta: { title: '个人账户做实查询', icon: 'spot' }
    }
  ]
}
