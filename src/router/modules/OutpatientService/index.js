import Layout from '@/layout'
export default {
  path: '/outpatientService',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '门诊统筹包干管理', icon: 'example' },
  children: [
    {
      path: 'management',
      component: () => import('@/views/outpatientService/management/index'),
      name: 'management',
      meta: { title: '包干费用拨付管理', icon: 'spot' }
    },
    {
      path: 'outAudit',
      component: () => import('@/views/outpatientService/outAudit/index'),
      name: 'outAudit',
      meta: { title: '包干费用拨付审核', icon: 'spot' }
    },
    {
      path: 'select',
      component: () => import('@/views/outpatientService/select/index'),
      name: 'select',
      meta: { title: '包干费用拨付查询', icon: 'spot' }
    }
  ]
}
