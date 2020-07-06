// 非差别化支付管理
export default {
  path: '/nondiff-payment-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'nondiffPaymentManage',
  meta: {
    title: '非差别化支付管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/nondiffPaymentManage/maintenance'),
      name: 'nondiffPaymentManageMaintenance',
      meta: {
        title: '非差别化支付申请',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/nondiffPaymentManage/audit'),
      name: 'nondiffPaymentManageAudit',
      meta: {
        title: '非差别化支付申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/nondiffPaymentManage/query'),
      name: 'nondiffPaymentManageQuery',
      meta: {
        title: '非差别化支付申请查询',
        icon: 'spot'
      }
    }
  ]
}
