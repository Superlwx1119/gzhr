export default {
  path: '/verification-manage',
  component: () => import('@/views/designated-institutions-settlement/verification-manage/index'),
  name: 'VerificationManage',
  meta: { title: '对账管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'verification-search',
      component: () => import('@/views/designated-institutions-settlement/verification-manage/index'),
      name: 'VerificationSearch',
      meta: { title: '对账情况查询', icon: 'spot' }
    }
  ]
}
