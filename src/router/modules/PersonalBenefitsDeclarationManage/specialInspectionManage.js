// 特治特检管理
export default {
  path: 'special-inspection-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'specialInspectionManage',
  meta: {
    title: '特治特检管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/specialInspectionManage/maintenance'),
      name: 'specialInspectionManageaMaintenance',
      meta: {
        title: '特治特检登记',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/specialInspectionManage/audit'),
      name: 'specialInspectionManageAudit',
      meta: {
        title: '特治特检登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/specialInspectionManage/query'),
      name: 'specialInspectionManageQuery',
      meta: {
        title: '特治特检登记查询',
        icon: 'spot'
      }
    }
  ]
}
