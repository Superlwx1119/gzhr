
export default {
  path: '/management-of-employees',
  component: () => import('@/views/insurance-management/management-of-employees'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '职工参保人员管理', icon: 'example' },
  children: [
    {
      path: '/suspension-payment-insured',
      component: () => import('@/views/insurance-management/management-of-employees/suspension-payment-insured/index'),
      name: 'suspensionPaymentInsured',
      meta: { title: '参保人员暂停缴费', icon: 'spot' }
    },
    {
      path: '/suspension-payment-flexible-employees',
      component: () => import('@/views/insurance-management/management-of-employees/suspension-payment-flexible-employees/index'),
      name: 'suspensionPaymentFlexibleEmployees',
      meta: { title: '灵活就业人员暂停缴费', icon: 'spot' }
    },
    {
      path: '/maintenance-insured-personnel-information',
      component: () => import('@/views/insurance-management/management-of-employees/maintenance-insured-personnel-information/index'),
      name: 'maintenanceInsuredPersonnelInformation',
      meta: { title: '参保人员信息维护', icon: 'spot' }
    },
    {
      path: '/maintenance-review-insured-personnel-info',
      component: () => import('@/views/insurance-management/management-of-employees/maintenance-review-insured-personnel-info/index'),
      name: 'maintenanceReviewInsuredPersonnelInfo',
      meta: { title: '参保人员信息维护复核', icon: 'spot' }
    },
    {
      path: '/transfer-to-retirement',
      component: () => import('@/views/insurance-management/management-of-employees/transfer-to-retirement/index'),
      name: 'transferToRetirement',
      meta: { title: '在职转退休', icon: 'spot' }
    },
    {
      path: '/termination-of-insurance',
      component: () => import('@/views/insurance-management/management-of-employees/termination-of-insurance/index'),
      name: 'terminationOfInsurance',
      meta: { title: '人员终止参保', icon: 'spot' }
    },
    {
      path: '/personnel-change-review',
      component: () => import('@/views/insurance-management/management-of-employees/personnel-change-review/index'),
      name: 'personnelChangeReview',
      meta: { title: '人员变更审核', icon: 'spot' }
    },
    {
      path: '/personnel-change-info-query',
      component: () => import('@/views/insurance-management/management-of-employees/personnel-change-info-query/index'),
      name: 'personnelChangeInfoQuery',
      meta: { title: '人员变更信息查询', icon: 'spot' }
    },
    {
      path: '/personnel-multi-number-consolidation',
      component: () => import('@/views/insurance-management/management-of-employees/personnel-multi-number-consolidation/index'),
      name: 'personnelMultiNumberConsolidation',
      meta: { title: '人员多号合并', icon: 'spot' }
    },
    {
      path: '/audit-personnel',
      component: () => import('@/views/insurance-management/management-of-employees/audit-personnel/index'),
      name: 'auditPersonnel',
      meta: { title: '人员多号合并审核', icon: 'spot' }
    },
    {
      path: '/recognition-deemed-payment-period',
      component: () => import('@/views/insurance-management/management-of-employees/recognition-deemed-payment-period/index'),
      name: 'recognitionDeemedPaymentPeriod',
      meta: { title: '视同缴费年限认定', icon: 'spot' }
    },
    {
      path: '/verification-deemed-payment-period',
      component: () => import('@/views/insurance-management/management-of-employees/verification-deemed-payment-period/index'),
      name: 'verificationDeemedPaymentPeriod',
      meta: { title: '视同缴费年限认定审核', icon: 'spot' }
    },
    {
      path: '/query-confirmation-information-deemed-payment-period',
      component: () => import('@/views/insurance-management/management-of-employees/query-confirmation-information-deemed-payment-period/index'),
      name: 'queryConfirmationInformationDeemedPaymentPeriod',
      meta: { title: '视同缴费年限认定信息查询', icon: 'spot' }
    },
    {
      path: '/identification-special-identity-personnel',
      component: () => import('@/views/insurance-management/management-of-employees/identification-special-identity-personnel/index'),
      name: 'identificationSpecialIdentityPersonnel',
      meta: { title: '人员特殊身份认定', icon: 'spot' }
    },
    {
      path: '/verification-special-identity-personnel',
      component: () => import('@/views/insurance-management/management-of-employees/verification-special-identity-personnel/index'),
      name: 'verificationSpecialIdentityPersonnel',
      meta: { title: '人员特殊身份认定审核', icon: 'spot' }
    },
    {
      path: '/personal-insurance-certificate',
      component: () => import('@/views/insurance-management/management-of-employees/personal-insurance-certificate/index'),
      name: 'personalInsuranceCertificate',
      meta: { title: '个人参保证明', icon: 'spot' }
    }
  ]
}
