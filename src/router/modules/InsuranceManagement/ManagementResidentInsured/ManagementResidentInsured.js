export default {
  path: '/management-resident-insured',
  component: () => import('@/views/insurance-management/management-resident-insured'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '居民参保人员管理', icon: 'example' },
  children: [
    {
      path: '/ins-regist-urban-rural-residents',
      component: () => import('@/views/insurance-management/management-resident-insured/ins-regist-urban-rural-residents/index'),
      name: 'insRegistUrbanRuralResidents',
      meta: { title: '城乡居民参保登记', icon: 'spot' }
    },
    {
      path: '/verification-registration',
      component: () => import('@/views/insurance-management/management-resident-insured/verification-registration/index'),
      name: 'verificationRegistration',
      meta: { title: '城乡居民参保登记审核', icon: 'spot' }
    },
    {
      path: '/information-maintenance',
      component: () => import('@/views/insurance-management/management-resident-insured/information-maintenance/index'),
      name: 'informationMaintenance',
      meta: { title: '城乡居民信息维护', icon: 'spot' }
    },
    {
      path: '/information-maintenance-audit',
      component: () => import('@/views/insurance-management/management-resident-insured/information-maintenance-audit/index'),
      name: 'informationMaintenanceAudit',
      meta: { title: '城乡居民信息维护审核', icon: 'spot' }
    },
    // {
    //   path: '/information-maintenance-query',
    //   component: () => import('@/views/insurance-management/management-resident-insured/information-maintenance-query/index'),
    //   name: 'informationMaintenanceQuery',
    //   meta: { title: '城乡居民信息维护查询', icon: 'spot' }
    // },
    {
      path: '/special-identity-registration',
      component: () => import('@/views/insurance-management/management-resident-insured/special-identity-registration/index'),
      name: 'specialIdentityRegistration',
      meta: { title: '城乡居民特殊身份登记', icon: 'spot' }
    },
    {
      path: '/special-identity-registration-review',
      component: () => import('@/views/insurance-management/management-resident-insured/special-identity-registration-review/index'),
      name: 'specialIdentityRegistrationReview',
      meta: { title: '城乡居民特殊身份登记审核', icon: 'spot' }
    },
    {
      path: '/batch-insured-guide-disk',
      component: () => import('@/views/insurance-management/management-resident-insured/batch-insured-guide-disk/index'),
      name: 'batchInsuredGuideDisk',
      meta: { title: '城乡居民批量参保导盘', icon: 'spot' }
    },
    {
      path: '/school-student-batch-insurance-guide',
      component: () => import('@/views/insurance-management/management-resident-insured/school-student-batch-insurance-guide/index'),
      name: 'schoolStudentBatchInsuranceGuide',
      meta: { title: '学校学生批量参保导盘', icon: 'spot' }
    },
    {
      path: '/suspension-insurance-registration',
      component: () => import('@/views/insurance-management/management-resident-insured/suspension-insurance-registration/index'),
      name: 'suspensionInsuranceRegistration',
      meta: { title: '城乡居民暂停参保登记', icon: 'spot' }
    },
    {
      path: '/termination-insurance',
      component: () => import('@/views/insurance-management/management-resident-insured/termination-insurance/index'),
      name: 'terminationInsurance',
      meta: { title: '城乡居民终止参保', icon: 'spot' }
    },
    {
      path: '/family-information-maintenance',
      component: () => import('@/views/insurance-management/management-resident-insured/family-information-maintenance/index'),
      name: 'familyInformationMaintenance',
      meta: { title: '家庭人员信息维护', icon: 'spot' }
    },
    {
      path: '/family-cancellation',
      component: () => import('@/views/insurance-management/management-resident-insured/family-cancellation/index'),
      name: 'familyCancellation',
      meta: { title: '家庭注销', icon: 'spot' }
    },
    {
      path: '/family-migration',
      component: () => import('@/views/insurance-management/management-resident-insured/family-migration/index'),
      name: 'familyMigration',
      meta: { title: '家庭迁移', icon: 'spot' }
    },
    {
      path: '/village-combination',
      component: () => import('@/views/insurance-management/management-resident-insured/village-combination/index'),
      name: 'villageCombination',
      meta: { title: '村组合并', icon: 'spot' }
    }
  ]
}
