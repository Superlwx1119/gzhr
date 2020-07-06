export default {
  path: '/PersonalRightsInterests',
  component: () => import('@/views/PregnancyAllowanceManagement/PersonalRightsInterests'),
  name: '',
  meta: { title: '身孕津贴个人权益单管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'print',
      component: () => import('@/views/PregnancyAllowanceManagement/PersonalRightsInterests/print/index'),
      name: 'print',
      meta: { title: '身孕津贴个人权益单打印', icon: 'spot' }
    }
  ]
}
