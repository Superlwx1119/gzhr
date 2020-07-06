// 生育就医资格管理
export default {
  path: 'medical-treatment-qualification-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'medicalTreatmentQualificationManage',
  meta: {
    title: '生育就医资格管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'confirmMaintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/medicalTreatmentQualificationManage/confirmMaintenance'),
      name: 'medicalTreatmentQualificationManageConfirmMaintenance',
      meta: {
        title: '生育就医资格确认申请',
        icon: 'spot'
      }
    },
    {
      path: 'confirmAudit',
      component: () => import('@/views/personal-benefits-declaration-manage/medicalTreatmentQualificationManage/audit'),
      name: 'medicalTreatmentQualificationManageConfirmAudit',
      meta: {
        title: '生育就医资格确认申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'confirmQuery',
      component: () => import('@/views/personal-benefits-declaration-manage/medicalTreatmentQualificationManage/confirmQuery'),
      name: 'medicalTreatmentQualificationManageConfirmQuery',
      meta: {
        title: '生育就医资格确认申请查询',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/medicalTreatmentQualificationManage/query'),
      name: 'medicalTreatmentQualificationManageQuery',
      meta: {
        title: '生育就医资格修改信息查询',
        icon: 'spot'
      }
    }
  ]
}
