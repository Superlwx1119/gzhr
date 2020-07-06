export default {
  path: '/info-manage-long-term-care-ins',
  component: () => import('@/views/center-long-care-ins-manage/info-manage-long-term-care-ins/index'),
  name: 'InfoManageLongTermCareIns',
  meta: { title: '长护机构信息管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'information-maintenance',
      component: () => import('@/views/center-long-care-ins-manage/info-manage-long-term-care-ins/information-maintenance/index'),
      name: 'InfomationMaintenance',
      meta: { title: '长护机构信息维护', icon: 'spot' }
    },
    {
      path: 'infomation-review',
      component: () => import('@/views/center-long-care-ins-manage/info-manage-long-term-care-ins/infomation-review/index'),
      name: 'InfomationReview',
      meta: { title: '长护机构信息审核', icon: 'spot' }
    },
    {
      path: 'department-infomation-review',
      component: () => import('@/views/center-long-care-ins-manage/info-manage-long-term-care-ins/department-infomation-review/index'),
      name: 'DepartmentInfomationReview',
      meta: { title: '长护机构科室信息审核', icon: 'spot' }
    },
    {
      path: 'entry-of-list-of-violators',
      component: () => import('@/views/center-long-care-ins-manage/info-manage-long-term-care-ins/entry-of-list-of-violators/index'),
      name: 'EntryOfListOfViolators',
      meta: { title: '违规人员名单录入', icon: 'spot' }
    },
    {
      path: 'review-of-list-of-violators',
      component: () => import('@/views/center-long-care-ins-manage/info-manage-long-term-care-ins/review-of-list-of-violators/index'),
      name: 'ReviewOfListOfViolators',
      meta: { title: '违规人员名单审核', icon: 'spot' }
    },
    {
      path: 'info-maint-care-organization',
      component: () => import('@/views/center-long-care-ins-manage/info-manage-long-term-care-ins/info-maint-care-organization/index'),
      name: 'InfoMaintCareOrganization',
      meta: { title: '长护机构信息维护日志', icon: 'spot' }
    }
  ]
}
