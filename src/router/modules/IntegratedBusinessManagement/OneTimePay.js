//  一次性缴核定事项管理
export default {
  path: '/one-time-pay',
  component: () => import(/* webpackChunkName: 'OneTimePay' */'@/views/Integrated-business-management/one-time-pay/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '一次性缴核定事项管理', icon: '' },
  children: [
    {
      path: 'one-time-pay-query',
      component: () => import(/* webpackChunkName: 'OneTimePay' */'@/views/Integrated-business-management/one-time-pay/one-time-pay-query/index'),
      name: 'oneTimePayQuery',
      meta: { title: '一次性缴核定查询', icon: 'spot' }
    },
    {
      path: 'one-time-pay-trial',
      component: () => import(/* webpackChunkName: 'OneTimePay' */'@/views/Integrated-business-management/one-time-pay/one-time-pay-trial/index'),
      name: 'oneTimePayTrial',
      meta: { title: '一次性缴核定受理初审', icon: 'spot' }
    },
    {
      path: 'one-time-pay-review',
      component: () => import(/* webpackChunkName: 'OneTimePay' */'@/views/Integrated-business-management/one-time-pay/one-time-pay-review/index'),
      name: 'oneTimePayReview',
      meta: { title: '一次性缴核定复审', icon: 'spot' }
    }
  ]
}
