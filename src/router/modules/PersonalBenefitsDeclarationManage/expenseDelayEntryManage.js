// 住院费用延期录入管理
export default {
  path: 'expense-delay-entry-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'expenseDelayEntryManage',
  meta: {
    title: '住院费用延期录入管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/expenseDelayEntryManage/maintenance'),
      name: 'expenseDelayEntryManageMaintenance',
      meta: {
        title: '延期录入申请',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/expenseDelayEntryManage/audit'),
      name: 'expenseDelayEntryManageAudit',
      meta: {
        title: '延期录入申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/expenseDelayEntryManage/query'),
      name: 'expenseDelayEntryManageQuery',
      meta: {
        title: '延期录入申请查询',
        icon: 'spot'
      }
    }
  ]
}
