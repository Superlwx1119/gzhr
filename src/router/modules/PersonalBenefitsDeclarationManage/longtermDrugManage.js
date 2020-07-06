// 长期带药管理
export default {
  path: 'longterm-drug-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'longtermDrugManage',
  meta: {
    title: '长期带药管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/longtermDrugManage/maintenance'),
      name: 'longtermDrugManageMaintenance',
      meta: {
        title: '长期带药登记',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/longtermDrugManage/audit'),
      name: 'longtermDrugManageAudit',
      meta: {
        title: '长期带药登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/longtermDrugManage/query'),
      name: 'longtermDrugManageQuery',
      meta: {
        title: '长期带药登记查询',
        icon: 'spot'
      }
    }
  ]
}
