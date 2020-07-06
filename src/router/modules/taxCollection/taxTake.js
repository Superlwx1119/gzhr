export default {
  path: '/taxTake',
  component: () => import('@/views/taxCollection/taxTake'),
  name: 'taxTake',
  meta: { title: '税务代征', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'workerInfo',
      component: () => import('@/views/taxCollection/taxTake/workerInfo/index'),
      name: 'workerInfo',
      meta: { title: '职工征集信息发送', icon: 'spot' }
    },
    {
      path: 'workerInfoSendAudit',
      component: () => import('@/views/taxCollection/taxTake/workerInfoSendAudit/index'),
      name: 'workerInfoSendAudit',
      meta: { title: '职工征集信息发送审核', icon: 'spot' }
    },
    {
      path: 'employmentInfoSend',
      component: () => import('@/views/taxCollection/taxTake/employmentInfoSend/index'),
      name: 'employmentInfoSend',
      meta: { title: '灵活就业征集信息发送', icon: 'spot' }
    },
    {
      path: 'employmentInfoAudit',
      component: () => import('@/views/taxCollection/taxTake/employmentInfoAudit/index'),
      name: 'employmentInfoAudit',
      meta: { title: '灵活就业征集信息发送审核', icon: 'spot' }
    },
    {
      path: 'urbanInfoSend',
      component: () => import('@/views/taxCollection/taxTake/urbanInfoSend/index'),
      name: 'urbanInfoSend',
      meta: { title: '城乡居民征集信息发送', icon: 'spot' }
    },
    {
      path: 'urbanInfoSendQuery',
      component: () => import('@/views/taxCollection/taxTake/urbanInfoSendQuery/index'),
      name: 'urbanInfoSendQuery',
      meta: { title: '城乡居民征集信息发送进度查询', icon: 'spot' }
    },
    {
      path: 'specialFeesSend',
      component: () => import('@/views/taxCollection/taxTake/specialFeesSend/index'),
      name: 'specialFeesSend',
      meta: { title: '税务特殊费用发送', icon: 'spot' }
    },
    {
      path: 'speciaFeesAudit',
      component: () => import('@/views/taxCollection/taxTake/speciaFeesAudit/index'),
      name: 'speciaFeesAudit',
      meta: { title: '税务特殊费用发送审核', icon: 'spot' }
    },
    {
      path: 'speciaFeesSendApply',
      component: () => import('@/views/taxCollection/taxTake/speciaFeesSendApply/index'),
      name: 'speciaFeesSendApply',
      meta: { title: '税务特殊费用撤销发送申请', icon: 'spot' }
    },
    {
      path: 'speciaFeesSendAudit',
      component: () => import('@/views/taxCollection/taxTake/speciaFeesSendAudit/index'),
      name: 'speciaFeesSendAudit',
      meta: { title: '税务特殊费用撤销发送审核', icon: 'spot' }
    },
    {
      path: 'workerSend',
      component: () => import('@/views/taxCollection/taxTake/workerSend/index'),
      name: 'workerSend',
      meta: { title: '职工征集费用撤销发送申请', icon: 'spot' }
    },
    {
      path: 'workerSendAudit',
      component: () => import('@/views/taxCollection/taxTake/workerSendAudit/index'),
      name: 'workerSendAudit',
      meta: { title: '职工征集信息撤销发送审核', icon: 'spot' }
    },
    {
      path: 'employmentUndoSend',
      component: () => import('@/views/taxCollection/taxTake/employmentUndoSend/index'),
      name: 'employmentUndoSend',
      meta: { title: '灵活就业征集信息撤销发送申请', icon: 'spot' }
    },
    {
      path: 'employmentUndoAudit',
      component: () => import('@/views/taxCollection/taxTake/employmentUndoAudit/index'),
      name: 'employmentUndoAudit',
      meta: { title: '灵活就业征集信息撤销发送审核', icon: 'spot' }
    },
    {
      path: 'urbanInfoSendAudit',
      component: () => import('@/views/taxCollection/taxTake/urbanInfoSendAudit/index'),
      name: 'urbanInfoSendAudit',
      meta: { title: '城乡居民征集信息撤销发送申请', icon: 'spot' }
    },
    {
      path: 'urbanInfoUndoSend',
      component: () => import('@/views/taxCollection/taxTake/urbanInfoUndoSend/index'),
      name: 'urbanInfoUndoSend',
      meta: { title: '城乡居民征集信息撤销发送审核', icon: 'spot' }
    },
    {
      path: 'speciaFeesQuery',
      component: () => import('@/views/taxCollection/taxTake/speciaFeesQuery/index'),
      name: 'speciaFeesQuery',
      meta: { title: '特殊缴费信息对账查询', icon: 'spot' }
    },
    {
      path: 'payInfoQuery',
      component: () => import('@/views/taxCollection/taxTake/payInfoQuery/index'),
      name: 'payInfoQuery',
      meta: { title: '税务测算缴费信息对账查询', icon: 'spot' }
    },
    {
      path: 'unitPayQuery',
      component: () => import('@/views/taxCollection/taxTake/unitPayQuery/index'),
      name: 'unitPayQuery',
      meta: { title: '单位税务缴费到账查询', icon: 'spot' }
    }
  ]
}
