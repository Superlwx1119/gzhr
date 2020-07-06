export default {
  path: '/AccountMaintenance',
  component: () => import('@/views/PregnancyAllowanceManagement/AccountMaintenance'),
  name: '',
  meta: { title: '身孕津贴核发账户维护', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'ChildPages',
      component: () => import('@/views/PregnancyAllowanceManagement/AccountMaintenance/ChildPages/index'),
      name: 'ChildPages',
      meta: { title: '身孕津贴核发账户维护', icon: 'spot' }
    },
    {
      path: 'Accountaudit',
      component: () => import('@/views/PregnancyAllowanceManagement/AccountMaintenance/Accountaudit/index'),
      name: 'Accountaudit',
      meta: { title: '身孕津贴核发账户审核', icon: 'spot' }
    },
    {
      path: 'Accountquery',
      component: () => import('@/views/PregnancyAllowanceManagement/AccountMaintenance/Accountquery/index'),
      name: 'Accountquery',
      meta: { title: '身孕津贴核发账户查询', icon: 'spot' }
    }
  ]
}
