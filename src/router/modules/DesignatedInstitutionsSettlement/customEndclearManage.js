export default {
  path: '/custom-endclear-manage',
  component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/index'),
  name: 'CustomEndclearManage',
  meta: { title: '年终清算管理(定制版)', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'params-set',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/params-set/index'),
      name: 'ParamsSet',
      meta: { title: '清算参数设置', icon: '' }
    },
    {
      path: 'params-audit',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/params-audit/index'),
      name: 'ParamsAudit',
      meta: { title: '清算参数审核', icon: '' }
    },
    {
      path: 'data-input',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/data-input/index'),
      name: 'DataInput',
      meta: { title: '清算补拨补扣数据录入', icon: '' }
    },
    {
      path: 'data-audit',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/data-audit/index'),
      name: 'DataAudit',
      meta: { title: '清算补拨补扣数据审核', icon: '' }
    },
    {
      path: 'search-import',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/search-import/index'),
      name: 'SearchImport',
      meta: { title: '零报数据查询与导入', icon: '' }
    },
    {
      path: 'clear-declare',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/clear-declare/index'),
      name: 'ClearDeclare',
      meta: { title: '年度清算申报', icon: '' }
    },
    {
      path: 'make-clear-table',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/make-clear-table/index'),
      name: 'MakeClearTable',
      meta: { title: '制作年度清算支付表', icon: '' }
    },
    {
      path: 'recheck-clear-table',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/recheck-clear-table/index'),
      name: 'RecheckClearTable',
      meta: { title: '复核年度清算支付表', icon: '' }
    },
    {
      path: 'medical-lead-sign',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/medical-lead-sign/index'),
      name: 'MedicalLeadSign',
      meta: { title: '年度清算医疗费领导审签', icon: '' }
    },
    {
      path: 'twice-clear-summary',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/twice-clear-summary/index'),
      name: 'TwiceClearSummary',
      meta: { title: '年度清算二次汇总', icon: '' }
    },
    {
      path: 'twice-summary-sign',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/twice-summary-sign/index'),
      name: 'TwiceSummarySign',
      meta: { title: '年度清算二次汇总审签', icon: '' }
    },
    {
      path: 'data-search',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/data-search/index'),
      name: 'DataSearch',
      meta: { title: '年度清算数据查询', icon: '' }
    },
    {
      path: 'simulate-clear',
      component: () => import('@/views/designated-institutions-settlement/custom-endclear-manage/simulate-clear/index'),
      name: 'SimulateClear',
      meta: { title: '年终模拟清算', icon: '' }
    }
  ]
}
