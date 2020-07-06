
export default {
  path: '/insurance-registration-management',
  component: () => import('@/views/insurance-management/insurance-registration-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '参保登记管理', icon: 'example' },
  children: [
    {
      path: '/unit-insurance-registration',
      component: () => import('@/views/insurance-management/insurance-registration-management/unit-insurance-registration/index'),
      name: 'unitInsuranceRegistration',
      meta: { title: '单位参保登记', icon: 'spot' }
    },
    {
      path: '/unit-insurance-review',
      component: () => import('@/views/insurance-management/insurance-registration-management/unit-insurance-review/index'),
      name: 'unitInsuranceReview',
      meta: { title: '单位参保登记审核', icon: 'spot' }
    },
    {
      path: '/workers-insurance-registration',
      component: () => import('@/views/insurance-management/insurance-registration-management/workers-insurance-registration/index'),
      name: 'workersInsuranceRegistration',
      meta: { title: '职工参保登记', icon: 'spot' }
    },
    {
      path: '/workers-insurance-review',
      component: () => import('@/views/insurance-management/insurance-registration-management/workers-insurance-review/index'),
      name: 'workersInsuranceReview',
      meta: { title: '职工参保登记复核', icon: 'spot' }
    },
    {
      path: '/flexible-employees-insurance-registration',
      component: () => import('@/views/insurance-management/insurance-registration-management/flexible-employees-insurance-registration/index'),
      name: 'flexibleEmployeesInsuranceRegistration',
      meta: { title: '灵活就业人员参保登记', icon: 'spot' }
    },
    {
      path: '/flexible-employees-insurance-review',
      component: () => import('@/views/insurance-management/insurance-registration-management/flexible-employees-insurance-review/index'),
      name: 'flexibleEmployeesInsuranceReview',
      meta: { title: '灵活就业人员参保登记复核', icon: 'spot' }
    }
  ]
}
