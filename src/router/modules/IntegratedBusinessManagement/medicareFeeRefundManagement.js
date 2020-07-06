// 医保费退款管理
export default {
  path: '/medicare-fee-fefund-management',
  component: () => import('@/views/Integrated-business-management/medicare-fee-fefund-management/index'),
  redirect: '/medicare-fee-fefund-management/trial',
  alwaysShow: true,
  meta: { title: '医保费退款管理', icon: '' },
  children: [
    {
      path: 'trial',
      component: () => import('@/views/Integrated-business-management/medicare-fee-fefund-management/trial/index'),
      name: 'trial',
      meta: { title: '退费初审', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/Integrated-business-management/medicare-fee-fefund-management/review/index'),
      name: 'review',
      meta: { title: '退费复审', icon: 'spot' }
    },
    {
      path: 'summary',
      component: () => import('@/views/Integrated-business-management/medicare-fee-fefund-management/summary/index'),
      name: 'summary',
      meta: { title: '退费汇总', icon: 'spot' }
    }

  ]
}
