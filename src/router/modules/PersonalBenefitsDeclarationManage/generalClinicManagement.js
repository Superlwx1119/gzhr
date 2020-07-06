// 普通门诊管理
export default {
  path: 'general-clinic-management',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'generalClinicManagement',
  meta: {
    title: '普通门诊管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/generalClinicManagement/maintenance'),
      name: 'generalClinicManagementMaintenance',
      meta: {
        title: '普通门诊申请',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/generalClinicManagement/audit'),
      name: 'generalClinicManagementAudit',
      meta: {
        title: '普通门诊申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/generalClinicManagement/query'),
      name: 'generalClinicManagementQuery',
      meta: {
        title: '普通门诊申请查询',
        icon: 'spot'
      }
    }
  ]
}
