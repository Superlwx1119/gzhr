// 非首诊就诊管理
export default {
  path: '/nofirst-visits-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'nofirstVisitsManage',
  meta: {
    title: '非首诊就诊管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/nofirstVisitsManage/maintenance'),
      name: 'nofirstVisitsManageMaintenance',
      meta: {
        title: '非首诊就诊申请',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/nofirstVisitsManage/audit'),
      name: 'nofirstVisitsManageAudit',
      meta: {
        title: '非首诊就诊申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/nofirstVisitsManage/query'),
      name: 'nofirstVisitsManageQuery',
      meta: {
        title: '非首诊就诊申请查询',
        icon: 'spot'
      }
    }
  ]
}
