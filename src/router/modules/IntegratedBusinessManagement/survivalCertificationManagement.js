export default {
  path: '/survival-certification-management',
  component: () => import('@/views/Integrated-business-management/survival-certification-management/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '生存认证管理', icon: '' },
  children: [
    {
      path: 'survival-authentication-query',
      component: () => import('@/views/Integrated-business-management/survival-certification-management/survival-authentication-query/index'),
      name: 'survivalAuthenticationQuery',
      meta: { title: '生存认证查询', icon: 'spot' }
    },
    {
      path: 'survival-certification-examination',
      component: () => import('@/views/Integrated-business-management/survival-certification-management/survival-certification-examination/index'),
      name: 'survivalCertificationExamination',
      meta: { title: '生存认证初审', icon: 'spot' }
    }
  ]
}
