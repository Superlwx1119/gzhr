export default {
  path: '/assistance-management',
  component: () => import('@/views/Integrated-business-management/assistance-management/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '城乡政府资助金管理', icon: '' },
  children: [
    {
      path: 'exchange-summary',
      component: () => import('@/views/Integrated-business-management/assistance-management/exchange-summary/index'),
      name: 'assistanceManagementExchangeSummary',
      meta: { title: '城乡居民医疗保险应收政府资助金交接汇总表', icon: 'spot' }
    },
    {
      path: 'clear-summary',
      component: () => import('@/views/Integrated-business-management/assistance-management/clear-summary/index'),
      name: 'assistanceManagementClearSummary',
      meta: { title: '城乡居民医疗保险应收政府资助金清算汇总表', icon: 'spot' }
    },
    {
      path: 'refund-summary',
      component: () => import('@/views/Integrated-business-management/assistance-management/refund-summary/index'),
      name: 'assistanceManagementRefundSummary',
      meta: { title: '城乡居民医疗保险退款交接汇总表', icon: 'spot' }
    },
    {
      path: 'center-detail',
      component: () => import('@/views/Integrated-business-management/assistance-management/center-detail/index'),
      name: 'assistanceManagementCenterDetail',
      meta: { title: '城乡居民医疗保险中央财政补助资金明细表', icon: 'spot' }
    },
    {
      path: 'province-detail',
      component: () => import('@/views/Integrated-business-management/assistance-management/province-detail/index'),
      name: 'assistanceManagementProvinceDetail',
      meta: { title: '城乡居民医疗保险省级财政补助资金明细表', icon: 'spot' }
    },
    {
      path: 'clear-summary-review',
      component: () => import('@/views/Integrated-business-management/assistance-management/clear-summary-review/index'),
      name: 'assistanceManagementClearSummaryReview',
      meta: { title: '城乡居民医疗保险应收政府资助金清算汇总表审签', icon: 'spot' }
    },
    {
      path: 'center-detail-review',
      component: () => import('@/views/Integrated-business-management/assistance-management/center-detail-review/index'),
      name: 'assistanceManagementCenterDetailReview',
      meta: { title: '城乡居民医疗保险中央财政补助资金明细表审签', icon: 'spot' }
    },
    {
      path: 'province-detail-review',
      component: () => import('@/views/Integrated-business-management/assistance-management/province-detail-review/index'),
      name: 'assistanceManagementProvinceDetailReview',
      meta: { title: '城乡居民医疗保险省级财政补助资金明细表审签', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/Integrated-business-management/assistance-management/query/index'),
      name: 'assistanceManagementStatusQuery',
      meta: { title: '报表状态查询', icon: 'spot' }
    }
  ]
}
