// import Layout from '@/layout'
export default {
  path: 'insurance-unit-management',
  // component: Layout,
  component: () => import('@//views/insurance-management/insurance-unit-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '参保单位管理', icon: 'example' },
  children: [
    {
      path: '/unit-info-maintain',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-info-maintain/index'),
      name: 'unitInfoMaintain',
      meta: { title: '单位信息维护', icon: 'spot' }
    },
    {
      path: '/unit-info-maintain-review',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-info-maintain-review/index'),
      name: 'unitInfoMaintainReview',
      meta: { title: '单位信息维护审核', icon: 'spot' }
    },
    {
      path: '/unit-payStatus-change',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-payStatus-change/index'),
      name: 'unitPayStatusChange',
      meta: { title: '单位缴费状态变更', icon: 'spot' }
    },
    {
      path: '/unit-payStatus-change-review',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-payStatus-change-review/index'),
      name: 'unitPayStatusChangeReview',
      meta: { title: '单位缴费状态变更审核', icon: 'spot' }
    },
    {
      path: '/unit-merge',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-merge/index'),
      name: 'unitMerge',
      meta: { title: '单位合并', icon: 'spot' }
    },
    {
      path: '/unit-merge-review',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-merge-review/index'),
      name: 'unitMergeReview',
      meta: { title: '单位合并审核', icon: 'spot' }
    },
    {
      path: '/unit-householdn',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-householdn/index'),
      name: 'unitHouseholdn',
      meta: { title: '单位分户', icon: 'spot' }
    },
    {
      path: '/unit-householdn-review',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-householdn-review/index'),
      name: 'unitHouseholdnReview',
      meta: { title: '单位分户审核', icon: 'spot' }
    },
    {
      path: '/unit-cancel',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-cancel/index'),
      name: 'unitCancel',
      meta: { title: '单位注销', icon: 'spot' }
    },
    {
      path: '/unit-cancel-review',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-cancel-review/index'),
      name: 'unitCancelReview',
      meta: { title: '单位注销审核', icon: 'spot' }
    },
    {
      path: '/unit-change-info-query',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-change-info-query/index'),
      name: 'unitChangeInfoQuery',
      meta: { title: '单位变更信息查询', icon: 'spot' }
    },
    {
      path: '/unit-insured-prove',
      component: () => import('@/views/insurance-management/insurance-unit-management/unit-insured-prove/index'),
      name: 'unitInsuredprove',
      meta: { title: '单位参保证明', icon: 'spot' }
    }

  ]
}
