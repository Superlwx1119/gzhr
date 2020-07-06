// 住院额外费用管理
export default {
  path: 'hospital-extras-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'hospitalExtrasManage',
  meta: {
    title: '住院额外费用管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/hospitalExtrasManage/maintenance'),
      name: 'hospitalExtrasManageMaintenance',
      meta: {
        title: '住院额外费用申请',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/hospitalExtrasManage/audit'),
      name: 'hospitalExtrasManageAudit',
      meta: {
        title: '住院额外费用申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/hospitalExtrasManage/query'),
      name: 'hospitalExtrasManageQuery',
      meta: {
        title: '住院额外费用申请查询',
        icon: 'spot'
      }
    }
  ]
}
