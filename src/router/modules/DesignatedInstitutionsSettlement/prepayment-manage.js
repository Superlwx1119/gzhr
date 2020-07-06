export default {
  path: '/prepayment-manage',
  component: () => import('@/views/designated-institutions-settlement/prepayment-manage/index'),
  name: 'PrepaymentManage',
  meta: { title: '预付金管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'prepayment-audit',
      component: () => import('@/views/designated-institutions-settlement/prepayment-manage/prepayment-audit/index'),
      name: 'PrepaymentAudit',
      meta: { title: '预付金审核', icon: '' }
    },
    {
      path: 'prepayment-check',
      component: () => import('@/views/designated-institutions-settlement/prepayment-manage/prepayment-check/index'),
      name: 'PrepaymentCheck',
      meta: { title: '预付金核定', icon: '' }
    },
    {
      path: 'prepayment-back',
      component: () => import('@/views/designated-institutions-settlement/prepayment-manage/prepayment-back/index'),
      name: 'PrepaymentBack',
      meta: { title: '预付金收回', icon: '' }
    },
    {
      path: 'prepayment-back-audit',
      component: () => import('@/views/designated-institutions-settlement/prepayment-manage/prepayment-back-audit/index'),
      name: 'PrepaymentBackAudit',
      meta: { title: '预付金收回审核', icon: '' }
    }
  ]
}
