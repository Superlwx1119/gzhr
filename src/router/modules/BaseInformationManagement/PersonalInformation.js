export default {
  path: '/personal-information',
  component: () => import('@/views/base-information-management/personal-information/index'),
  name: 'personalInformation',
  meta: { title: '人员信息管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'civil-servants',
      component: () => import('@/views/base-information-management/personal-information/civil-servants/index'),
      name: 'specialPersonBonusVerification',
      meta: { title: '公务员名册', icon: 'spot' }
    }
    // {
    //   path: 'civil-servants',
    //   component: () => import('@/views/base-information-management/personal-information/civil-servants/index'),
    //   name: 'specialPersonBonusVerification',
    //   meta: { title: '人员进出', icon: 'spot' }
    // },
    // {
    //   path: 'civil-servants',
    //   component: () => import('@/views/base-information-management/personal-information/civil-servants/index'),
    //   name: 'specialPersonBonusVerification',
    //   meta: { title: '人员退离', icon: 'spot' }
    // }
  ]
}
