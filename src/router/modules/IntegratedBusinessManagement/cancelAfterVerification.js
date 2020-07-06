export default {
  path: '/cancel-after-verification',
  component: () => import('@/views/Integrated-business-management/cancel-after-verification/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '城乡居民医保征缴信息核销', icon: '' },
  children: [
    {
      path: 'message-search',
      component: () => import('@/views/Integrated-business-management/cancel-after-verification/message-search/index'),
      name: 'messageSearch',
      meta: { title: '个人征缴信息核销/作废查询', icon: 'spot' }
    },
    {
      path: 'midway-monthly-search',
      component: () => import('@/views/Integrated-business-management/cancel-after-verification/midway-monthly-search/index'),
      name: 'midwayMonthlySearch',
      meta: { title: '中途参保月度核销查询', icon: 'spot' }
    },
    {
      path: 'personal-message-verification',
      component: () => import('@/views/Integrated-business-management/cancel-after-verification/personal-message-verification/index'),
      name: 'personalMessageVerification',
      meta: { title: '个人征缴信息核销', icon: 'spot' }
    },
    {
      path: 'personal-message-invalid',
      component: () => import('@/views/Integrated-business-management/cancel-after-verification/personal-message-invalid/index'),
      name: 'personalMessageInvalid',
      meta: { title: '个人征缴信息作废', icon: 'spot' }
    },
    {
      path: 'midway-monthly',
      component: () => import('@/views/Integrated-business-management/cancel-after-verification/midway-monthly/index'),
      name: 'midwayMonthly',
      meta: { title: '中途参保月度核销', icon: 'spot' }
    }
  ]
}
