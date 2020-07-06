export default {
  path: '/signed',
  component: () => import('@/views/studentInfo/signed'),
  name: 'signed',
  meta: { title: '大中专院校协议签订', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/studentInfo/signed/maintenance/index'),
      name: 'maintenance',
      meta: { title: '大中专院校协议签订维护', icon: 'spot' }
    },
    {
      path: 'signedSelect',
      component: () => import('@/views/studentInfo/signed/signedSelect/index'),
      name: 'signedSelect',
      meta: { title: '大中专院校协议签订查询', icon: 'spot' }
    }
  ]
}
