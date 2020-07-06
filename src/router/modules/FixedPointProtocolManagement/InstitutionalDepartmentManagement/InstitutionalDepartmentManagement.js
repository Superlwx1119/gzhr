export default {
  path: '/institutional-department-management',
  name: 'institutionalDepartmentManagement',
  component: () => import('@/views/fixed-point-protocol-management/institutional-department-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点医疗机构科室管理', icon: '' },
  children: [
    {
      path: 'institutional-department-review',
      component: () => import('@/views/fixed-point-protocol-management/institutional-department-management/department-info-review/index'),
      name: 'departmentInfoReview',
      meta: { title: '定点医疗机构科室信息审核', icon: 'spot' }
    },
    {
      path: 'institutional-department-query',
      component: () => import('@/views/fixed-point-protocol-management/institutional-department-management/department-info-query/index'),
      name: 'departmentInfoQuery',
      meta: { title: '定点医疗机构科室信息查询', icon: 'spot' }
    }
  ]
}
