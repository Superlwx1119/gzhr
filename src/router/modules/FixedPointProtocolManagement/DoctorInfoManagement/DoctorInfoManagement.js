export default {
  path: '/doctor-info-management',
  name: 'doctorInfoManagement',
  component: () => import('@/views/fixed-point-protocol-management/doctor-info-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '医师信息管理', icon: '' },
  children: [
    {
      path: 'doctor-info-query',
      component: () => import('@/views/fixed-point-protocol-management/doctor-info-management/doctor-info-query/index'),
      name: 'doctorInfoQuery',
      meta: { title: '医师信息查询', icon: 'spot' }
    }
  ]
}
