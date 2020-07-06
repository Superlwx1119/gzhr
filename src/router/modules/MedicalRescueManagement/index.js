import Layout from '@/layout'
export default {
  path: '/medical-rescue-management',
  component: Layout,
  alwaysShow: true,
  redirect: 'noRedirect',
  meta: { title: '医疗救助管理', icon: 'example' },
  children: [
    {
      path: '/medical-rescue-list-management',
      component: () => import('@/views/medical-rescue-management/medical-rescue-list-management/index'),
      name: 'medicalRescueListManage',
      meta: { title: '医疗救助目录管理', icon: 'spot' },
      redirect: 'noRedirect',
      alwaysShow: true,
      children: [
        {
          path: 'list-audit',
          component: () => import('@/views/medical-rescue-management/medical-rescue-list-management/list-audit/index'),
          name: 'listAudit',
          meta: { title: '医疗救助目录审核', icon: 'spot' }
        },
        {
          path: 'personal-sporadic-reimbursement',
          component: () => import('@/views/medical-rescue-management/medical-rescue-list-management/list-maintenance/index'),
          name: 'listMaintenance',
          meta: { title: '医疗救助目录维护', icon: 'spot' }
        }
      ]
    },
    {
      path: '/medical-rescue-staff-management',
      component: () => import('@/views/medical-rescue-management/medical-rescue-staff-management/index'),
      name: 'medicalRescueStaffManagement',
      meta: { title: '医疗救助人员管理', icon: 'spot' },
      redirect: 'noRedirect',
      alwaysShow: true,
      children: [
        {
          path: 'staff-registration',
          component: () => import('@/views/medical-rescue-management/medical-rescue-staff-management/staff-registration/index'),
          name: 'staffRegistrantion',
          meta: { title: '医疗救助人员登记', icon: 'spot' }
        },
        {
          path: 'staff-message-audit',
          component: () => import('@/views/medical-rescue-management/medical-rescue-staff-management/staff-message-audit/index'),
          name: 'staffMessageAudit',
          meta: { title: '救助人员信息审核', icon: 'spot' }
        },
        {
          path: 'staff-message-public',
          component: () => import('@/views/medical-rescue-management/medical-rescue-staff-management/staff-message-public/index'),
          name: 'staffMessagePublic',
          meta: { title: '救助人员信息公示', icon: 'spot' }
        },
        {
          path: 'public-audit',
          component: () => import('@/views/medical-rescue-management/medical-rescue-staff-management/public-audit/index'),
          name: 'publicAudit',
          meta: { title: '公示信息审核', icon: 'spot' }
        },
        {
          path: 'staff-message-report',
          component: () => import('@/views/medical-rescue-management/medical-rescue-staff-management/staff-message-report/index'),
          name: 'staffMessageReport',
          meta: { title: '公示信息举报', icon: 'spot' }
        },
        {
          path: 'report-message-audit',
          component: () => import('@/views/medical-rescue-management/medical-rescue-staff-management/report-message-audit/index'),
          name: 'reportMessageAudit',
          meta: { title: '举报信息审核', icon: 'spot' }
        }
      ]
    }, {
      path: '/medical-rescue-reimbursement-management',
      component: () => import('@/views/medical-rescue-management/medical-rescue-reimbursement-management/index'),
      name: 'medicalRescueReimbursementManagement',
      meta: { title: '医疗救助报销管理', icon: 'spot' },
      redirect: 'noRedirect',
      alwaysShow: true,
      children: [
        {
          path: 'rescue-registration',
          component: () => import('@/views/medical-rescue-management/medical-rescue-reimbursement-management/rescue-registration/index'),
          name: 'rescueRegistrantion',
          meta: { title: '医疗救助登记', icon: 'spot' }
        },
        {
          path: 'rescue-settlement',
          component: () => import('@/views/medical-rescue-management/medical-rescue-reimbursement-management/rescue-settlement/index'),
          name: 'rescueSettlement',
          meta: { title: '医疗救助结算', icon: 'spot' }
        },
        {
          path: 'rescue-audit',
          component: () => import('@/views/medical-rescue-management/medical-rescue-reimbursement-management/rescue-audit/index'),
          name: 'rescueAudit',
          meta: { title: '医疗救助审核', icon: 'spot' }
        }
      ]
    }
  ]
}
