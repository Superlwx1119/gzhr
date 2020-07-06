export default {
  path: '/hospitalBed-info-management',
  name: 'hospitalBedInfoManagement',
  component: () => import('@/views/fixed-point-protocol-management/hospital-bed-info-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '病床信息管理', icon: '' },
  children: [
    {
      path: 'hospitalBed-info-query',
      component: () => import('@/views/fixed-point-protocol-management/hospital-bed-info-management/hospital-bed-info-query/index'),
      name: 'hospitalBedInfoQuery',
      meta: { title: '病床信息查询', icon: 'spot' }
    }
  ]
}
