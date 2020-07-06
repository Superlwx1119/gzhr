// 直系亲属管理
export default {
  path: 'immediate-family-members-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'immediateFamilyMembersManage',
  meta: {
    title: '直系亲属管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/immediateFamilyMembersManage/maintenance'),
      name: 'immediateFamilyMembersManageMaintenance',
      meta: {
        title: '直系亲属信息维护',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/immediateFamilyMembersManage/audit'),
      name: 'immediateFamilyMembersManageAudit',
      meta: {
        title: '直系亲属信息审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/immediateFamilyMembersManage/query'),
      name: 'immediateFamilyMembersManageQuery',
      meta: {
        title: '直系亲属信息查询',
        icon: 'spot'
      }
    }
  ]
}
