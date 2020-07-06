export default {
  path: '/InformationQuery',
  component: () => import('@/views/PregnancyAllowanceManagement/InformationQuery'),
  name: '',
  meta: { title: '生育基本信息查询', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'Proofquery',
      component: () => import('@/views/PregnancyAllowanceManagement/InformationQuery/Proofquery/index'),
      name: 'Proofquery',
      meta: { title: '就医资格凭证查询', icon: 'spot' }
    },
    {
      path: 'Summaryinformation',
      component: () => import('@/views/PregnancyAllowanceManagement/InformationQuery/Summaryinformation/index'),
      name: 'Summaryinformation',
      meta: { title: '就医资格凭证汇总信息', icon: 'spot' }
    }

  ]
}
