export default {
  path: '/institutional-property-management',
  component: () => import('@/views/fixed-point-protocol-management/institutional-property-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点医药机构属性管理', icon: '' },
  children: [
    {
      path: '/institutional-property-maintenance',
      component: () => import('@/views/fixed-point-protocol-management/institutional-property-management/property-maintenance/index'),
      name: 'propertyMaintenance',
      meta: { title: '定点医药机构属性维护', icon: 'spot' }
    },
    {
      path: '/institutional-property-review',
      component: () => import('@/views/fixed-point-protocol-management/institutional-property-management/property-review/index'),
      name: 'propertyReview',
      meta: { title: '定点医药机构属性审核', icon: 'spot' }
    },
    {
      path: '/institutional-property-query',
      component: () => import('@/views/fixed-point-protocol-management/institutional-property-management/property-query/index'),
      name: 'propertyQuery',
      meta: { title: '定点医药机构属性查询', icon: 'spot' }
    }
  ]
}
