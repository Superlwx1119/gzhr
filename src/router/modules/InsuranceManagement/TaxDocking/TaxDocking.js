export default {
  path: '/tax-docking',
  component: () => import('@/views/insurance-management/tax-docking/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '税务对接', icon: 'example' },
  children: [
    {
      path: 'tax-start-stop-apply',
      component: () => import('@/views/insurance-management/tax-docking/tax-start-stop-apply/index'),
      name: 'taxStartStopApply',
      meta: { title: '单位对接税务启停申请', icon: 'spot' }
    },
    {
      path: 'tax-start-stop-apply-review',
      component: () => import('@/views/insurance-management/tax-docking/tax-start-stop-apply-review/index'),
      name: 'taxStartStopApplyReview',
      meta: { title: '单位对接税务启停申请审核', icon: 'spot' }
    },
    {
      path: 'tax-report-information-query',
      component: () => import('@/views/insurance-management/tax-docking/tax-report-information-query/index'),
      name: 'taxReportInformationQuery',
      meta: { title: '单位对接税务上报信息状态查询', icon: 'spot' }
    },
    {
      path: 'employee-tax-data-resend',
      component: () => import('@/views/insurance-management/tax-docking/employee-tax-data-resend/index'),
      name: 'employeeTaxDataResend',
      meta: { title: '单位职工对接税务数据重发', icon: 'spot' }
    },
    {
      path: 'employee-error-data-resend',
      component: () => import('@/views/insurance-management/tax-docking/employee-error-data-resend/index'),
      name: 'employeeErrorDataResend',
      meta: { title: '单位职工错误数据重发', icon: 'spot' }
    },
    {
      path: 'employee-report-information-query',
      component: () => import('@/views/insurance-management/tax-docking/employee-report-information-query/index'),
      name: 'employeeReportInformationQuery',
      meta: { title: '职工对接税务上报信息状态查询', icon: 'spot' }
    },
    {
      path: 'residents-tax-data-resend',
      component: () => import('@/views/insurance-management/tax-docking/residents-tax-data-resend/index'),
      name: 'residentsTaxDataResend',
      meta: { title: '城乡居民对接税务数据重发', icon: 'spot' }
    },
    {
      path: 'residents-error-data-resend',
      component: () => import('@/views/insurance-management/tax-docking/residents-error-data-resend/index'),
      name: 'residentsErrorDataResend',
      meta: { title: '城乡居民对接税务错误数据重发', icon: 'spot' }
    },
    {
      path: 'residents-info-status-query',
      component: () => import('@/views/insurance-management/tax-docking/residents-info-status-query/index'),
      name: 'residentsInfoStatusQuery',
      meta: { title: '城乡居民对接税务上报信息状态查询', icon: 'spot' }
    },
    {
      path: 'residents-translate-resend',
      component: () => import('@/views/insurance-management/tax-docking/residents-translate-resend/index'),
      name: 'residentsTranslateResend',
      meta: { title: '城乡居民指定传输类型批量发送', icon: 'spot' }
    }
  ]
}
