//  聘用合同管理
import Layout from '@/layout'
export default {
  path: 'employment-contract-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '聘用合同管理', icon: 'example' },
  children: [
    {
      path: '/employment-contract-apply',
      component: () => import('@/views/employment-contract-management/employment-contract-apply/index'),
      name: 'EmploymentContractApply',
      meta: { title: '聘用合同申报', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'employment-contract-apply',
          component: () => import('@/views/employment-contract-management/employment-contract-apply/index'),
          name: 'EmploymentContractApply',
          meta: { title: '聘用合同申报', icon: '' }
        }
      ]
    },
    {
      path: '/employment-contract-audit',
      component: () => import('@/views/employment-contract-management/employment-contract-audit/index'),
      name: 'EmploymentContractAudit',
      meta: { title: '聘用合同审核', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'employment-contract-audit',
          component: () => import('@/views/employment-contract-management/employment-contract-audit/index'),
          name: 'EmploymentContractAudit',
          meta: { title: '聘用合同审核', icon: '' }
        }
      ]
    },
    {
      path: '/employment-contract-approve',
      component: () => import('@/views/employment-contract-management/employment-contract-approve/index'),
      name: 'EmploymentContractApprove',
      meta: { title: '聘用合同核准', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'employment-contract-approve',
          component: () => import('@/views/employment-contract-management/employment-contract-approve/index'),
          name: 'EmploymentContractApprove',
          meta: { title: '聘用合同核准', icon: '' }
        }
      ]
    },
    {
      path: '/employment-contract-search',
      component: () => import('@/views/employment-contract-management/employment-contract-search/index'),
      name: 'EmploymentContractSearch',
      meta: { title: '聘用合同查询', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'employment-contract-search',
          component: () => import('@/views/employment-contract-management/employment-contract-search/index'),
          name: 'EmploymentContractSearch',
          meta: { title: '聘用合同查询', icon: '' }
        }
      ]
    }
  ]
}
