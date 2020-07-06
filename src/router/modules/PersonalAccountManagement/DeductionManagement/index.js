
export default {
  path: '/deduction-management',
  component: () => import('@/views/personal-account-management/deduction-management'),
  name: 'personalAccountDeductionManagement',
  meta: { title: '个人账户扣减管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'entry',
      component: () => import('@/views/personal-account-management/deduction-management/entry'),
      name: 'personalAccountDeductionManagementEntry',
      meta: { title: '扣减信息录入', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/personal-account-management/deduction-management/review'),
      name: 'personalAccountDeductionManagementReview',
      meta: { title: '扣减审核', icon: 'spot' }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-account-management/deduction-management/query'),
      name: 'personalAccountDeductionManagementQuery',
      meta: { title: '扣减查询', icon: 'spot' }
    }
  ]
}
