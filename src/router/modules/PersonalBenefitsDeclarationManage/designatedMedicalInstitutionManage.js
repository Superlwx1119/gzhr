// 就医定点医疗机构管理
export default {
  path: 'designated-medical-institution-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'designatedMedicalInstitutionManage',
  meta: {
    title: '就医定点医疗机构管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/designatedMedicalInstitutionManage/maintenance'),
      name: 'designatedMedicalInstitutionManageMaintenance',
      meta: {
        title: '机构维护',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/designatedMedicalInstitutionManage/audit'),
      name: 'designatedMedicalInstitutionManageAudit',
      meta: {
        title: '机构维护审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/designatedMedicalInstitutionManage/query'),
      name: 'designatedMedicalInstitutionManageQuery',
      meta: {
        title: '机构维护查询',
        icon: 'spot'
      }
    }
  ]
}
