// 急诊住院管理
export default {
  path: 'emergency-hospitalization-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'emergencyHospitalizationManage',
  meta: {
    title: '急诊住院管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/emergencyHospitalizationManage/maintenance'),
      name: 'emergencyHospitalizationManageMaintenance',
      meta: {
        title: '急诊住院维护',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/emergencyHospitalizationManage/audit'),
      name: 'emergencyHospitalizationManageAudit',
      meta: {
        title: '急诊住院登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/emergencyHospitalizationManage/query'),
      name: 'emergencyHospitalizationManageQuery',
      meta: {
        title: '急诊住院登记查询',
        icon: 'spot'
      }
    }
  ]
}
