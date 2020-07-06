// 转诊转院管理
export default {
  path: 'referral-referrals-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'referralReferralsManage',
  meta: {
    title: '转诊转院管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/referralReferralsManage/maintenance'),
      name: 'referralReferralsManageMaintenance',
      meta: {
        title: '转诊转院维护',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/referralReferralsManage/audit'),
      name: 'referralReferralsManageAudit',
      meta: {
        title: '转诊转院登记审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/referralReferralsManage/query'),
      name: 'referralReferralsManageQuery',
      meta: {
        title: '转诊转院登记查询',
        icon: 'spot'
      }
    }
  ]
}
