export default {
  path: '/integrated-management',
  component: () => import('@/views/offsite-treatment/integrated-management'),
  name: 'offsiteIntegratedManagement',
  meta: { title: '异地综合管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'extraction',
      component: () => import('@/views/offsite-treatment/integrated-management/extraction'),
      name: 'unreconceiledExtraction',
      meta: { title: '省平台未对账数据提取', icon: 'spot' }
    },
    {
      path: 'reconceiliation',
      component: () => import('@/views/offsite-treatment/integrated-management/reconceiliation'),
      name: 'dischargeDailyReconceiliation',
      meta: { title: '出院结算日对账', icon: 'spot' }
    },
    {
      path: 'declare',
      component: () => import('@/views/offsite-treatment/integrated-management/declare'),
      name: 'monthlyDeclare',
      meta: { title: '参保地提取月度清分数据', icon: 'spot' }
    },
    {
      path: 'info-extraction',
      component: () => import('@/views/offsite-treatment/integrated-management/info-extraction'),
      name: 'medicalLandInfoExtraction',
      meta: { title: '省外统筹区就医地信息提取', icon: 'spot' }
    },
    {
      path: 'maintain',
      component: () => import('@/views/offsite-treatment/integrated-management/maintain'),
      name: 'medicalLandInfoMaintain',
      meta: { title: '省外统筹区就医地信息维护', icon: 'spot' }
    }
  ]
}

