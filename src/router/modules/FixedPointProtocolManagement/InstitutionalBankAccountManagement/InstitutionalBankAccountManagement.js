export default {
  path: '/institutional-bank-account-management',
  component: () => import('@/views/fixed-point-protocol-management/institutional-bank-account-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点医药机构银行账号管理', icon: '' },
  children: [
    {
      path: '/institutional-bank-account-maintenance',
      component: () => import('@/views/fixed-point-protocol-management/institutional-bank-account-management/bank-account-maintenance/index'),
      name: 'bankAccountMaintenance',
      meta: { title: '定点医药机构银行账号维护', icon: 'spot' }
    },
    {
      path: '/institutional-bank-account-review',
      component: () => import('@/views/fixed-point-protocol-management/institutional-bank-account-management/bank-account-review/index'),
      name: 'bankAccountReview',
      meta: { title: '定点医药机构银行账号审核', icon: 'spot' }
    },
    {
      path: '/institutional-bank-account-query',
      component: () => import('@/views/fixed-point-protocol-management/institutional-bank-account-management/bank-account-query/index'),
      name: 'bankAccountQuery',
      meta: { title: '定点医药机构银行账号查询', icon: 'spot' }
    }
  ]
}
