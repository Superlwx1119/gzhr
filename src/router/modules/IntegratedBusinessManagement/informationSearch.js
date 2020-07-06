export default {
  path: '/information-search',
  component: () => import('@/views/Integrated-business-management/information-search/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '城乡居民医保信息查询', icon: '' },
  children: [
    {
      path: 'personal-check-ratify',
      component: () => import('@/views/Integrated-business-management/information-search/personal-check-ratify/index'),
      name: 'personalCheckRatify',
      meta: { title: '城乡居民医保个人征缴核定单', icon: 'spot' }
    },
    {
      path: 'unit-check-ratify',
      component: () => import('@/views/Integrated-business-management/information-search/unit-check-ratify/index'),
      name: 'unitCheckRatify',
      meta: { title: '城乡居民医保单位征缴核定单', icon: 'spot' }
    },
    {
      path: 'deduction-information-search',
      component: () => import('@/views/Integrated-business-management/information-search/deduction-information-search/index'),
      name: 'deductionMessageSearch',
      meta: { title: '城乡居民医保扣费信息查询', icon: 'spot' }
    },
    {
      path: 'not-to-account-personnel',
      component: () => import('@/views/Integrated-business-management/information-search/not-to-account-personnel/index'),
      name: 'notToAccountPersonnel',
      meta: { title: '城乡居民医保未到账人员信息', icon: 'spot' }
    },
    {
      path: 'types-of-insurance-gather',
      component: () => import('@/views/Integrated-business-management/information-search/types-of-insurance-gather/index'),
      name: 'midwayMonthly',
      meta: { title: '险种状态汇总查询', icon: 'spot' }
    }
  ]
}
