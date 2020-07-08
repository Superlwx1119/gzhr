export default {
  path: '/employment-contract',
  component: () => import('@/views/personel-management/employment-contract/index'),
  name: 'OrganizationInformation',
  meta: { title: '聘用合同', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'contract-management',
      component: () => import('@/views/personel-management/employment-contract/contract-management/index'),
      name: 'newOrganizationApply',
      meta: { title: '合同管理', icon: 'spot' }
    },
    {
      path: 'contract-query',
      component: () => import('@/views/personel-management/employment-contract/contract-query/index'),
      name: 'newOrganizationApply',
      meta: { title: '合同查询', icon: 'spot' }
    },
    {
      path: 'expiration-contract-management',
      component: () => import('@/views/personel-management/employment-contract/expiration-contract-management/index'),
      name: 'newOrganizationApply',
      meta: { title: '到期合同管理', icon: 'spot' }
    }
  ]
}
