import Layout from '@/layout'
export default {
  path: '/insurance-relationship-transfer',
  component: Layout,
  alwaysShow: true,
  redirect: 'noRedirect',
  meta: { title: '医保关系转移接续', icon: 'example' },
  children: [
    {
      path: '/transfer-platform-countries-management',
      component: () => import('@/views/insurance-relationship-transfer/transfer-platform-countries-management/index'),
      name: 'medicalRescueListManagement',
      meta: { title: '转移平台国家管理', icon: 'spot' },
      redirect: 'noRedirect',
      alwaysShow: true,
      children: [
        {
          path: 'apply-upload',
          component: () => import('@/views/insurance-relationship-transfer/transfer-platform-countries-management/apply-upload/index'),
          name: 'applyUpload',
          meta: { title: '转移申请通知单上传', icon: 'spot' }
        },
        {
          path: 'apply-download',
          component: () => import('@/views/insurance-relationship-transfer/transfer-platform-countries-management/apply-download/index'),
          name: 'applyDownload',
          meta: { title: '转移申请通知单下载', icon: 'spot' }
        },
        {
          path: 'pay-upload',
          component: () => import('@/views/insurance-relationship-transfer/transfer-platform-countries-management/pay-upload/index'),
          name: 'payUpload',
          meta: { title: '缴费年限和缴费时段上传', icon: 'spot' }
        },
        {
          path: 'pay-download',
          component: () => import('@/views/insurance-relationship-transfer/transfer-platform-countries-management/pay-download/index'),
          name: 'payDownload',
          meta: { title: '缴费年限和缴费时段下载', icon: 'spot' }
        },
        {
          path: 'feedback-upload',
          component: () => import('@/views/insurance-relationship-transfer/transfer-platform-countries-management/feedback-upload/index'),
          name: 'feedbackUpload',
          meta: { title: '办结反馈上传', icon: 'spot' }
        },
        {
          path: 'pay-error-correction-upload',
          component: () => import('@/views/insurance-relationship-transfer/transfer-platform-countries-management/pay-error-correction-upload/index'),
          name: 'payErrorCorrectionUpload',
          meta: { title: '缴费年限和缴费时段纠错上传', icon: 'spot' }
        }
      ]
    },
    {
      path: '/insurance-relationship-inside-management',
      component: () => import('@/views/insurance-relationship-transfer/insurance-relationship-inside-management/index'),
      name: 'insuranceRelationshipInsideManagement',
      meta: { title: '医保关系转入管理', icon: 'spot' },
      redirect: 'noRedirect',
      alwaysShow: true,
      children: [
        {
          path: 'relationship-add-edit',
          component: () => import('@/views/insurance-relationship-transfer/insurance-relationship-inside-management/relationship-add-edit/index'),
          name: 'relationshipOutsideAddEdit',
          meta: { title: '医保关系转入录入及修改', icon: 'spot' }
        },
        {
          path: 'relationship-audit',
          component: () => import('@/views/insurance-relationship-transfer/insurance-relationship-inside-management/relationship-audit/index'),
          name: 'relationshipInsideAudit',
          meta: { title: '医保关系转入审核', icon: 'spot' }
        },
        {
          path: 'message-search',
          component: () => import('@/views/insurance-relationship-transfer/insurance-relationship-inside-management/message-search/index'),
          name: 'insideMessageSearch',
          meta: { title: '转入信息查询', icon: 'spot' }
        },
        {
          path: 'actual-personal-message-search',
          component: () => import('@/views/insurance-relationship-transfer/insurance-relationship-inside-management/actual-personal-message-search/index'),
          name: 'actualInsidePersonalMessageSearch',
          meta: { title: '实际转入个账查询与确认', icon: 'spot' }
        }
      ]
    },
    {
      path: '/insurance-relationship-outside-management',
      component: () => import('@/views/insurance-relationship-transfer/insurance-relationship-outside-management/index'),
      name: 'insuranceRelationshipOutsideManagement',
      meta: { title: '医保关系转出管理', icon: 'spot' },
      redirect: 'noRedirect',
      alwaysShow: true,
      children: [
        {
          path: 'relationship-add-edit',
          component: () => import('@/views/insurance-relationship-transfer/insurance-relationship-outside-management/relationship-add-edit/index'),
          name: 'relationshipInsideAddEdit',
          meta: { title: '医保关系转出录入及修改', icon: 'spot' }
        },
        {
          path: 'relationship-audit',
          component: () => import('@/views/insurance-relationship-transfer/insurance-relationship-outside-management/relationship-audit/index'),
          name: 'relationshipOutsideAudit',
          meta: { title: '医保关系转出审核', icon: 'spot' }
        },
        {
          path: 'message-search',
          component: () => import('@/views/insurance-relationship-transfer/insurance-relationship-outside-management/message-search/index'),
          name: 'outsideMessageSearch',
          meta: { title: '转出信息查询', icon: 'spot' }
        },
        {
          path: 'actual-personal-message-search',
          component: () => import('@/views/insurance-relationship-transfer/insurance-relationship-outside-management/actual-personal-message-search/index'),
          name: 'actualOutsidePersonalMessageSearch',
          meta: { title: '实际转出个账查询与确认', icon: 'spot' }
        }
      ]
    },
    {
      path: '/integrated-management',
      component: () => import('@/views/insurance-relationship-transfer/integrated-management/index'),
      name: 'transferIntegratedManagement',
      meta: { title: '综合管理', icon: 'spot' },
      redirect: 'noRedirect',
      alwaysShow: true,
      children: [
        {
          path: 'search-statistical',
          component: () => import('@/views/insurance-relationship-transfer/integrated-management/search-statistical/index'),
          name: 'searchStatistical',
          meta: { title: '查询与统计', icon: 'spot' }
        },
        {
          path: 'department-message-maintenance',
          component: () => import('@/views/insurance-relationship-transfer/integrated-management/department-message-maintenance/index'),
          name: 'departmentMessageMaintenance',
          meta: { title: '经办部门信息维护', icon: 'spot' }
        },
        {
          path: 'organization-message-maintenance',
          component: () => import('@/views/insurance-relationship-transfer/integrated-management/organization-message-maintenance/index'),
          name: 'organizationMessageMaintenance',
          meta: { title: '异地机构信息维护', icon: 'spot' }
        },
        {
          path: 'transferData-mail-follow',
          component: () => import('@/views/insurance-relationship-transfer/integrated-management/transferData-mail-follow/index'),
          name: 'transferDataMailFollow',
          meta: { title: '转移资料邮寄与跟进', icon: 'spot' }
        }
      ]
    },
    {
      path: '/inside-personal-money-management',
      component: () => import('@/views/insurance-relationship-transfer/inside-personal-money-management/index'),
      name: 'insidePersonalMoneyManagement',
      meta: { title: '转入个账资金管理', icon: 'spot' },
      redirect: 'noRedirect',
      alwaysShow: true,
      children: [
        {
          path: 'actual-transfer-import',
          component: () => import('@/views/insurance-relationship-transfer/inside-personal-money-management/actual-transfer-import/index'),
          name: 'actualTransferImport',
          meta: { title: '实际转入个账导入', icon: 'spot' }
        },
        {
          path: 'relationship-account-maintenance',
          component: () => import('@/views/insurance-relationship-transfer/inside-personal-money-management/relationship-account-maintenance/index'),
          name: 'relationshipAccountMaintenance',
          meta: { title: '医保关系转入个账接收账户维护', icon: 'spot' }
        }
      ]
    },
    {
      path: '/inside-personal-capital-injection-management',
      component: () => import('@/views/insurance-relationship-transfer/inside-personal-capital-injection-management/index'),
      name: 'integratedPersonalCapitalInjectionManagement',
      meta: { title: '转入个账注资管理', icon: 'spot' },
      redirect: 'noRedirect',
      alwaysShow: true,
      children: [
        {
          path: 'personal-approve-gather',
          component: () => import('@/views/insurance-relationship-transfer/inside-personal-capital-injection-management/personal-approve-gather/index'),
          name: 'personalApproveGather',
          meta: { title: '转入个账核发汇总', icon: 'spot' }
        },
        {
          path: 'personal-capital-injection-audit',
          component: () => import('@/views/insurance-relationship-transfer/inside-personal-capital-injection-management/personal-capital-injection-audit/index'),
          name: 'personalCapitalInjectionAudit',
          meta: { title: '转入个账注资审签', icon: 'spot' }
        },
        {
          path: 'personal-capital-injection-report',
          component: () => import('@/views/insurance-relationship-transfer/inside-personal-capital-injection-management/personal-capital-injection-report/index'),
          name: 'personalCapitalInjectionReport',
          meta: { title: '转入个账注资业务报表', icon: 'spot' }
        }
      ]
    }
  ]
}
