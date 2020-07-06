// 治疗期内住院起付线管理
export default {
  path: 'hospital-starting-lineManage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'hospitalStartingLineManage',
  meta: {
    title: '治疗期内住院起付线管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/hospitalStartingLineManage/maintenance'),
      name: 'hospitalStartingLineManageMaintenance',
      meta: {
        title: '治疗期内住院起付线申请',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/hospitalStartingLineManage/audit'),
      name: 'hospitalStartingLineManageAudit',
      meta: {
        title: '治疗期内住院起付线申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/hospitalStartingLineManage/query'),
      name: 'hospitalStartingLineManageQuery',
      meta: {
        title: '治疗期内住院起付线申请查询',
        icon: 'spot'
      }
    }
  ]
}
