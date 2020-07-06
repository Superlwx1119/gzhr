export default {
  path: '/long-care-expense-acceptance-review-settlement',
  component: () => import('@/views/center-long-care-ins-manage/long-care-expense-acceptance-review-settlement/index'),
  name: 'LongCareExpenseAcceptanceReviewSettlement',
  meta: { title: '长护费用受理审核结算', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'acceptance',
      component: () => import('@/views/center-long-care-ins-manage/long-care-expense-acceptance-review-settlement/acceptance/index'),
      name: 'Acceptance',
      meta: { title: '长护费用受理', icon: 'spot' }
    },
    {
      path: 'expense-review',
      component: () => import('@/views/center-long-care-ins-manage/long-care-expense-acceptance-review-settlement/expense-review/index'),
      name: 'ExpenseReview',
      meta: { title: '长护费用审核', icon: 'spot' }
    },
    {
      path: 'maintenance-deduction-reason',
      component: () => import('@/views/center-long-care-ins-manage/long-care-expense-acceptance-review-settlement/maintenance-deduction-reason/index'),
      name: 'MaintenanceDeductionReason',
      meta: { title: '长护费用扣付原因维护', icon: 'spot' }
    },
    {
      path: 'settlement',
      component: () => import('@/views/center-long-care-ins-manage/long-care-expense-acceptance-review-settlement/settlement/index'),
      name: 'Settlement',
      meta: { title: '长护费用结算', icon: 'spot' }
    },
    {
      path: 'leader-signature',
      component: () => import('@/views/center-long-care-ins-manage/long-care-expense-acceptance-review-settlement/leader-signature/index'),
      name: 'LeaderSignature',
      meta: { title: '长护费用领导审签', icon: 'spot' }
    },
    {
      path: 'settlement-summary-query',
      component: () => import('@/views/center-long-care-ins-manage/long-care-expense-acceptance-review-settlement/settlement-summary-query/index'),
      name: 'SettlementSummaryQuery',
      meta: { title: '长护费用结算汇总查询', icon: 'spot' }
    },
    {
      path: 'deduction-query',
      component: () => import('@/views/center-long-care-ins-manage/long-care-expense-acceptance-review-settlement/deduction-query/index'),
      name: 'DeductionQuery',
      meta: { title: '长护费用扣减查询', icon: 'spot' }
    }
  ]
}
