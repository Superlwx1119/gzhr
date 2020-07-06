import Layout from '@/layout'
export default {
  path: 'fund-collects-manage',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '基金征集管理', icon: 'example' },
  children: [
    {
      path: '/fund-solicitation-manage',
      component: () => import('@/views/fund-collects-manage/fund-solicitation-manage/index'),
      name: 'fundSolicitationManage',
      meta: { title: '基金征集管理', icon: '' },
      redirect: '/fund-solicitation-manage/medical-insurance-documents',
      alwaysShow: true,
      children: [
        {
          path: 'medical-insurance-documents',
          component: () => import('@/views/fund-collects-manage/fund-solicitation-manage/medical-insurance-documents/index'),
          name: 'medicalInsuranceDocuments',
          meta: { title: '医疗保险费缴费单据生成', icon: 'spot' }
        },
        {
          path: 'medical-insurance-tally',
          component: () => import('@/views/fund-collects-manage/fund-solicitation-manage/medical-insurance-tally/index'),
          name: 'medicalInsuranceTally',
          meta: { title: '医疗保险费收入登账', icon: 'spot' }
        },
        {
          path: 'medical-insurance-tally-audit',
          component: () => import('@/views/fund-collects-manage/fund-solicitation-manage/medical-insurance-tally-audit/index'),
          name: 'medicalInsuranceTallyAudit',
          meta: { title: '医疗保险费收入登账审核', icon: 'spot' }
        },
        {
          path: 'flexible-employment-documents',
          component: () => import('@/views/fund-collects-manage/fund-solicitation-manage/flexible-employment-documents/index'),
          name: 'flexibleEmploymentDocuments',
          meta: { title: '灵活就业缴费单据生成', icon: 'spot' }
        },
        {
          path: 'flexible-employment-tally',
          component: () => import('@/views/fund-collects-manage/fund-solicitation-manage/flexible-employment-tally/index'),
          name: 'flexibleEmploymentTally',
          meta: { title: '灵活就业收入登账', icon: 'spot' }
        },
        {
          path: 'flexible-employment-tally-audit',
          component: () => import('@/views/fund-collects-manage/fund-solicitation-manage/flexible-employment-tally-audit/index'),
          name: 'flexibleEmploymentTallyAudit',
          meta: { title: '灵活就业收入登账审核', icon: 'spot' }
        }
      ]
    }
  ]
}
