export default {
  path: '/index-adjust',
  component: () => import('@/views/designated-institutions-settlement/index-adjust/index'),
  name: 'IndexAdjust',
  meta: { title: '年中调整指标', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'adjust-index',
      component: () => import('@/views/designated-institutions-settlement/index-adjust/adjust-index/index'),
      name: 'AdjustIndex',
      meta: { title: '调整指标', icon: '' }
    },
    {
      path: 'adjust-index-audit',
      component: () => import('@/views/designated-institutions-settlement/index-adjust/adjust-index-audit/index'),
      name: 'AdjustIndexAudit',
      meta: { title: '年中指标调整审核', icon: '' }
    }
  ]
}
