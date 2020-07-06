// 代开药品管理
export default {
  path: 'issue-drug-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'issueDrugManage',
  meta: {
    title: '代开药品管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/issueDrugManage/maintenance'),
      name: 'issueDrugManageMaintenance',
      meta: {
        title: '代开药品登记',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/issueDrugManage/audit'),
      name: 'issueDrugManageAudit',
      meta: {
        title: '代开药品登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/issueDrugManage/query'),
      name: 'issueDrugManageQuery',
      meta: {
        title: '代开药品登记查询',
        icon: 'spot'
      }
    }
  ]
}
