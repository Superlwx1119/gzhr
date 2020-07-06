//  医疗待遇信息查询
export default {
  path: '/medical-treatment-query',
  component: () => import('@/views/overall-query/medical-treatment-query/index'),
  redirect: 'noRedirect',
  name: 'medicalTreatmentQuery',
  alwaysShow: true,
  meta: { title: '医疗待遇信息查询', icon: 'example' },
  children: [
    {
      path: 'medical-settlement-query',
      component: () => import('@/views/overall-query/medical-treatment-query/medical-settlement-query/index'),
      name: 'medicalSettlementQuery',
      meta: { title: '医疗机构结算信息查询', icon: 'spot' }
    },
    {
      path: 'personal-clinic-query',
      component: () => import('@/views/overall-query/medical-treatment-query/personal-clinic-query/index'),
      name: 'personalClinicQuery',
      meta: { title: '个人就诊信息查询', icon: 'spot' }
    }
  ]
}
