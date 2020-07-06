export default {
  path: '/insured-management',
  component: () => import('@/views/Integrated-business-management/insured-management/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '城乡居民医保参保管理', icon: '' },
  children: [
    {
      path: 'payment-confirmation',
      component: () => import('@/views/Integrated-business-management/insured-management/payment-confirmation/index'),
      name: 'paymentConfirmation',
      meta: { title: '在校学生缴费确认', icon: 'spot' }
    },
    {
      path: 'payment-search-sendBack',
      component: () => import('@/views/Integrated-business-management/insured-management/payment-search-sendBack/index'),
      name: 'paymentSearchSendBack',
      meta: { title: '在校学校缴费信息确认查询与退回', icon: 'spot' }
    },
    {
      path: 'payment-batch-confirmation',
      component: () => import('@/views/Integrated-business-management/insured-management/payment-batch-confirmation/index'),
      name: 'paymentBatchConfirmation',
      meta: { title: '在校学生缴费批量确认', icon: 'spot' }
    },
    {
      path: 'registration-of-persons',
      component: () => import('@/views/Integrated-business-management/insured-management/registration-of-persons/index'),
      name: 'registrationOfPersons ',
      meta: { title: '困难人员批量参保登记', icon: 'spot' }
    },
    {
      path: 'registration-review',
      component: () => import('@/views/Integrated-business-management/insured-management/registration-review/index'),
      name: 'midwayMonthly',
      meta: { title: '分中心/街道(镇)参保登记复核', icon: 'spot' }
    }
  ]
}
