export default {
  path: '/appropriation-summary',
  component: () => import('@/views/offsite-treatment/appropriation-summary'),
  name: 'appropriationSummary',
  meta: { title: '拨付汇总', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'summary',
      component: () => import('@/views/offsite-treatment/appropriation-summary/summary'),
      name: 'offsiteappropriationSummary',
      meta: { title: '省内异地拨付汇总', icon: 'spot' }
    }
  ]
}

