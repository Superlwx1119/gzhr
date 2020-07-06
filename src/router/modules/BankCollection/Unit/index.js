export default {
  path: '/unit',
  component: () => import('@/views/bankCollection/unit'),
  name: 'unit',
  meta: { title: '单位托收管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'signing',
      component: () => import('@/views/bankCollection/unit/signing/index'),
      name: 'signing',
      meta: { title: '单位托收签约', icon: 'spot' }
    },
    {
      path: 'acquired',
      component: () => import('@/views/bankCollection/unit/acquired/index'),
      name: 'acquired',
      meta: { title: '单位托收出盘', icon: 'spot' }
    },
    {
      path: 'backDisk',
      component: () => import('@/views/bankCollection/unit/backDisk/index'),
      name: 'backDisk',
      meta: { title: '单位托收回盘', icon: 'spot' }
    }
  ]
}
