export default {
  path: '/list-center-maintenance',
  component: () => import('@/views/fixed-point-protocol-management/list-center-maintenance'),
  redirect: 'noRedirect',
  name: 'listCenterMaintenanceList',
  alwaysShow: true,
  meta: { title: '目录中心维护', icon: '' },
  children: [
    {
      path: '/list-center-maintenance',
      component: () => import('@/views/fixed-point-protocol-management/list-center-maintenance/list-center-maintenance/index'),
      name: 'listCenterMaintenance',
      meta: { title: '目录中心维护', icon: 'spot' }
    }
  ]
}
