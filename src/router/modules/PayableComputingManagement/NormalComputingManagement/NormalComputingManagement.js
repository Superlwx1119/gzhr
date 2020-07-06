export default {
  path: '/normal-computing-management',
  name: 'NormalComputingManagement',
  component: () => import('@/views/payable-computing-management/normal-computing-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '正常计算管理', icon: '' },
  children: [
    {
      path: 'unit-sporadic-receivable-approved',
      component: () => import('@/views/payable-computing-management/normal-computing-management/unit-sporadic-receivable-approved/index'),
      name: 'UnitSporadicReceivableApproved',
      meta: { title: '单位零星应收核定', icon: 'spot' }
    },
    {
      path: 'unit-sporadic-receivable-review',
      component: () => import('@/views/payable-computing-management/normal-computing-management/unit-sporadic-receivable-review/index'),
      name: 'UnitSporadicReceivableReview',
      meta: { title: '单位零星应收审核', icon: 'spot' }
    },
    {
      path: 'unit-batch-receivable-approved',
      component: () => import('@/views/payable-computing-management/normal-computing-management/unit-batch-receivable-approved/index'),
      name: 'UnitBatchReceivableApproved',
      meta: { title: '单位批量应收核定', icon: 'spot' }
    },
    {
      path: 'employment-sporadic-receivable-approved',
      component: () => import('@/views/payable-computing-management/normal-computing-management/employment-sporadic-receivable-approved/index'),
      name: 'EmploymentSporadicReceivableApproved',
      meta: { title: '灵活就业零星应收核定', icon: 'spot' }
    },
    {
      path: 'employment-sporadic-receivable-review',
      component: () => import('@/views/payable-computing-management/normal-computing-management/employment-sporadic-receivable-review/index'),
      name: 'EmploymentSporadicReceivableReview',
      meta: { title: '灵活就业零星应收审核', icon: 'spot' }
    },
    {
      path: 'employment-batch-receivable-approved',
      component: () => import('@/views/payable-computing-management/normal-computing-management/employment-batch-receivable-approved/index'),
      name: 'EmploymentBatchReceivableApproved',
      meta: { title: '灵活就业批量应收核定', icon: 'spot' }
    },
    {
      path: 'employment-due-query',
      component: () => import('@/views/payable-computing-management/normal-computing-management/employment-due-query/index'),
      name: 'EmploymentDueQuery',
      meta: { title: '灵活就业应缴查询', icon: 'spot' }
    },
    {
      path: 'unit-due-query',
      component: () => import('@/views/payable-computing-management/normal-computing-management/unit-due-query/index'),
      name: 'UnitDueQuery',
      meta: { title: '单位应缴查询', icon: 'spot' }
    },
    {
      path: 'computing-exe-plan-management',
      component: () => import('@/views/payable-computing-management/normal-computing-management/computing-exe-plan-management/index'),
      name: 'ComputingExePlanManagement',
      meta: { title: '计算执行计划管理', icon: 'spot' }
    },
    {
      path: 'employee-policy-maintenance',
      component: () => import('@/views/payable-computing-management/normal-computing-management/employee-policy-maintenance/index'),
      name: 'EmployeePolicyMaintenance',
      meta: { title: '职工政策维护', icon: 'spot' }
    },
    {
      path: 'employee-policy-maintenance-review',
      component: () => import('@/views/payable-computing-management/normal-computing-management/employee-policy-maintenance-review/index'),
      name: 'EmployeePolicyMaintenanceReview',
      meta: { title: '职工政策维护审核', icon: 'spot' }
    }
  ]
}
