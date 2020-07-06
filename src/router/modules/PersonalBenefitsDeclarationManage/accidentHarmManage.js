// 意外伤害管理
export default {
  path: 'accident-harm-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'accidentHarmManage',
  meta: {
    title: '意外伤害管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/accidentHarmManage/maintenance'),
      name: 'accidentHarmManageMaintenance',
      meta: {
        title: '意外伤害登记',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/accidentHarmManage/audit'),
      name: 'accidentHarmManageAudit',
      meta: {
        title: '意外伤害登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/accidentHarmManage/query'),
      name: 'accidentHarmManageQuery',
      meta: {
        title: '意外伤害登记查询',
        icon: 'spot'
      }
    }
  ]
}
