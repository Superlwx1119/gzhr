// 一站式结算管理
export default {
  path: 'onestop-settlement-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'onestopSettlementManage',
  meta: {
    title: '一站式结算管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/onestopSettlementManage/maintenance'),
      name: 'onestopSettlementManageMaintenance',
      meta: {
        title: '一站式结算申请',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/onestopSettlementManage/audit'),
      name: 'onestopSettlementManageAudit',
      meta: {
        title: '一站式结算申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/onestopSettlementManage/query'),
      name: 'onestopSettlementManageQuery',
      meta: {
        title: '一站式结算申请查询',
        icon: 'spot'
      }
    }
  ]
}
