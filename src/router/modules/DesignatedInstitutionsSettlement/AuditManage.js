export default {
  path: '/audit-manage',
  component: () => import('@/views/designated-institutions-settlement/audit-manage/index'),
  name: 'auditManage',
  meta: { title: '审核管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'detail-deduct',
      component: () => import('@/views/designated-institutions-settlement/audit-manage/detail-deduct/index'),
      name: 'DetailDeduct',
      meta: { title: '明细审核扣费', icon: 'spot' }
    },
    {
      path: 'detail-deduct-audit',
      component: () => import('@/views/designated-institutions-settlement/audit-manage/detail-deduct-audit/index'),
      name: 'DetailDeductAudit',
      meta: { title: '明细审核扣费审核', icon: 'spot' }
    },
    {
      path: 'business-audit',
      component: () => import('@/views/designated-institutions-settlement/audit-manage/business-audit/index'),
      name: 'businessAudit',
      meta: { title: '业务审核', icon: 'spot' }
    },
    {
      path: 'business-sign',
      component: () => import('@/views/designated-institutions-settlement/audit-manage/business-sign/index'),
      name: 'businessSign',
      meta: { title: '业务审签', icon: 'spot' }
    },
    {
      path: 'reduce-reason',
      component: () => import('@/views/designated-institutions-settlement/audit-manage/reduce-reason/index'),
      name: 'reduceReason',
      meta: { title: '减扣原因维护', icon: 'spot' }
    },
    {
      path: 'audit-result',
      component: () => import('@/views/designated-institutions-settlement/audit-manage/audit-result/index'),
      name: 'auditResult',
      meta: { title: '审核结果查询', icon: 'spot' }
    }
  ]
}
