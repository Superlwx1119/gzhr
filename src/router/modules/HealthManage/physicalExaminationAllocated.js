export default {
  path: '/physical-examination-allocated',
  component: () => import('@/views/health-manage/physical-examination-allocated/index'),
  redirect: 'noRedirect',
  name: 'physicalExaminationAllocated',
  alwaysShow: true,
  meta: { title: '体检拨付管理', icon: 'example' },
  children: [
    {
      path: 'make-documents',
      component: () => import('@/views/health-manage/physical-examination-allocated/make-documents/index'),
      name: 'makeDocuments',
      meta: { title: '制作体检拨付单', icon: 'spot' }
    },
    {
      path: 'documents-audit',
      component: () => import('@/views/health-manage/physical-examination-allocated/documents-audit/index'),
      name: 'documentsAudit',
      meta: { title: '体检拨付单审核', icon: 'spot' }
    },
    {
      path: 'documents-register',
      component: () => import('@/views/health-manage/physical-examination-allocated/documents-register/index'),
      name: 'documentsRegister',
      meta: { title: '体检拨付单登记', icon: 'spot' }
    },
    {
      path: 'documents-query',
      component: () => import('@/views/health-manage/physical-examination-allocated/documents-query/index'),
      name: 'documentsQuery',
      meta: { title: '体检拨付单查询', icon: 'spot' }
    }
  ]
}
