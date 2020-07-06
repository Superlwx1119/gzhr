//  居民缴费日结核查管理
export default {
  path: '/residents-day-pay-confirm',
  component: () => import('@/views/residents-pay-manage/residents-day-pay-confirm/index'),
  name: 'residentsDayPayConfirm',
  meta: { title: '城乡居民缴费日结核查确认', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'daily-verification-and-confirm',
      component: () => import('@/views/residents-pay-manage/residents-day-pay-confirm/daily-verification-and-confirm/index'),
      name: 'dailyVerificationAndConfirm',
      meta: { title: '城乡居民缴费日结核查确认', icon: 'spot' }
    }
  ]
}
