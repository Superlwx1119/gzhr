export default {
  path: '/card-service',
  component: () => import('@/views/Integrated-business-management/card-service/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '社保卡服务', icon: '' },
  children: [
    {
      path: 'main-card-select',
      component: () => import('@/views/Integrated-business-management/card-service/main-card-select/index'),
      name: 'mainCardSelect',
      meta: { title: '主副卡选择', icon: 'spot' }
    },
    {
      path: 'bank-card',
      component: () => import('@/views/Integrated-business-management/card-service/bank-card/index'),
      name: 'bankCard',
      meta: { title: '银行新制卡数据查询', icon: 'spot' }
    },
    {
      path: 'card-cancellation',
      component: () => import('@/views/Integrated-business-management/card-service/card-cancellation/index'),
      name: 'cardCancellation',
      meta: { title: '卡证注销', icon: 'spot' }
    },
    {
      path: 'card-certificate',
      component: () => import('@/views/Integrated-business-management/card-service/card-certificate/index'),
      name: 'cardCertificate',
      meta: { title: '卡证注销回退', icon: 'spot' }
    },
    {
      path: 'card-qurey',
      component: () => import('@/views/Integrated-business-management/card-service/card-qurey/index'),
      name: 'cardQurey',
      meta: { title: '银行卡新制社保卡查询及导出', icon: 'spot' }
    }
  ]
}
