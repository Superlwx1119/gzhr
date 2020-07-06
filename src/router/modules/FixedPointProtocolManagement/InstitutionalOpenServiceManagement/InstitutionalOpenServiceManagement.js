export default {
  path: '/institutional-open-service-management',
  component: () => import('@/views/fixed-point-protocol-management/institutional-open-service-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点医药机构开通服务管理', icon: '' },
  children: [
    {
      path: '/institutional-open-service-maintenance',
      component: () => import('@/views/fixed-point-protocol-management/institutional-open-service-management/open-service-maintenance/index'),
      name: 'openServiceMaintenance',
      meta: { title: '定点医药机构开通服务维护', icon: 'spot' }
    },
    {
      path: '/institutional-open-service-review',
      component: () => import('@/views/fixed-point-protocol-management/institutional-open-service-management/open-service-review/index'),
      name: 'openServiceReview',
      meta: { title: '定点医药机构开通服务审核', icon: 'spot' }
    },
    {
      path: '/institutional-open-service-query',
      component: () => import('@/views/fixed-point-protocol-management/institutional-open-service-management/open-service-query/index'),
      name: 'openServiceQuery',
      meta: { title: '定点医药机构开通服务查询', icon: 'spot' }
    }
  ]
}
