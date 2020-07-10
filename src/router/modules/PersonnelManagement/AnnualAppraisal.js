export default {
  path: '/annual-appraisal',
  component: () => import('@/views/personel-management/annual-appraisal/index'),
  name: 'BonusPenaltyManagement',
  meta: { title: '年度考核', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'first-trial',
      component: () => import('@/views/personel-management/annual-appraisal/first-trial/index'),
      name: 'FirstTrial',
      meta: { title: '年度考核初审', icon: 'spot' }
    },
    {
      path: 'second-trial',
      component: () => import('@/views/personel-management/annual-appraisal/second-trial/index'),
      name: 'SecondTrial',
      meta: { title: '年度考核复审', icon: 'spot' }
    },
    {
      path: 'summary-report',
      component: () => import('@/views/personel-management/annual-appraisal/summary-report/index'),
      name: 'SummaryReport',
      meta: { title: '年度考核汇总申报', icon: 'spot' }
    },
    {
      path: 'for-the-record',
      component: () => import('@/views/personel-management/annual-appraisal/for-the-record/index'),
      name: 'ForTheRecord',
      meta: { title: '年度考核备案', icon: 'spot' }
    },
    {
      path: 'search',
      component: () => import('@/views/personel-management/annual-appraisal/search/index'),
      name: 'Search',
      meta: { title: '年度考核查询', icon: 'spot' }
    },
    {
      path: 'summary-search',
      component: () => import('@/views/personel-management/annual-appraisal/summary-search/index'),
      name: 'SummarySearch',
      meta: { title: '年度考核汇总查询', icon: 'spot' }
    }
  ]
}
