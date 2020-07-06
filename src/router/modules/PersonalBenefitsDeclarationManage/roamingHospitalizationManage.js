// 异地漫游住院管理
export default {
  path: 'roaming-hospitalization-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'roamingHospitalizationManage',
  meta: {
    title: '异地漫游住院管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/roamingHospitalizationManage/maintenance'),
      name: 'roamingHospitalizationManageMaintenance',
      meta: {
        title: '异地漫游住院申请',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/roamingHospitalizationManage/audit'),
      name: 'roamingHospitalizationManageAudit',
      meta: {
        title: '异地漫游住院申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/roamingHospitalizationManage/query'),
      name: 'roamingHospitalizationManageQuery',
      meta: {
        title: '异地漫游住院申请查询',
        icon: 'spot'
      }
    }
  ]
}
