export default {
  path: '/training-management',
  component: () => import('@/views/personel-management/training-management/index'),
  name: 'TrialManagement',
  meta: { title: '培训管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: false,
  children: [
    {
      path: 'training-management',
      component: () => import('@/views/personel-management/training-management/index'),
      name: 'TrialManagement',
      meta: { title: '培训管理', icon: '' }
    }
  ]
}
