// 门诊两病管理
export default {
  path: 'outpatient-two-diseases-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'outpatientTwoDiseasesManage',
  meta: {
    title: '门诊两病管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/outpatientTwoDiseasesManage/maintenance'),
      name: 'outpatientTwoDiseasesManageMaintenance',
      meta: {
        title: '门诊两病管理申请',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/outpatientTwoDiseasesManage/audit'),
      name: 'outpatientTwoDiseasesManageAudit',
      meta: {
        title: '门诊两病管理申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/outpatientTwoDiseasesManage/query'),
      name: 'outpatientTwoDiseasesManageQuery',
      meta: {
        title: '门诊两病管理申请查询',
        icon: 'spot'
      }
    }
  ]
}
