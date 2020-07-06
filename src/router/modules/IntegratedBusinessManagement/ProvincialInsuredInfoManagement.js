export default {
  path: '/provincial-insured-info-management',
  component: () => import('@/views/Integrated-business-management/provincial-insured-info-management/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '省属参保人信息管理', icon: '' },
  children: [
    {
      path: 'increase-decrease-offer',
      component: () => import('@/views/Integrated-business-management/provincial-insured-info-management/increase-decrease-offer/index'),
      name: 'IncreaseDecreaseOffer',
      meta: { title: '省属退休增员及死亡减员报盘', icon: 'spot' }
    },
    {
      path: 'increase-decrease-result-query',
      component: () => import('@/views/Integrated-business-management/provincial-insured-info-management/increase-decrease-result-query/index'),
      name: 'IncreaseDecreaseResultQuery',
      meta: { title: '省属退休增员及死亡减员处理结果查询', icon: 'spot' }
    }
  ]
}
