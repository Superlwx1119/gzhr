// 慢特病治疗用量方案
export default {
  path: 'chronic-disease-Treatment-dosageRegimen',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'chronicDiseaseTreatmentDosageRegimen',
  meta: {
    title: '慢特病治疗用量方案',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/chronicDiseaseTreatmentDosageRegimen/maintenance'),
      name: 'chronicDiseaseTreatmentDosageRegimenMaintenance',
      meta: {
        title: '方案维护',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/chronicDiseaseTreatmentDosageRegimen/audit'),
      name: 'chronicDiseaseTreatmentDosageRegimenAudit',
      meta: {
        title: '方案维护审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/chronicDiseaseTreatmentDosageRegimen/query'),
      name: 'chronicDiseaseTreatmentDosageRegimenQuery',
      meta: {
        title: '方案维护查询',
        icon: 'spot'
      }
    }
  ]
}
