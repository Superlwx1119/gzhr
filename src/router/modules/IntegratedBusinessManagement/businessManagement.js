export default {
  path: '/business-management',
  component: () => import('@/views/Integrated-business-management/business-management/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '城乡居民医保征缴业务管理', icon: '' },
  children: [
    {
      path: 'tax-interaction',
      component: () => import('@/views/Integrated-business-management/business-management/tax-interaction/index'),
      name: 'taxInteraction',
      meta: { title: '手动触发与税务交互', icon: 'spot' }
    },
    {
      path: 'result-query',
      component: () => import('@/views/Integrated-business-management/business-management/result-query/index'),
      name: 'resultQuery',
      meta: { title: '数据发送结果查询', icon: 'spot' }
    },
    // {
    //   path: 'maintenance-policy',
    //   component: () => import('@/views/Integrated-business-management/business-management/maintenance-policy/index'),
    //   name: 'maintenancePolicy',
    //   meta: { title: '维护政策', icon: 'spot' }
    // },
    {
      path: 'change-query',
      component: () => import('@/views/Integrated-business-management/business-management/change-query/index'),
      name: 'changeQuery',
      meta: { title: '征缴扣费方式变更查询', icon: 'spot' }
    },
    {
      path: 'change-management',
      component: () => import('@/views/Integrated-business-management/business-management/change-management/index'),
      name: 'changeManagement',
      meta: { title: '征缴扣费方式变更管理', icon: 'spot' }
    }
  ]
}
