export default {
  path: '/month-settlement',
  component: () => import('@/views/designated-institutions-settlement/month-settlement/index'),
  name: 'monthSettlement',
  meta: { title: '月结算管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'month-settlement-declare',
      component: () => import('@/views/designated-institutions-settlement/month-settlement/month-settlement-declare/index'),
      name: 'monthSettlementDeclare',
      meta: { title: '月结申报', icon: 'spot' }
    },
    {
      path: 'declare-accept',
      component: () => import('@/views/designated-institutions-settlement/month-settlement/declare-accept/index'),
      name: 'declareAccept',
      meta: { title: '申报受理', icon: 'spot' }
    },
    {
      path: 'declare-confirm',
      component: () => import('@/views/designated-institutions-settlement/month-settlement/declare-confirm/index'),
      name: 'declareConfirm',
      meta: { title: '申报确认(医院端)', icon: 'spot' }
    },
    {
      path: 'settlement-allocated-documents',
      component: () => import('@/views/designated-institutions-settlement/month-settlement/settlement-allocated-documents/index'),
      name: 'settlementAllocatedDocuments',
      meta: { title: '制作结算拨付单', icon: 'spot' }
    },
    {
      path: 'settlement-allocated-documents-audit',
      component: () => import('@/views/designated-institutions-settlement/month-settlement/settlement-allocated-documents-audit/index'),
      name: 'settlementAllocatedDocumentsAudit',
      meta: { title: '结算拨付单审核', icon: 'spot' }
    },
    {
      path: 'allocated-query-confirm',
      component: () => import('@/views/designated-institutions-settlement/month-settlement/allocated-query-confirm/index'),
      name: 'allocatedQueryConfirm',
      meta: { title: '拨付查询和确认(医院端)', icon: 'spot' }
    },
    {
      path: 'settlement-allocated-registration',
      component: () => import('@/views/designated-institutions-settlement/month-settlement/settlement-allocated-registration/index'),
      name: 'settlementAllocatedRegistration',
      meta: { title: '结算拨付登记', icon: 'spot' }
    },
    {
      path: 'settlement-allocated-documents-query',
      component: () => import('@/views/designated-institutions-settlement/month-settlement/settlement-allocated-documents-query/index'),
      name: 'settlementAllocatedDocumentsQuery',
      meta: { title: '结算拨付单查询', icon: 'spot' }
    }
  ]
}
