export default {
  path: '/institutional-list-match-sync-management',
  name: 'institutionalListMatchSyncManagement',
  component: () => import('@/views/fixed-point-protocol-management/institutional-list-match-sync-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点医药机构目录匹配同步审核', icon: '' },
  children: [
    {
      path: 'institutional-list-match-sync-review',
      component: () => import('@/views/fixed-point-protocol-management/institutional-list-match-sync-management/list-match-sync-review/index'),
      name: 'listMatchSyncReview',
      meta: { title: '定点医药机构目录匹配同步审核', icon: 'spot' }
    },
    {
      path: 'institutional-list-match-query',
      component: () => import('@/views/fixed-point-protocol-management/institutional-list-match-sync-management/list-match-sync-query/index'),
      name: 'listMatchSyncQuery',
      meta: { title: '定点医药机构目录匹配同步查询', icon: 'spot' }
    }
  ]
}
