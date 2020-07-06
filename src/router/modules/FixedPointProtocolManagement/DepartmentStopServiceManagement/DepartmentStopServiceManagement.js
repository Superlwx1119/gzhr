export default {
  path: '/department-stop-service-management',
  name: 'departmentStopServiceManagement',
  component: () => import('@/views/fixed-point-protocol-management/department-stop-service-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '科室停止服务管理', icon: '' },
  children: [
    {
      path: 'department-stop-service-review',
      component: () => import('@/views/fixed-point-protocol-management/department-stop-service-management/department-stop-service-review/index'),
      name: 'departmentStopServiceReview',
      meta: { title: '定点医药机构科室停止服务审核', icon: 'spot' }
    },
    {
      path: 'department-stop-service-query',
      component: () => import('@/views/fixed-point-protocol-management/department-stop-service-management/department-stop-service-maintenance/index'),
      name: 'departmentStopServiceQuery',
      meta: { title: '定点医药机构科室停止服务维护', icon: 'spot' }
    }
  ]
}
