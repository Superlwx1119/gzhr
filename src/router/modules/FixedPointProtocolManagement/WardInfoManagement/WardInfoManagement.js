export default {
  path: '/ward-info-management',
  name: 'wardInfoManagement',
  component: () => import('@/views/fixed-point-protocol-management/ward-info-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '病区信息管理', icon: '' },
  children: [
    {
      path: 'ward-info-query',
      component: () => import('@/views/fixed-point-protocol-management/ward-info-management/ward-info-query/index'),
      name: 'wardInfoQuery',
      meta: { title: '病区信息查询', icon: 'spot' }
    }
  ]
}
