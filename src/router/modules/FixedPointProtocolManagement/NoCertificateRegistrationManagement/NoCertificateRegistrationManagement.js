export default {
  path: '/no-certificate-registration-management',
  name: 'noCertificateRegistrationManagement',
  component: () => import('@/views/fixed-point-protocol-management/no-certificate-registration-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '无医保凭证结算备案登记管理', icon: '' },
  children: [
    {
      path: 'no-certificate-registration-register',
      component: () => import('@/views/fixed-point-protocol-management/no-certificate-registration-management/no-certificate-registration-register/index'),
      name: 'noCertificateRegistrationRegister',
      meta: { title: '无医保凭证结算备案登记', icon: 'spot' }
    },
    {
      path: 'no-certificate-registration-review',
      component: () => import('@/views/fixed-point-protocol-management/no-certificate-registration-management/no-certificate-registration-review/index'),
      name: 'noCertificateRegistrationReview',
      meta: { title: '无医保凭证结算备案登记审核', icon: 'spot' }
    },
    {
      path: 'no-certificate-registration-query',
      component: () => import('@/views/fixed-point-protocol-management/no-certificate-registration-management/no-certificate-registration-query/index'),
      name: 'noCertificateRegistrationQuery',
      meta: { title: '无医保凭证结算备案登记查询', icon: 'spot' }
    }
  ]
}
