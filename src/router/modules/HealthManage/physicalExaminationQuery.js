export default {
  path: '/physical-examination-query',
  component: () => import('@/views/health-manage/physical-examination-query/index'),
  redirect: 'noRedirect',
  name: 'physicalExaminationQuery',
  alwaysShow: true,
  meta: { title: '体检信息查询管理', icon: 'example' },
  children: [
    {
      path: 'info-query',
      component: () => import('@/views/health-manage/physical-examination-query/info-query/index'),
      name: 'physicalExaminationInfoQuery',
      meta: { title: '体检业务信息查询', icon: 'spot' }
    }
  ]
}
