//  居民应缴征收方式调整
export default {
  path: '/residents-levy-way',
  component: () => import('@/views/residents-pay-manage/residents-levy-way/index'),
  name: 'residentsLevyWay',
  meta: { title: '居民应缴征收方式调整', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'levy-way-adjust',
      component: () => import('@/views/residents-pay-manage/residents-levy-way/levy-way-adjust/index'),
      name: 'levyWayAdjust',
      meta: { title: '居民应缴征收方式调整', icon: 'spot' }
    }
  ]
}
