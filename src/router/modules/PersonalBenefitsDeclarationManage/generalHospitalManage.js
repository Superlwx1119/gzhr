// 普通住院管理
export default {
  path: 'general-hospital-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'generalHospitalManage',
  meta: {
    title: '普通住院管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/generalHospitalManage/maintenance'),
      name: 'generalHospitalManageMaintenance',
      meta: {
        title: '普通住院申请',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/generalHospitalManage/audit'),
      name: 'generalHospitalManageAudit',
      meta: {
        title: '普通住院申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/generalHospitalManage/query'),
      name: 'generalHospitalManageQuery',
      meta: {
        title: '普通住院查询',
        icon: 'spot'
      }
    }
  ]
}
