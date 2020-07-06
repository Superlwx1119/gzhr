//  居民计算管理
export default {
  path: '/residents-calculate',
  component: () => import('@/views/residents-pay-manage/residents-calculate/index'),
  name: 'residentsCalculate',
  meta: { title: '居民计算管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'pay-verification',
      component: () => import('@/views/residents-pay-manage/residents-calculate/pay-verification/index'),
      name: 'payVerification',
      meta: { title: '居民缴费核定', icon: 'spot' }
    },
    {
      path: 'batch-pay-verification',
      component: () => import('@/views/residents-pay-manage/residents-calculate/batch-pay-verification/index'),
      name: 'batchPayVerification',
      meta: { title: '批量居民缴费核定', icon: 'spot' }
    },
    {
      path: 'progress-of-pay',
      component: () => import('@/views/residents-pay-manage/residents-calculate/progress-of-pay/index'),
      name: 'progressOfPay',
      meta: { title: '居民缴费核定进度查询', icon: 'spot' }
    },
    {
      path: 'residents-policy-maintenance',
      component: () => import('@/views/residents-pay-manage/residents-calculate/residents-policy-maintenance/index'),
      name: 'residentsPolicyMaintenance',
      meta: { title: '居民政策维护', icon: 'spot' }
    },
    {
      path: 'residents-policy-maintenance-audit',
      component: () => import('@/views/residents-pay-manage/residents-calculate/residents-policy-maintenance-audit/index'),
      name: 'residentsPolicyMaintenanceAudit',
      meta: { title: '居民政策维护审核', icon: 'spot' }
    }
  ]
}
