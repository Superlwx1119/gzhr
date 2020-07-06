// 异地安置管理
export default {
  path: 'remote-placement-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'remotePlacementManage',
  meta: {
    title: '异地安置管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/remotePlacementManage/maintenance'),
      name: 'remotePlacementManageMaintenance',
      meta: {
        title: '异地安置登记',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/remotePlacementManage/audit'),
      name: 'remotePlacementManageAudit',
      meta: {
        title: '异地安置登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/remotePlacementManage/query'),
      name: 'remotePlacementManageQuery',
      meta: {
        title: '异地安置登记查询',
        icon: 'spot'
      }
    }
  ]
}
