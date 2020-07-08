export default {
  path: '/bonus-penalty-management',
  component: () => import('@/views/personel-management/bonus-penalty-management/index'),
  name: 'BonusPenaltyManagement',
  meta: { title: '奖惩管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'reward-management',
      component: () => import('@/views/personel-management/bonus-penalty-management/reward-management/index'),
      name: 'RewardManagement',
      meta: { title: '奖励管理', icon: 'spot' }
    },
    {
      path: 'dispose-management',
      component: () => import('@/views/personel-management/bonus-penalty-management/dispose-management/index'),
      name: 'DisposeManagement',
      meta: { title: '处分管理', icon: 'spot' }
    },
    {
      path: 'dispose-penalty-management',
      component: () => import('@/views/personel-management/bonus-penalty-management/dispose-penalty-management/index'),
      name: 'DisposePenaltyManagement',
      meta: { title: '处分期满管理', icon: 'spot' }
    }
  ]
}
