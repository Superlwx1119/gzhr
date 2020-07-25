//  岗位变动管理
import Layout from '@/layout'
export default {
  path: 'jobs-change-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '岗位变动管理', icon: 'example' },
  children: [
    {
      path: '/jobs-change-apply',
      component: () => import('@/views/jobs-change-management/jobs-change-apply/index'),
      name: 'JobsChangeApply',
      meta: { title: '人员岗位变动申报', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'jobs-change-apply',
          component: () => import('@/views/jobs-change-management/jobs-change-apply/index'),
          name: 'JobsChangeApply',
          meta: { title: '人员岗位变动申报', icon: '' }
        }
      ]
    },
    {
      path: '/jobs-change-audit',
      component: () => import('@/views/jobs-change-management/jobs-change-audit/index'),
      name: 'JobsChangeAudit',
      meta: { title: '人员岗位变动审核', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'jobs-change-audit',
          component: () => import('@/views/jobs-change-management/jobs-change-audit/index'),
          name: 'JobsChangeAudit',
          meta: { title: '人员岗位变动审核', icon: '' }
        }
      ]
    },
    {
      path: '/jobs-change-approve',
      component: () => import('@/views/jobs-change-management/jobs-change-approve/index'),
      name: 'JobsChangeApprove',
      meta: { title: '人员岗位变动审批', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'jobs-change-approve',
          component: () => import('@/views/jobs-change-management/jobs-change-approve/index'),
          name: 'JobsChangeApprove',
          meta: { title: '人员岗位变动审批', icon: '' }
        }
      ]
    }
  ]
}
