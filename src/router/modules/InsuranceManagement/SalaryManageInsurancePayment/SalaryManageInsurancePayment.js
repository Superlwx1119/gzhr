export default {
  path: '/salary-manage-insurance-payment',
  component: () => import('@/views/insurance-management/salary-manage-insurance-payment/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '参保缴费工资管理', icon: 'example' },
  children: [
    {
      path: 'salary-declaration-verification',
      component: () => import('@/views/insurance-management/salary-manage-insurance-payment/salary-declaration-verification/index'),
      name: 'salaryDeclarationVerification',
      meta: { title: '缴费工资申报核定', icon: 'spot' }
    },
    {
      path: 'salary-declaration-verification-review',
      component: () => import('@/views/insurance-management/salary-manage-insurance-payment/salary-declaration-verification-review/index'),
      name: 'salaryDeclarationVerificationReview',
      meta: { title: '缴费工资申报核定审核', icon: 'spot' }
    },
    {
      path: 'salary-declaration-verification-refund',
      component: () => import('@/views/insurance-management/salary-manage-insurance-payment/salary-declaration-verification-refund/index'),
      name: 'salaryDeclarationVerificationRefund',
      meta: { title: '缴费工资回退申请', icon: 'spot' }
    },
    {
      path: 'salary-declaration-refund-review',
      component: () => import('@/views/insurance-management/salary-manage-insurance-payment/salary-declaration-refund-review/index'),
      name: 'salaryDeclarationRefundReview',
      meta: { title: '缴费工资回退审核', icon: 'spot' }
    },
    {
      path: 'social-average-salary',
      component: () => import('@/views/insurance-management/salary-manage-insurance-payment/social-average-salary/index'),
      name: 'socialAverageSalary',
      meta: { title: '社平工资启用', icon: 'spot' }
    },
    {
      path: 'salary-change-verification',
      component: () => import('@/views/insurance-management/salary-manage-insurance-payment/salary-change-verification/index'),
      name: 'salaryChangeVerification',
      meta: { title: '缴费工资变更核定', icon: 'spot' }
    },
    {
      path: 'salary-change-verification-review',
      component: () => import('@/views/insurance-management/salary-manage-insurance-payment/salary-change-verification-review/index'),
      name: 'salaryChangeVerificationReview',
      meta: { title: '缴费工资变更核定审核', icon: 'spot' }
    },
    {
      path: 'unit-average-salary-maintenance',
      component: () => import('@/views/insurance-management/salary-manage-insurance-payment/unit-average-salary-maintenance/index'),
      name: 'unitAverageSalaryMaintenance',
      meta: { title: '单位平均工资维护', icon: 'spot' }
    },
    {
      path: 'unit-avesalary-maintenance-review',
      component: () => import('@/views/insurance-management/salary-manage-insurance-payment/unit-avesalary-maintenance-review/index'),
      name: 'unitAvesalaryMaintenanceReview',
      meta: { title: '单位平均工资维护审核', icon: 'spot' }
    },
    {
      path: 'medical-month-salary-compute',
      component: () => import('@/views/insurance-management/salary-manage-insurance-payment/medical-month-salary-compute/index'),
      name: 'medicalMonthSalaryCompute',
      meta: { title: '医保区划单位上年度月平均工资计算', icon: 'spot' }
    },
    {
      path: 'medical-month-salary-review',
      component: () => import('@/views/insurance-management/salary-manage-insurance-payment/medical-month-salary-review/index'),
      name: 'medicalMonthSalaryReview',
      meta: { title: '医保区划单位上年度月平均工资审核', icon: 'spot' }
    }
  ]
}
