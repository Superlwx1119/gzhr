export default {
  path: '/ex-soldier-placement',
  component: () => import('@/views/personnel-assignment/ex-soldier-placement/index'),
  name: 'ExSoldierPlacement',
  meta: { title: '省直事业退役士兵安置', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'soldier-apply',
      component: () => import('@/views/personnel-assignment/ex-soldier-placement/soldier-apply/index'),
      name: 'SoldierApply',
      meta: { title: '退役士兵-申报', icon: 'spot' }
    },
    {
      path: 'soldier-first-audit',
      component: () => import('@/views/personnel-assignment/ex-soldier-placement/soldier-first-audit/index'),
      name: 'SoldierFirstAudit',
      meta: { title: '退役士兵-初审', icon: 'spot' }
    },
    {
      path: 'soldier-second-audit',
      component: () => import('@/views/personnel-assignment/ex-soldier-placement/soldier-second-audit/index'),
      name: 'SoldierSecondAudit',
      meta: { title: '退役士兵-审定', icon: 'spot' }
    },
    {
      path: 'soldier-approval',
      component: () => import('@/views/personnel-assignment/ex-soldier-placement/soldier-approval/index'),
      name: 'SoldierApproval',
      meta: { title: '退役士兵-批准', icon: 'spot' }
    },
    {
      path: 'soldier-review',
      component: () => import('@/views/personnel-assignment/ex-soldier-placement/soldier-review/index'),
      name: 'SoldierReview',
      meta: { title: '退役士兵-事业处审核', icon: 'spot' }
    },
    {
      path: 'soldier-examine',
      component: () => import('@/views/personnel-assignment/ex-soldier-placement/soldier-examine/index'),
      name: 'SoldierExamine',
      meta: { title: '退役士兵-工资处查看', icon: 'spot' }
    },
    {
      path: 'soldier-search',
      component: () => import('@/views/personnel-assignment/ex-soldier-placement/soldier-search/index'),
      name: 'SoldierSearch',
      meta: { title: '退役士兵-查询', icon: 'spot' }
    },
    {
      path: 'soldier-statistical',
      component: () => import('@/views/personnel-assignment/ex-soldier-placement/soldier-statistical/index'),
      name: 'SoldierStatistical',
      meta: { title: '退役士兵-统计', icon: 'spot' }
    }
  ]
}
