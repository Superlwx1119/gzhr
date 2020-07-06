export default {
  path: '/appropriation-sum-manege',
  component: () => import('@/views/designated-institutions-settlement/appropriation-sum-manege/index'),
  name: 'AppropriationSumManege',
  meta: { title: '拨付汇总管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'settlement-sum',
      component: () => import('@/views/designated-institutions-settlement/appropriation-sum-manege/settlement-sum/index'),
      name: 'SettlementSum',
      meta: { title: '结算拨付汇总', icon: '' }
    },
    {
      path: 'summary-audit',
      component: () => import('@/views/designated-institutions-settlement/appropriation-sum-manege/summary-audit/index'),
      name: 'SummaryAudit',
      meta: { title: '拨付汇总业务审核', icon: '' }
    },
    {
      path: 'summary-search',
      component: () => import('@/views/designated-institutions-settlement/appropriation-sum-manege/summary-search/index'),
      name: 'SummarySearch',
      meta: { title: '拨付汇总业务查询', icon: '' }
    }
  ]
}
