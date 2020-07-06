export default {
  path: '/unemployed-monthly-treatment',
  component: () => import('@/views/Integrated-business-management/unemployed-monthly-treatment/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '失业代扣人员月度处理', icon: '' },
  children: [
    {
      path: 'payment-info-query',
      component: () => import('@/views/Integrated-business-management/unemployed-monthly-treatment/payment-info-query/index'),
      name: 'PaymentInfoQuery',
      meta: { title: '失业代扣月结暂未支付信息查询', icon: 'spot' }
    },
    {
      path: 'unemployment-treatment-check-query',
      component: () => import('@/views/Integrated-business-management/unemployed-monthly-treatment/unemployment-treatment-check-query/index'),
      name: 'UnemploymentTreatmentCheckQuery',
      meta: { title: '失业代扣人员待遇核查查询', icon: 'spot' }
    }
  ]
}
