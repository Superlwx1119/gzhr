// export default {
//   path: '/long-ins-eva-bus-manage',
//   component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/index'),
//   name: 'LongInsEvaBusManage',
//   meta: { title: '长期护理保险鉴定评估业务管理', icon: '' },
//   redirect: 'noRedirect',
//   alwaysShow: true,
//   children: []
// }

export default [
  {
    path: '/assessment-declare-accept',
    component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/assessment-declare-accept/index'),
    name: 'AssessmentDeclareAccept',
    meta: { title: '鉴定评估申报受理', icon: 'spot' }
  },
  {
    path: '/scene-evaluation-plan',
    component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/scene-evaluation-plan/index'),
    name: 'SceneEvaluationPlan',
    meta: { title: '现场评估计划制定', icon: 'spot' }
  },
  {
    path: '/scene-evaluation-check',
    component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/scene-evaluation-check/index'),
    name: 'SceneEvaluationCheck',
    meta: { title: '现场评估结果核对', icon: 'spot' }
  },
  {
    path: '/scene-eva-plan-submit',
    component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/scene-eva-plan-submit/index'),
    name: 'sceneEvaPlanSubmit',
    meta: { title: '现场评估计划完成提交', icon: 'spot' }
  },
  {
    path: '/check-by-checking-body',
    component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/check-by-checking-body/index'),
    name: 'checkByCheckingBody',
    meta: { title: '专家复核结果核对', icon: 'spot' }
  },
  {
    path: '/batch-check',
    component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/batch-check/index'),
    name: 'batchCheck',
    meta: { title: '核对公示批次和非公示批次', icon: 'spot' }
  },
  {
    path: '/issue-infor-enquiry',
    component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/issue-infor-enquiry/index'),
    name: 'IssueInforEnquiry',
    meta: { title: '签发信息查询', icon: 'spot' }
  },
  {
    path: '/appraisal-eval-record-query',
    component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/appraisal-eval-record-query/index'),
    name: 'AppraisalEvalRecordQuery',
    meta: { title: '鉴定评估记录查询', icon: 'spot' }
  },
  {
    path: '/appraisal-eval-statistical',
    component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/appraisal-eval-statistical/index'),
    name: 'AppraisalEvalStatistical',
    meta: { title: '鉴定评估统计分析', icon: 'spot' }
  }
]
