export default {
  path: '/thirdParty',
  component: () => import('@/views/bankCollection/thirdParty'),
  name: 'thirdParty',
  meta: { title: '第三方代缴', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'capture',
      component: () => import('@/views/bankCollection/thirdParty/capture/index'),
      name: 'capture',
      meta: { title: '第三方代缴', icon: 'spot' }
    },
    {
      path: 'audit',
      component: () => import('@/views/bankCollection/thirdParty/audit/index'),
      name: 'audit',
      meta: { title: '第三方代缴审核', icon: 'spot' }
    }
  ]
}
