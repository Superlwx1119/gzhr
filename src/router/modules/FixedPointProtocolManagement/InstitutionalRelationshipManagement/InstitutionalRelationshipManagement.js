export default {
  path: '/institutional-relationship-management',
  name: 'institutionalRelationshipManagement',
  component: () => import('@/views/fixed-point-protocol-management/institutional-relationship-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点医药机构关系管理', icon: '' },
  children: [
    {
      path: '/institutional-relationship-maintenance',
      component: () => import('@/views/fixed-point-protocol-management/institutional-relationship-management/relationship-maintenance/index'),
      name: 'relationshipMaintenance',
      meta: { title: '定点医药机构关系维护', icon: 'spot' }
    },
    {
      path: '/institutional-relationship-review',
      component: () => import('@/views/fixed-point-protocol-management/institutional-relationship-management/relationship-review/index'),
      name: 'relationshipReview',
      meta: { title: '定点医药机构关系审核', icon: 'spot' }
    },
    {
      path: '/institutional-relationship-query',
      component: () => import('@/views/fixed-point-protocol-management/institutional-relationship-management/relationship-query/index'),
      name: 'relationshipQuery',
      meta: { title: '定点医药机构关系查询', icon: 'spot' }
    }
  ]
}
