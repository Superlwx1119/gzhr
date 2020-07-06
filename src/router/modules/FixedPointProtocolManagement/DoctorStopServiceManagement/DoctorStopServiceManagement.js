export default {
  path: '/doctor-stop-service-management',
  name: 'doctorStopServiceManagement',
  component: () => import('@/views/fixed-point-protocol-management/doctor-stop-service-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '医师停止服务管理', icon: '' },
  children: [
    {
      path: 'doctor-stop-service-query',
      component: () => import('@/views/fixed-point-protocol-management/doctor-stop-service-management/doctor-stop-service/index'),
      name: 'doctorStopService',
      meta: { title: '医师停止服务', icon: 'spot' }
    }
  ]
}
