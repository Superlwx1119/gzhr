export default {
  path: '/physical-examination-business',
  component: () => import('@/views/health-manage/physical-examination-business/index'),
  redirect: 'noRedirect',
  name: 'physicalExaminationBusiness',
  alwaysShow: true,
  meta: { title: '体检业务管理', icon: 'example' },
  children: [
    {
      path: 'people-apply',
      component: () => import('@/views/health-manage/physical-examination-business/people-apply/index'),
      name: 'peopleApply',
      meta: { title: '体检人员申请', icon: 'spot' }
    },
    {
      path: 'people-apply-audit',
      component: () => import('@/views/health-manage/physical-examination-business/people-apply-audit/index'),
      name: 'peopleApplyAudit',
      meta: { title: '体检人员申请审核', icon: 'spot' }
    },
    {
      path: 'people-apply-query',
      component: () => import('@/views/health-manage/physical-examination-business/people-apply-query/index'),
      name: 'peopleApplyQuery',
      meta: { title: '体检人员申请审核查询', icon: 'spot' }
    },
    {
      path: 'company-and-people',
      component: () => import('@/views/health-manage/physical-examination-business/company-and-people/index'),
      name: 'companyAndPeople',
      meta: { title: '体检单位及人员核定', icon: 'spot' }
    },
    {
      path: 'company-and-people-query',
      component: () => import('@/views/health-manage/physical-examination-business/company-and-people-query/index'),
      name: 'companyAndPeopleQuery',
      meta: { title: '体检单位及人员核定查询', icon: 'spot' }
    }
  ]
}
