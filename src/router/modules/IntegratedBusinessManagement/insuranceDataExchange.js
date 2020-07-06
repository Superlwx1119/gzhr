export default {
  path: '/insurance-data-exchange',
  component: () => import('@/views/Integrated-business-management/insurance-data-exchange/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '城乡居民医保资助参保数据交换表', icon: '' },
  children: [
    {
      path: 'data-exchange',
      component: () => import('@/views/Integrated-business-management/insurance-data-exchange/data-exchange/index'),
      name: 'insuranceDataExchange',
      meta: { title: '城乡居医保资助参保数据交接表', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/Integrated-business-management/insurance-data-exchange/review/index'),
      name: 'insuranceDataExchangeReview',
      meta: { title: '资助参保人员数据交接表审签', icon: 'spot' }
    },
    {
      path: 'receive',
      component: () => import('@/views/Integrated-business-management/insurance-data-exchange/receive/index'),
      name: 'insuranceDataExchangeReceive',
      meta: { title: '医救审核确认结果接收', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/Integrated-business-management/insurance-data-exchange/query/index'),
      name: 'insuranceDataExchangeQuery',
      meta: { title: '报表状态查询', icon: 'spot' }
    }
  ]
}
