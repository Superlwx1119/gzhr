export default {
  path: '/bulk-refund-management',
  component: () => import('@/views/Integrated-business-management/bulk-refund-management/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '城乡居民医保批量退款管理', icon: '' },
  children: [
    {
      path: 'import',
      component: () => import('@/views/Integrated-business-management/bulk-refund-management/import/index'),
      name: 'bulkRefundManagementImport',
      meta: { title: '退款名单导入', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/Integrated-business-management/bulk-refund-management/review/index'),
      name: 'bulkRefundManagementReview',
      meta: { title: '退款名单审核', icon: 'spot' }
    },
    {
      path: 'summary',
      component: () => import('@/views/Integrated-business-management/bulk-refund-management/summary/index'),
      name: 'bulkRefundManagementSummary',
      meta: { title: '退款审签汇总', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/Integrated-business-management/bulk-refund-management/query/index'),
      name: 'bulkRefundManagementQuery',
      meta: { title: '退费状态查询', icon: 'spot' }
    }
  ]
}
