export default {
  path: '/long-guard-point-mechanism',
  component: () => import('@/views/center-long-care-ins-manage/long-guard-point-mechanism/index'),
  name: 'LongGuardPointMechanism',
  meta: { title: '长护定点机构信息查询', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'information-service',
      component: () => import('@/views/center-long-care-ins-manage/long-guard-point-mechanism/information-service/index'),
      name: 'InformationService',
      meta: { title: '长护定点机构信息查询', icon: 'spot' }
    }
  ]
}
