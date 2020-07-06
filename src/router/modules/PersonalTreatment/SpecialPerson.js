export default {
  path: '/special-person',
  component: () => import('@/views/personal-treatment/special-person/index'),
  name: 'specialPerson',
  meta: { title: '特殊人群奖励金拨付管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'special-person-bonus-verification',
      component: () => import('@/views/personal-treatment/special-person/special-person-bonus-verification/index'),
      name: 'specialPersonBonusVerification',
      meta: { title: '特殊人群奖励金核定', icon: 'spot' }
    }
  ]
}
