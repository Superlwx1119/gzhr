export default {
  path: '/interview-management',
  component: () => import('@/views/open-recruitment-management/interview-management/index'),
  name: 'InterviewManagement',
  meta: { title: '面试管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'interview-apply',
      component: () => import('@/views/open-recruitment-management/interview-management/interview-apply/index'),
      name: 'InterviewApply',
      meta: { title: '面试申报', icon: 'spot' }
    },
    {
      path: 'interview-audit',
      component: () => import('@/views/open-recruitment-management/interview-management/interview-audit/index'),
      name: 'InterviewAudit',
      meta: { title: '面试审核', icon: 'spot' }
    },
    {
      path: 'interview-review',
      component: () => import('@/views/open-recruitment-management/interview-management/interview-review/index'),
      name: 'InterviewReview',
      meta: { title: '面试审批', icon: 'spot' }
    },
    {
      path: 'interview-record',
      component: () => import('@/views/open-recruitment-management/interview-management/interview-record/index'),
      name: 'InterviewRecord',
      meta: { title: '面试备案', icon: 'spot' }
    },
    {
      path: 'interview-search',
      component: () => import('@/views/open-recruitment-management/interview-management/interview-search/index'),
      name: 'InterviewSearch',
      meta: { title: '面试查询', icon: 'spot' }
    }
  ]
}
