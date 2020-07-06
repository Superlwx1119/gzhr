export default {
  path: '/sporadic-second-reimbursement',
  component: () => import('@/views/personal-treatment/sporadic-reimbursement/index'),
  name: 'sporadicSecondReimbursement',
  meta: { title: '零星二次补差报销管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'sporadic-second-reimbursement-register',
      component: () => import('@/views/personal-treatment/sporadic-second-reimbursement/sporadic-second-reimbursement-register/index'),
      name: 'sporadicSecondReimbursementRegister',
      meta: { title: '二次补差报销登记', icon: 'spot' }
    },
    {
      path: 'personal-sporadic-reimbursement-confirm',
      component: () => import('@/views/personal-treatment/sporadic-second-reimbursement/sporadic-second-reimbursement-audit/index'),
      name: 'sporadicSecondReimbursementAudit',
      meta: { title: '二次补差报销审核', icon: 'spot' }
    }
  ]
}
