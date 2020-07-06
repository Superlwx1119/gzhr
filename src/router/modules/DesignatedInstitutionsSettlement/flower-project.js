export default {
  path: '/flower-project',
  component: () => import('@/views/designated-institutions-settlement/flower-project/index'),
  name: 'FlowerProject',
  meta: { title: '花都试点项目专项资金预拨付', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'make-approved',
      component: () => import('@/views/designated-institutions-settlement/flower-project/make-approved/index'),
      name: 'MakeApproved',
      meta: { title: '制作核定汇总表', icon: '' }
    },
    {
      path: 'review-approved',
      component: () => import('@/views/designated-institutions-settlement/flower-project/review-approved/index'),
      name: 'ReviewApproved',
      meta: { title: '复核核定汇总表', icon: '' }
    },
    {
      path: 'lead-audit',
      component: () => import('@/views/designated-institutions-settlement/flower-project/lead-audit/index'),
      name: 'LeadAudit',
      meta: { title: '领导审签', icon: '' }
    }
  ]
}
