export default {
  path: '/organization-allocate',
  component: () => import('@/views/personnel-assignment/organizations-allocate/index'),
  name: 'OrganizationAllocate',
  meta: { title: '省直事业单位调配', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'allocate-apply',
      component: () => import('@/views/personnel-assignment/organizations-allocate/allocate-apply/index'),
      name: 'AllocateApply',
      meta: { title: '人员调配-申报', icon: 'spot' }
    },
    {
      path: 'allocate-review-job',
      component: () => import('@/views/personnel-assignment/organizations-allocate/allocate-review-job/index'),
      name: 'AllocateReviewJob',
      meta: { title: '人员调配-事业处核岗', icon: 'spot' }
    },
    {
      path: 'allocate-first-audit',
      component: () => import('@/views/personnel-assignment/organizations-allocate/allocate-first-audit/index'),
      name: 'AllocateFirstAudit',
      meta: { title: '人员调配-初审', icon: 'spot' }
    },
    {
      path: 'allocate-second-audit',
      component: () => import('@/views/personnel-assignment/organizations-allocate/allocate-second-audit/index'),
      name: 'AllocateSecondAudit',
      meta: { title: '人员调配-审定', icon: 'spot' }
    },
    {
      path: 'allocate-approval',
      component: () => import('@/views/personnel-assignment/organizations-allocate/allocate-approval/index'),
      name: 'AllocateApproval',
      meta: { title: '人员调配-批准', icon: 'spot' }
    },
    {
      path: 'allocate-send',
      component: () => import('@/views/personnel-assignment/organizations-allocate/allocate-send/index'),
      name: 'AllocateSend',
      meta: { title: '人员调配-发文', icon: 'spot' }
    },
    {
      path: 'allocate-statistical',
      component: () => import('@/views/personnel-assignment/organizations-allocate/allocate-statistical/index'),
      name: 'AllocateStatistical',
      meta: { title: '人员调配-统计', icon: 'spot' }
    }
  ]
}
