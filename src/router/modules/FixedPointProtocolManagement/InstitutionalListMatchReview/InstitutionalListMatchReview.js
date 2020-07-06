export default {
  path: '/institutional-list-match-review',
  name: 'institutionalListMatchReview',
  component: () => import('@/views/fixed-point-protocol-management/institutional-list-match-review'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点医药机构目录匹配审核', icon: '' },
  children: [
    {
      path: 'institutional-list-match-review',
      component: () => import('@/views/fixed-point-protocol-management/institutional-list-match-review/list-match-review/index'),
      name: 'listMatchReview',
      meta: { title: '定点医药机构目录匹配审核', icon: 'spot' }
    },
    {
      path: 'institutional-list-match-query',
      component: () => import('@/views/fixed-point-protocol-management/institutional-list-match-review/list-match-query/index'),
      name: 'listMatchQuery',
      meta: { title: '定点医药机构目录匹配查询', icon: 'spot' }
    }
  ]
}
