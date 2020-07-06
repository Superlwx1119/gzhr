export default {
  path: '/organization-information',
  component: () => import('@/views/base-information-management/organization-information/index'),
  name: 'OrganizationInformation',
  meta: { title: '单位信息管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'new-organization-apply',
      component: () => import('@/views/base-information-management/organization-information/new-organization-apply/index'),
      name: 'newOrganizationApply',
      meta: { title: '新增单位申报', icon: 'spot' }
    },
    {
      path: 'organization-information-search',
      component: () => import('@/views/base-information-management/organization-information/organization-information-search/index'),
      name: 'organizationInformationSearch',
      meta: { title: '单位信息查询', icon: 'spot' }
    },
    {
      path: 'new-organization-audit',
      component: () => import('@/views/base-information-management/organization-information/new-organization-audit/index'),
      name: 'newOrganizationAudit',
      meta: { title: '新增单位审核', icon: 'spot' }
    },
    {
      path: 'edit-information-search',
      component: () => import('@/views/base-information-management/organization-information/edit-information-search/index'),
      name: 'EditInformationSearch',
      meta: { title: '修改审核查询', icon: 'spot' }
    },
    {
      path: 'organization-information-change',
      component: () => import('@/views/base-information-management/organization-information/organization-information-change/index'),
      name: 'organizationInformationChange',
      meta: { title: '单位信息变更记录', icon: 'spot' }
    }
  ]
}
