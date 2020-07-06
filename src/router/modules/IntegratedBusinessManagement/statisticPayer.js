export default {
  path: '/statistic-payer',
  component: () => import('@/views/Integrated-business-management/statistic-payer/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '城乡居民医保参保缴费人数统计', icon: '' },
  children: [
    {
      path: 'area',
      component: () => import('@/views/Integrated-business-management/statistic-payer/area/index'),
      name: 'statisticPayerArea',
      meta: { title: '广州市各区城乡情况统计', icon: 'spot' }
    },
    {
      path: 'street',
      component: () => import('@/views/Integrated-business-management/statistic-payer/street/index'),
      name: 'statisticPayerStreet',
      meta: { title: '广州市各街镇行政城乡情况统计', icon: 'spot' }
    },
    {
      path: 'school',
      component: () => import('@/views/Integrated-business-management/statistic-payer/school/index'),
      name: 'statisticPayerSchool',
      meta: { title: '大中专和中小学校城乡情况统计', icon: 'spot' }
    }
  ]
}
