export default {
  path: '/personal-information',
  component: () => import('@/views/base-information-management/personal-information/index'),
  name: 'personalInformation',
  meta: { title: '人员信息管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'staff-registration',
      component: () => import('@/views/base-information-management/personal-information/staff-registration/index'),
      name: 'staffRegistration',
      meta: { title: '人员登记', icon: 'spot' }
    },
    {
      path: 'positive-management',
      component: () => import('@/views/base-information-management/personal-information/positive-management/index'),
      name: 'positiveManagement',
      meta: { title: '转正管理', icon: 'spot' }
    },
    {
      path: 'dimission-management',
      component: () => import('@/views/base-information-management/personal-information/dimission-management/index'),
      name: 'dimissionManagement',
      meta: { title: '离退管理', icon: 'spot' }
    },
    {
      path: 'exit-management',
      component: () => import('@/views/base-information-management/personal-information/exit-management/index'),
      name: 'exitManagement',
      meta: { title: '退出管理', icon: 'spot' }
    },
    {
      path: 'new-staff-audit',
      component: () => import('@/views/base-information-management/personal-information/new-staff-audit/index'),
      name: 'newStaggAudit',
      meta: { title: '新进人员审核', icon: 'spot' }
    },
    {
      path: 'dimission-audit',
      component: () => import('@/views/base-information-management/personal-information/dimission-audit/index'),
      name: 'dimissionAudit',
      meta: { title: '人员离退审核', icon: 'spot' }
    },
    {
      path: 'exit-audit',
      component: () => import('@/views/base-information-management/personal-information/exit-audit/index'),
      name: 'exitAudit',
      meta: { title: '人员退出审核', icon: 'spot' }
    },
    {
      path: 'information-management',
      component: () => import('@/views/base-information-management/personal-information/information-management/index'),
      name: 'informationManagement',
      meta: { title: '人员信息管理', icon: 'spot' }
    }
  ]
}
