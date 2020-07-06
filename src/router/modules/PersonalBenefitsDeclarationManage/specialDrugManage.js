// 特殊药品管理
export default {
  path: 'special-drug-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'specialDrugManage',
  meta: {
    title: '特殊药品管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/specialDrugManage/maintenance'),
      name: 'specialDrugManageMaintenance',
      meta: {
        title: '特殊药品登记',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/specialDrugManage/audit'),
      name: 'specialDrugManageAudit',
      meta: {
        title: '特殊药品登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/specialDrugManage/query'),
      name: 'specialDrugManageQuery',
      meta: {
        title: '特殊药品登记查询',
        icon: 'spot'
      }
    }
  ]
}
