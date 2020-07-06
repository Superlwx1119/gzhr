// 家庭病床管理
export default {
  path: 'family-bed-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'familyBedManage',
  meta: {
    title: '家庭病床管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/familyBedManage/maintenance'),
      name: 'familyBedManageMaintenance',
      meta: {
        title: '家庭病床登记',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/familyBedManage/audit'),
      name: 'familyBedManageAudit',
      meta: {
        title: '家庭病床登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/familyBedManage/query'),
      name: 'familyBedManageQuery',
      meta: {
        title: '家庭病床登记查询',
        icon: 'spot'
      }
    }
  ]
}
