export default {
  path: '/pharmacy-expert-query',
  component: () => import('@/views/fixed-point-protocol-management/pharmacy-expert-query'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '药学专家查询', icon: '' },
  children: [
    {
      path: '/pharmacy-expert-query',
      component: () => import('@/views/fixed-point-protocol-management/pharmacy-expert-query/pharmacy-expert-query/index'),
      name: 'pharmacyExpertQuery',
      meta: { title: '药学专家查询', icon: 'spot' }
    }
  ]
}
