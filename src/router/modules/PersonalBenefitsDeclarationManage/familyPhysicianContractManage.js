// 家庭医师签约管理
export default {
  path: 'family-physician-contractManage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'familyPhysicianContractManage',
  meta: {
    title: '家庭医师签约管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/familyPhysicianContractManage/maintenance'),
      name: 'familyPhysicianContractManageMaintenance',
      meta: {
        title: '家庭医师签约登记',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/familyPhysicianContractManage/audit'),
      name: 'familyPhysicianContractManageAudit',
      meta: {
        title: '家庭医师签约登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/familyPhysicianContractManage/query'),
      name: 'familyPhysicianContractManageQuery',
      meta: {
        title: '家庭医师签约登记查询',
        icon: 'spot'
      }
    }
  ]
}
