export default {
  path: '/grants-management',
  component: () => import('@/views/Integrated-business-management/grants-management/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '城乡居民医保政府资助金管理', icon: '' },
  children: [
    {
      path: 'apply-form',
      component: () => import('@/views/Integrated-business-management/grants-management/apply-form/index'),
      name: 'applyForm',
      meta: { title: '城乡居民医疗保险应收政府资助金剔除请款表', icon: 'spot' }
    },
    {
      path: 'gather-prepare-document',
      component: () => import('@/views/Integrated-business-management/grants-management/gather-prepare-document/index'),
      name: 'gatherPrepareDocument',
      meta: { title: '城乡居民医疗保险应收政府资助金清算汇总表制单', icon: 'spot' }
    }
  ]
}
