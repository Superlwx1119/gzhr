// 年度救助备案
export default {
  path: 'annual-salvage-filing',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'annualSalvageFiling',
  meta: {
    title: '年度救助备案',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/annualSalvageFiling/maintenance'),
      name: 'annualSalvageFilingMaintenance',
      meta: {
        title: '年度救助备案',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/annualSalvageFiling/audit'),
      name: 'annualSalvageFilingAudit',
      meta: {
        title: '年度救助备案审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/annualSalvageFiling/query'),
      name: 'annualSalvageFilingQuery',
      meta: {
        title: '年度救助备案查询',
        icon: 'spot'
      }
    }
  ]
}
