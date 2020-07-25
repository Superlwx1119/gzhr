export default {
  path: '/recruiment-result-record',
  component: () => import('@/views/open-recruitment-management/recruiment-result-record/index'),
  name: 'RecruimentResult',
  meta: { title: '招聘结果备案', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'result-apply',
      component: () => import('@/views/open-recruitment-management/recruiment-result-record/result-apply/index'),
      name: 'ResultwApply',
      meta: { title: '结果申报', icon: 'spot' }
    },
    {
      path: 'result-record',
      component: () => import('@/views/open-recruitment-management/recruiment-result-record/result-record/index'),
      name: 'ResultRecord',
      meta: { title: '结果备案', icon: 'spot' }
    },
    {
      path: 'result-search',
      component: () => import('@/views/open-recruitment-management/recruiment-result-record/result-search/index'),
      name: 'ResultSearch',
      meta: { title: '结果查询', icon: 'spot' }
    }
  ]
}
