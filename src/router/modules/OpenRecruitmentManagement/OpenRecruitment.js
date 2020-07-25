export default {
  path: '/open-recruitment',
  component: () => import('@/views/open-recruitment-management/open-recruitment/index'),
  name: 'OpenRecruitment',
  meta: { title: '公开招聘', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'recruitment-plan-apply',
      component: () => import('@/views/open-recruitment-management/open-recruitment/recruitment-plan-apply/index'),
      name: 'RecruitmentPlanApply',
      meta: { title: '招聘方案申报', icon: 'spot' }
    },
    {
      path: 'recruitment-plan-audit',
      component: () => import('@/views/open-recruitment-management/open-recruitment/recruitment-plan-audit/index'),
      name: 'RecruitmentPlanAudit',
      meta: { title: '招聘方案审核', icon: 'spot' }
    },
    {
      path: 'recruitment-plan-review',
      component: () => import('@/views/open-recruitment-management/open-recruitment/recruitment-plan-review/index'),
      name: 'RecruitmentPlanReview',
      meta: { title: '招聘方案审批', icon: 'spot' }
    },
    {
      path: 'recruitment-plan-record',
      component: () => import('@/views/open-recruitment-management/open-recruitment/recruitment-plan-record/index'),
      name: 'RecruitmentPlanRecord',
      meta: { title: '招聘方案备案', icon: 'spot' }
    },
    {
      path: 'recruitment-plan-search',
      component: () => import('@/views/open-recruitment-management/open-recruitment/recruitment-plan-search/index'),
      name: 'RecruitmentPlanSearch',
      meta: { title: '招聘方案查询', icon: 'spot' }
    }
  ]
}
