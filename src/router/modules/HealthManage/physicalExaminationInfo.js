export default {
  path: '/physical-examination-info',
  component: () => import('@/views/health-manage/physical-examination-info/index'),
  redirect: 'noRedirect',
  name: 'physicalExaminationInfo',
  alwaysShow: true,
  meta: { title: '体检信息管理', icon: 'example' },
  children: [
    {
      path: 'project-maintenance',
      component: () => import('@/views/health-manage/physical-examination-info/project-maintenance/index'),
      name: 'projectMaintenance',
      meta: { title: '体检项目维护', icon: 'spot' }
    },
    {
      path: 'project-match-audit',
      component: () => import('@/views/health-manage/physical-examination-info/project-match-audit/index'),
      name: 'projectMatchAudit',
      meta: { title: '体检项目匹配审核', icon: 'spot' }
    },
    {
      path: 'project-match-query',
      component: () => import('@/views/health-manage/physical-examination-info/project-match-query/index'),
      name: 'projectMatchQuery',
      meta: { title: '体检项目匹配查询', icon: 'spot' }
    },
    {
      path: 'package-maintenance',
      component: () => import('@/views/health-manage/physical-examination-info/package-maintenance/index'),
      name: 'packageMaintenance',
      meta: { title: '体检套餐维护', icon: 'spot' }
    },
    {
      path: 'agency-agreement-maintenance',
      component: () => import('@/views/health-manage/physical-examination-info/agency-agreement-maintenance/index'),
      name: 'agencyAgreementMaintenance',
      meta: { title: '体检协议机构维护', icon: 'spot' }
    },
    {
      path: '/company-maintenance',
      component: () => import('@/views/health-manage/physical-examination-info/company-maintenance/index'),
      name: 'companyMaintenance',
      meta: { title: '体检单位维护', icon: 'spot' }
    }
  ]
}
