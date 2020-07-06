export default {
  path: '/institutional-list-match-lock-management',
  name: 'institutionalListMatchLockManagement',
  component: () => import('@/views/fixed-point-protocol-management/institutional-list-match-lock-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点医药机构目录匹配锁定管理', icon: '' },
  children: [
    {
      path: 'institutional-list-match-lock-review',
      component: () => import('@/views/fixed-point-protocol-management/institutional-list-match-lock-management/list-match-lock-review/index'),
      name: 'listMatchLockReview',
      meta: { title: '定点医药机构目录匹配锁定审核', icon: 'spot' }
    },
    {
      path: 'institutional-list-match-lock-unlock',
      component: () => import('@/views/fixed-point-protocol-management/institutional-list-match-lock-management/list-match-lock-unlock/index'),
      name: 'listMatchLockUnlock',
      meta: { title: '定点医药机构目录匹配锁定与取消锁定', icon: 'spot' }
    }
  ]
}
