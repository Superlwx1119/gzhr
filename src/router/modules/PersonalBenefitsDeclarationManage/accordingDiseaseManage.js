// 按病种结算管理
export default {
  path: 'according-disease-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'accordingDiseaseManage',
  meta: {
    title: '按病种结算管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/accordingDiseaseManage/maintenance'),
      name: 'accordingDiseaseManageMaintenance',
      meta: {
        title: '按病种结算登记',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/accordingDiseaseManage/audit'),
      name: 'accordingDiseaseManageAudit',
      meta: {
        title: '按病种结算登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/accordingDiseaseManage/query'),
      name: 'accordingDiseaseManageQuery',
      meta: {
        title: '按病种结算登记查询',
        icon: 'spot'
      }
    }
  ]
}
