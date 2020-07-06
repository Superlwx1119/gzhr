export default {
  path: '/medical-funds',
  component: () => import('@/views/Integrated-business-management/medical-funds/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '城乡居民大病医疗保险医疗资金', icon: '' },
  children: [
    {
      path: 'import-module',
      component: () => import('@/views/Integrated-business-management/medical-funds/import-module/index'),
      name: 'importModule',
      meta: { title: '城乡大病资金拨付表导入模块', icon: 'spot' }
    },
    {
      path: 'appropriation-review',
      component: () => import('@/views/Integrated-business-management/medical-funds/appropriation-review/index'),
      name: 'appropriationReview',
      meta: { title: '城乡大病资金拨付复核', icon: 'spot' }
    },
    {
      path: 'appropriation-signature',
      component: () => import('@/views/Integrated-business-management/medical-funds/appropriation-signature/index'),
      name: 'appropriationSignature',
      meta: { title: '城乡大病资金拨付审签', icon: 'spot' }
    },
    {
      path: 'status-query-and-statistics',
      component: () => import('@/views/Integrated-business-management/medical-funds/status-query-and-statistics/index'),
      name: 'appropriationQueryAndStatistics',
      meta: { title: '城乡大病资金拨付表状态查询及统计', icon: 'spot' }
    }
  ]
}
