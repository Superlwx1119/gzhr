// 医保待遇管理
export default {
  path: '/medicare-treatment',
  component: () => import('@/views/Integrated-business-management/medicare-treatment/index'),
  redirect: '/medicare-treatment/medicare-treatment-query',
  alwaysShow: true,
  meta: { title: '医保待遇管理', icon: '' },
  children: [
    {
      path: 'medicare-treatment-query',
      component: () => import('@/views/Integrated-business-management/medicare-treatment/medicare-treatment-query/index'),
      name: 'medicareTreatmentQuery',
      meta: { title: '医保待遇申办查询', icon: 'spot' }
    },
    {
      path: 'medicare-treatment-trial',
      component: () => import('@/views/Integrated-business-management/medicare-treatment/medicare-treatment-trial/index'),
      name: 'medicareTreatmentTrial',
      meta: { title: '医保待遇申办初审', icon: 'spot' }
    },
    {
      path: 'medicare-treatment-review',
      component: () => import('@/views/Integrated-business-management/medicare-treatment/medicare-treatment-review/index'),
      name: 'medicareTreatmentReview',
      meta: { title: '医保待遇申办复审', icon: 'spot' }
    }
  ]
}
