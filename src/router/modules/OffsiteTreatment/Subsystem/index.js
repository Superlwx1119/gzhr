export default {
  path: '/subsystem',
  component: () => import('@/views/offsite-treatment/subsystem'),
  name: 'subsystem',
  meta: { title: '跨省异地', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'extraction',
      component: () => import('@/views/offsite-treatment/subsystem/extraction'),
      name: 'offsiteResultExtraction',
      meta: { title: '跨省就医结算费用清分结果提取(参保地)', icon: 'spot' }
    },
    {
      path: 'situation-query',
      component: () => import('@/views/offsite-treatment/subsystem/situation-query'),
      name: 'offsiteSituationQuery',
      meta: { title: '跨省就医结算费用审核扣减情况查询(参保地)', icon: 'spot' }
    },
    {
      path: 'detail-query',
      component: () => import('@/views/offsite-treatment/subsystem/detail-query'),
      name: 'offsiteDetailQuery',
      meta: { title: '跨省外来就医月度清分明细查询(就医地)', icon: 'spot' }
    }
  ]
}

