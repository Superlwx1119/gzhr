export default {
  path: '/care-information-query',
  component: () => import('@/views/center-long-care-ins-manage/care-information-query/index'),
  name: 'CareInformationQuery',
  meta: { title: '长护信息查询', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'personal-long-term-care-business',
      component: () => import('@/views/center-long-care-ins-manage/care-information-query/personal-long-term-care-business/index'),
      name: 'PersonalLongTermCareBusiness',
      meta: { title: '个人长护业务信息查询', icon: 'spot' }
    },
    {
      path: 'basic-information-inquiry',
      component: () => import('@/views/center-long-care-ins-manage/care-information-query/basic-information-inquiry/index'),
      name: 'BasicInfomationInquiry',
      meta: { title: '长护机构基本信息查询', icon: 'spot' }
    },
    {
      path: 'cost-inquiry',
      component: () => import('@/views/center-long-care-ins-manage/care-information-query/cost-inquiry/index'),
      name: 'CostInquiry',
      meta: { title: '长护机构费用查询', icon: 'spot' }
    },
    {
      path: 'personnel-information-query',
      component: () => import('@/views/center-long-care-ins-manage/care-information-query/personnel-information-query/index'),
      name: 'PersonnelInformationQuery',
      meta: { title: '长护机构人员信息查询', icon: 'spot' }
    },
    {
      path: 'personnel-list-query',
      component: () => import('@/views/center-long-care-ins-manage/care-information-query/personnel-list-query/index'),
      name: 'PersonnelListQuery',
      meta: { title: '长护机构人员名单查询', icon: 'spot' }
    },
    {
      path: 'insured-information-query',
      component: () => import('@/views/center-long-care-ins-manage/care-information-query/insured-information-query/index'),
      name: 'InsuredInformationQuery',
      meta: { title: '长护参保信息查询', icon: 'spot' }
    },
    {
      path: 'business-statistics-query',
      component: () => import('@/views/center-long-care-ins-manage/care-information-query/business-statistics-query/index'),
      name: 'BusinessStatisticsQuery',
      meta: { title: '长护业务统计查询', icon: 'spot' }
    },
    {
      path: 'insured-person-information-query',
      component: () => import('@/views/center-long-care-ins-manage/care-information-query/insured-person-information-query/index'),
      name: 'InsuredPersonInformationQuery',
      meta: { title: '长护参保人员信息查询', icon: 'spot' }
    }
  ]
}
