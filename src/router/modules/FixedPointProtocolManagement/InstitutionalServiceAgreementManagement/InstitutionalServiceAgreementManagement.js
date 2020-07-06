export default {
  path: '/institutional-service-agreement-management',
  component: () => import('@/views/fixed-point-protocol-management/institutional-service-agreement-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点医药机构服务协议管理', icon: '' },
  children: [
    {
      path: '/service-agreement-maintenance',
      component: () => import('@/views/fixed-point-protocol-management/institutional-service-agreement-management/service-agreement-maintenance/index'),
      name: 'serviceAgreementMaintenance',
      meta: { title: '定点医药机构服务协议维护', icon: 'spot' }
    },
    {
      path: '/service-agreement-review',
      component: () => import('@/views/fixed-point-protocol-management/institutional-service-agreement-management/service-agreement-review/index'),
      name: 'serviceAgreementReview',
      meta: { title: '定点医药机构服务协议审核', icon: 'spot' }
    },
    {
      path: '/service-agreement-query',
      component: () => import('@/views/fixed-point-protocol-management/institutional-service-agreement-management/service-agreement-query/index'),
      name: 'serviceAgreementQuery',
      meta: { title: '定点医药机构服务协议查询', icon: 'spot' }
    }
  ]
}
