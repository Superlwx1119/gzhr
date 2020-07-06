export default {
  path: '/sporadic-reimbursement',
  component: () => import('@/views/personal-treatment/sporadic-reimbursement/index'),
  name: 'sporadicReimbursement',
  meta: { title: '零星报销管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'personal-sporadic-reimbursement',
      component: () => import('@/views/personal-treatment/sporadic-reimbursement/personal-sporadic-reimbursement/index'),
      name: 'personalSporadicReimbursement',
      meta: { title: '个人零星报销受理', icon: 'spot' }
    },
    {
      path: 'personal-sporadic-reimbursement-confirm',
      component: () => import('@/views/personal-treatment/sporadic-reimbursement/personal-sporadic-reimbursement-confirm/index'),
      name: 'personalSporadicReimbursementConfirm',
      meta: { title: '个人零星报销受理/确认', icon: 'spot' }
    },
    {
      path: 'personal-sporadic-reimbursement-settlement',
      component: () => import('@/views/personal-treatment/sporadic-reimbursement/personal-sporadic-reimbursement-settlement/index'),
      name: 'personalSporadicReimbursementSettlement',
      meta: { title: '个人零星报销结算', icon: 'spot' }
    },
    {
      path: 'personal-sporadic-reimbursement-audit',
      component: () => import('@/views/personal-treatment/sporadic-reimbursement/personal-sporadic-reimbursement-audit/index'),
      name: 'personalSporadicReimbursementAudit',
      meta: { title: '个人零星报销审核', icon: 'spot' }
    },
    {
      path: 'personal-sporadic-reimbursement-verification',
      component: () => import('@/views/personal-treatment/sporadic-reimbursement/personal-sporadic-reimbursement-verification/index'),
      name: 'personalSporadicReimbursementVerification',
      meta: { title: '个人零星报销核查', icon: 'spot' }
    },
    {
      path: 'personal-sporadic-reimbursement-account-edit',
      component: () => import('@/views/personal-treatment/sporadic-reimbursement/personal-sporadic-reimbursement-account-edit/index'),
      name: 'personalSporadicReimbursementAccountEdit',
      meta: { title: '个人零星报销账户修改', icon: 'spot' }
    },
    {
      path: 'personal-sporadic-reimbursement-account-audit',
      component: () => import('@/views/personal-treatment/sporadic-reimbursement/personal-sporadic-reimbursement-account-audit/index'),
      name: 'personalSporadicReimbursementAccountAudit',
      meta: { title: '个人零星报销账户审核', icon: 'spot' }
    },
    {
      path: 'personal-sporadic-reimbursement-reason',
      component: () => import('@/views/personal-treatment/sporadic-reimbursement/personal-sporadic-reimbursement-reason/index'),
      name: 'personalSporadicReimbursementReason',
      meta: { title: '个人零星报销原因维护', icon: 'spot' }
    },
    {
      path: 'personal-sporadic-reimbursement-query',
      component: () => import('@/views/personal-treatment/sporadic-reimbursement/personal-sporadic-reimbursement-query/index'),
      name: 'personalSporadicReimbursementQuery',
      meta: { title: '个人零星报销查询与统计', icon: 'spot' }
    }
  ]
}
