export default {
  path: '/long-ins-eva-bus-manage',
  component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/index'),
  name: 'LongInsEvaBusManage',
  meta: { title: '长期护理保险鉴定评估业务管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'scene-eva-plan-filing',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/scene-eva-plan-filing/index'),
      name: 'SceneEvaPlanFiling',
      meta: { title: '现场评估计划备案', icon: 'spot' }
    },
    {
      path: 'formulation-review-eva-plan',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/formulation-review-eva-plan/index'),
      name: 'FormulationReviewEvaPlan',
      meta: { title: '复核评估计划制定', icon: 'spot' }
    },
    {
      path: 'review-eva-plan',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/review-eva-plan/index'),
      name: 'ReviewEvaPlan',
      meta: { title: '复核评估计划审核', icon: 'spot' }
    },
    {
      path: 'initial-audit-medical-ins-agency',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/initial-audit-medical-ins-agency/index'),
      name: 'InitialAuditMedicalInsAgency',
      meta: { title: '医保经办初审核', icon: 'spot' }
    },
    {
      path: 're-audit-medical-ins-agency',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/re-audit-medical-ins-agency/index'),
      name: 'ReAuditMedicalInsAgency',
      meta: { title: '医保经办复审核', icon: 'spot' }
    },
    {
      path: 'generate-publicity',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/generate-publicity/index'),
      name: 'GeneratePublicity',
      meta: { title: '已生成公示', icon: 'spot' }
    },
    {
      path: 'not-generate-publicity',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/not-generate-publicity/index'),
      name: 'NotGeneratePublicity',
      meta: { title: '未生成公示', icon: 'spot' }
    },
    {
      path: 'enter-leader-approval-date',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/enter-leader-approval-date/index'),
      name: 'EnterLeaderApprovalDate',
      meta: { title: '录入领导审签日期', icon: 'spot' }
    },
    {
      path: 'commercial-ins-company-undertakes-area-manage',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/commercial-ins-company-undertakes-area-manage/index'),
      name: 'CommercialInsCompanyUndertakesAreaManage',
      meta: { title: '商保公司承办片区管理', icon: 'spot' }
    },
    {
      path: 'information-inquiry-commissioner',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/information-inquiry-commissioner/index'),
      name: 'InformationInquiryCommissioner',
      meta: { title: '商保公司专员信息查询', icon: 'spot' }
    },
    {
      path: 'inquiry-appraisal-eva-info-long-nursing',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/inquiry-appraisal-eva-info-long-nursing/index'),
      name: 'InquiryAppraisalEvaInfoLongNursing',
      meta: { title: '长护鉴定评估信息查询', icon: 'spot' }
    },
    {
      path: 'appraisal-eval-account-info-query',
      component: () => import('@/views/center-long-care-ins-manage/long-ins-eva-bus-manage/appraisal-eval-account-info-query/index'),
      name: 'AppraisalEvalAccountInfoQuery',
      meta: { title: '鉴定评估台账信息查询', icon: 'spot' }
    }
  ]
}
