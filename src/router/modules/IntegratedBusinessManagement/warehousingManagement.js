// 入库管理
export default {
  path: '/warehousing-management',
  component: () => import('@/views/Integrated-business-management/warehousing-management/index'),
  redirect: '/warehousing-management/apply',
  alwaysShow: true,
  meta: { title: '入库管理', icon: '' },
  children: [
    {
      path: 'apply',
      component: () => import('@/views/Integrated-business-management/warehousing-management/apply/index'),
      name: 'apply',
      meta: { title: '入库受理申请', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/Integrated-business-management/warehousing-management/review/index'),
      name: 'review',
      meta: { title: '入库复核', icon: 'spot' }
    },
    {
      path: 'signature',
      component: () => import('@/views/Integrated-business-management/warehousing-management/signature/index'),
      name: 'signature',
      meta: { title: '领导审签', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/Integrated-business-management/warehousing-management/query/index'),
      name: 'query',
      meta: { title: '入库查询', icon: 'spot' }
    },
    {
      path: 'cancel',
      component: () => import('@/views/Integrated-business-management/warehousing-management/cancel/index'),
      name: 'cancel',
      meta: { title: '入库取消', icon: 'spot' }
    },
    {
      path: 'change-query',
      component: () => import('@/views/Integrated-business-management/warehousing-management/change-query/index'),
      name: 'changeQuery',
      meta: { title: '入库条件变动查询', icon: 'spot' }
    }

  ]
}
