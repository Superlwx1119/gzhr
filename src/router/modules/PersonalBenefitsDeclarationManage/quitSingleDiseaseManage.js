// 退出单病种管理
export default {
  path: 'quit-single-disease-manage',
  component: () => import('@/views/components/childRoutePage'),
  alwaysShow: true,
  name: 'quitSingleDiseaseManage',
  meta: {
    title: '退出单病种管理',
    noCache: true,
    icon: ''
  },
  children: [
    {
      path: 'maintenance',
      component: () => import('@/views/personal-benefits-declaration-manage/quitSingleDiseaseManage/maintenance'),
      name: 'quitSingleDiseaseManageMaintenance',
      meta: {
        title: '退出单病种申请',
        icon: 'spot'
      }
    },
    {
      path: 'audit',
      component: () => import('@/views/personal-benefits-declaration-manage/quitSingleDiseaseManage/audit'),
      name: 'quitSingleDiseaseManageAudit',
      meta: {
        title: '退出单病种申请审核',
        icon: 'spot'
      }
    },
    {
      path: 'query',
      component: () => import('@/views/personal-benefits-declaration-manage/quitSingleDiseaseManage/query'),
      name: 'quitSingleDiseaseManageQuery',
      meta: {
        title: '退出单病种申请查询',
        icon: 'spot'
      }
    }
  ]
}
