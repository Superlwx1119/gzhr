export default {
  path: '/issus',
  component: () => import('@/views/PregnancyAllowanceManagement/issue'),
  name: '',
  meta: { title: '生育津贴发放管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'applyFor',
      component: () => import('@/views/PregnancyAllowanceManagement/issue/applyFor/index'),
      name: 'applyFor',
      meta: { title: '生育津贴申请', icon: 'spot' }
    },
    {
      path: 'IssuedByTheReview',
      component: () => import('@/views/PregnancyAllowanceManagement/issue/IssuedByTheReview/index'),
      name: 'IssuedByTheReview',
      meta: { title: '生育津贴核发复审', icon: 'spot' }
    },
    {
      path: 'DataVerification',
      component: () => import('@/views/PregnancyAllowanceManagement/issue/DataVerification/index'),
      name: 'DataVerification',
      meta: { title: '生育津贴核发数据生成与核查', icon: 'spot' }
    },
    {
      path: 'leadership',
      component: () => import('@/views/PregnancyAllowanceManagement/issue/leadership/index'),
      name: 'leadership',
      meta: { title: '生育津贴领导审签', icon: 'spot' }
    },
    {
      path: 'RunningWater',
      component: () => import('@/views/PregnancyAllowanceManagement/issue/RunningWater/index'),
      name: 'RunningWater',
      meta: { title: '生育津贴发放流水查询', icon: 'spot' }
    },
    {
      path: 'IntegratedQuery',
      component: () => import('@/views/PregnancyAllowanceManagement/issue/IntegratedQuery/index'),
      name: 'IntegratedQuery',
      meta: { title: '生育津贴综合查询', icon: 'spot' }
    }
  ]
}
