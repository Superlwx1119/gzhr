// 第三方责任申请
export default {
  path: 'third-partyliability-app-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'thirdPartyliabilityAppManage',
  meta: {
    title: '第三方责任申请管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/thirdPartyliabilityAppManage/maintenance'),
      name: 'thirdPartyliabilityAppManageMaintenance',
      meta: {
        title: '第三方责任申请维护',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/thirdPartyliabilityAppManage/audit'),
      name: 'thirdPartyliabilityAppManageAudit',
      meta: {
        title: '第三方责任申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/thirdPartyliabilityAppManage/query'),
      name: 'thirdPartyliabilityAppManageQuery',
      meta: {
        title: '第三方责任申请查询',
        icon: 'spot'
      }
    }
  ]
}
