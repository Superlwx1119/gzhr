export default {
  path: '/cost-adjust',
  component: () => import('@/views/designated-institutions-settlement/cost-adjust/index'),
  name: 'CostAdjust',
  meta: { title: '年中费用调整', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'adjust-cost',
      component: () => import('@/views/designated-institutions-settlement/cost-adjust/adjust-cost/index'),
      name: 'AdjustCost',
      meta: { title: '调整费用', icon: '' }
    },
    {
      path: 'cost-adjust-audit',
      component: () => import('@/views/designated-institutions-settlement/cost-adjust/cost-adjust-audit/index'),
      name: 'CostAdjustAudit',
      meta: { title: '年中费用调整审核', icon: '' }
    }
  ]
}
