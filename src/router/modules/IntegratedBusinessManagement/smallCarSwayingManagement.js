// 小客车摇号管理
export default {
  path: '/small-car-swaying-management',
  component: () => import('@/views/Integrated-business-management/small-car-swaying-management/index'),
  redirect: '/small-car-swaying-management/review',
  alwaysShow: true,
  meta: { title: '小客车摇号管理', icon: '' },
  children: [
    {
      path: 'review',
      component: () => import('@/views/Integrated-business-management/small-car-swaying-management/review/index'),
      name: 'review',
      meta: { title: '小客车摇号指标审核', icon: 'spot' }
    },
    {
      path: 'to-review',
      component: () => import('@/views/Integrated-business-management/small-car-swaying-management/to-review/index'),
      name: 'toReview',
      meta: { title: '小客车摇号指标复核', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/Integrated-business-management/small-car-swaying-management/query/index'),
      name: 'query',
      meta: { title: '小客车摇号指标查询', icon: 'spot' }
    },
    {
      path: 'read',
      component: () => import('@/views/Integrated-business-management/small-car-swaying-management/read/index'),
      name: 'read',
      meta: { title: '小客车摇号特殊批次读取', icon: 'spot' }
    }
  ]
}
