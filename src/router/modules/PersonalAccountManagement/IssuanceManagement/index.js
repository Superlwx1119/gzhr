export default {
  path: '/issuance-management',
  component: () => import('@/views/personal-account-management/issuance-management'),
  name: 'personalAccountIssuanceManagement',
  meta: { title: '个人账户核发管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'issuance-summary',
      component: () => import('@/views/personal-account-management/issuance-management/issuance-summary'),
      name: 'personalAccountIssuanceSummary',
      meta: { title: '个人账户核发汇总', icon: 'spot' }
    },
    {
      path: 'issuance-examination',
      component: () => import('@/views/personal-account-management/issuance-management/issuance-examination'),
      name: 'personalAccountIssuanceExamination',
      meta: { title: '个人账户核发检查', icon: 'spot' }
    },
    {
      path: 'issuance-review',
      component: () => import('@/views/personal-account-management/issuance-management/issuance-review'),
      name: 'personalAccountIssuanceReview',
      meta: { title: '个人账户核发审核', icon: 'spot' }
    },
    {
      path: 'summary-confirm',
      component: () => import('@/views/personal-account-management/issuance-management/summary-confirm'),
      name: 'personalAccountPouringSummaryConfirm',
      meta: { title: '个人账户注资汇总确认', icon: 'spot' }
    },
    {
      path: 'resummary',
      component: () => import('@/views/personal-account-management/issuance-management/resummary'),
      name: 'personalAccountPouringResummary',
      meta: { title: '个人账户注资二次汇总', icon: 'spot' }
    },
    {
      path: 'modification-application',
      component: () => import('@/views/personal-account-management/issuance-management/modification-application'),
      name: 'personalAccountPouringModificationApplication',
      meta: { title: '个人账户注资修改申请', icon: 'spot' }
    },
    {
      path: 'modification-review',
      component: () => import('@/views/personal-account-management/issuance-management/modification-review'),
      name: 'personalAccountPouringModificationReview',
      meta: { title: '个人账户注资修改审核', icon: 'spot' }
    },
    {
      path: 'summary-view',
      component: () => import('@/views/personal-account-management/issuance-management/summary-view'),
      name: 'personalAccountBankReportSummaryView',
      meta: { title: '个帐银行报送汇总查看', icon: 'spot' }
    }
  ]
}
