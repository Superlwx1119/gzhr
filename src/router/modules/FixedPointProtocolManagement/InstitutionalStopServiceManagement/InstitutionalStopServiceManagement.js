export default {
  path: '/institutional-stop-service-management',
  name: 'institutionalStopServiceManagement',
  component: () => import('@/views/fixed-point-protocol-management/institutional-stop-service-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点医药机构停止服务管理', icon: '' },
  children: [
    {
      path: 'institutional-stop-service-maintenance',
      component: () => import('@/views/fixed-point-protocol-management/institutional-stop-service-management/stop-service-register/index'),
      name: 'institutionalStopServiceRegister',
      meta: { title: '定点医药机构停止服务登记', icon: 'spot' }
    },
    {
      path: 'institutional-stop-service-review',
      component: () => import('@/views/fixed-point-protocol-management/institutional-stop-service-management/stop-service-review/index'),
      name: 'institutionalStopServiceReview',
      meta: { title: '定点医药机构停止服务审核', icon: 'spot' }
    },
    {
      path: 'institutional-stop-service-query',
      component: () => import('@/views/fixed-point-protocol-management/institutional-stop-service-management/stop-service-query/index'),
      name: 'institutionalStopServiceQuery',
      meta: { title: '定点医药机构停止服务查询', icon: 'spot' }
    }
  ]
}
