// 门慢门特管理
export default {
  path: 'slow-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'slowManage',
  meta: {
    title: '门慢门特管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/slowManage/maintenance'),
      name: 'slowManageMaintenance',
      meta: {
        title: '门慢门特维护',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/slowManage/audit'),
      name: 'slowManageAudit',
      meta: {
        title: '门慢门特登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/slowManage/query'),
      name: 'slowManageQuery',
      meta: {
        title: '门慢门特登记查询',
        icon: 'spot'
      }
    }
  ]
}
