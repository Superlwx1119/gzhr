// 医联体签约管理
export default {
  path: 'medical-alliance-contract-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'medicalAllianceContractManage',
  meta: {
    title: '医联体签约管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/medicalAllianceContractManage/maintenance'),
      name: 'medicalAllianceContractManageMaintenance',
      meta: {
        title: '医联体签约信息维护',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/medicalAllianceContractManage/audit'),
      name: 'medicalAllianceContractManageAudit',
      meta: {
        title: '医联体签约信息审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/medicalAllianceContractManage/query'),
      name: 'medicalAllianceContractManageQuery',
      meta: {
        title: '医联体签约信息查询',
        icon: 'spot'
      }
    }
  ]
}
