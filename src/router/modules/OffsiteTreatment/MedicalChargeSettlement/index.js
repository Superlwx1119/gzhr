export default {
  path: '/medical-charge-settlement',
  component: () => import('@/views/offsite-treatment/medical-charge-settlement'),
  name: 'medicalChargeSettlement',
  meta: { title: '异地医疗费结算(参保地)', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'make',
      component: () => import('@/views/offsite-treatment/medical-charge-settlement/make'),
      name: 'offsiteMakeStatement',
      meta: { title: '异地制作基金结算单', icon: 'spot' }
    },
    {
      path: 'audit',
      component: () => import('@/views/offsite-treatment/medical-charge-settlement/audit'),
      name: 'offsiteAuditStatement',
      meta: { title: '异地审核基金结算单', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/offsite-treatment/medical-charge-settlement/review'),
      name: 'offsiteReviewStatement',
      meta: { title: '异地基金结算表领导审签', icon: 'spot' }
    },
    {
      path: 'resummary',
      component: () => import('@/views/offsite-treatment/medical-charge-settlement/resummary'),
      name: 'offsiteReSummaryStatement',
      meta: { title: '省内异地报表结算二次汇总', icon: 'spot' }
    },
    {
      path: 'review-resummary',
      component: () => import('@/views/offsite-treatment/medical-charge-settlement/review-resummary'),
      name: 'offsiteReviewReSummaryStatement',
      meta: { title: '省内异地报表结算二次汇总领导审签', icon: 'spot' }
    }
  ]
}

