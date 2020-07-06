export default {
  path: '/audit-deduct-manage',
  component: () => import('@/views/designated-institutions-settlement/audit-deduct-manage/index'),
  name: 'AuditDeductManage',
  meta: { title: '稽核审查扣款管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'detail-deduct',
      component: () => import('@/views/designated-institutions-settlement/audit-deduct-manage/review-deduct/index'),
      name: 'ReviewDeduct',
      meta: { title: '稽核审查扣费', icon: 'spot' }
    },
    {
      path: 'detail-deduct-audit',
      component: () => import('@/views/designated-institutions-settlement/audit-deduct-manage/review-deduct-audit/index'),
      name: 'ReviewDeductAudit',
      meta: { title: '稽核审查扣费审核', icon: 'spot' }
    }
  ]
}
