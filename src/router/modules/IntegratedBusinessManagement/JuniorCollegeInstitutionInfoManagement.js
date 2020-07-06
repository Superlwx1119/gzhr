export default {
  path: '/junior-college-institution-info-management',
  component: () => import('@/views/Integrated-business-management/junior-college-institution-info-management/index'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '大中专院校信息管理', icon: '' },
  children: [
    {
      path: 'special-funds-checklist-declare',
      component: () => import('@/views/Integrated-business-management/junior-college-institution-info-management/special-funds-checklist-declare/index'),
      name: 'SpecialFundsChecklistDeclare',
      meta: { title: '专项资金核定表申报', icon: 'spot' }
    },
    {
      path: 'student-info-query',
      component: () => import('@/views/Integrated-business-management/junior-college-institution-info-management/student-info-query/index'),
      name: 'StudentInfoQuery',
      meta: { title: '大中专学生信息查询', icon: 'spot' }
    },
    {
      path: 'make-special-funds-checklist',
      component: () => import('@/views/Integrated-business-management/junior-college-institution-info-management/make-special-funds-checklist/index'),
      name: 'MakeSpecialFundsChecklist',
      meta: { title: '制作专项资金核定表', icon: 'spot' }
    },
    {
      path: 'review-special-funds-checklist',
      component: () => import('@/views/Integrated-business-management/junior-college-institution-info-management/review-special-funds-checklist/index'),
      name: 'ReviewSpecialFundsChecklist',
      meta: { title: '审定专项资金核定表', icon: 'spot' }
    },
    {
      path: 'special-funds-checklist-collective-review',
      component: () => import('@/views/Integrated-business-management/junior-college-institution-info-management/special-funds-checklist-collective-review/index'),
      name: 'SpecialFundsChecklistCollectiveReview',
      meta: { title: '专项资金核定表汇总审签', icon: 'spot' }
    },
    {
      path: 'special-funds-checklist-send',
      component: () => import('@/views/Integrated-business-management/junior-college-institution-info-management/special-funds-checklist-send/index'),
      name: 'SpecialFundsChecklistSend',
      meta: { title: '专项资金核定表发送', icon: 'spot' }
    }
  ]
}
