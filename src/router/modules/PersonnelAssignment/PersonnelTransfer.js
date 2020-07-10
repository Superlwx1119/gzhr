export default {
  path: '/personnel-transfer',
  component: () => import('@/views/personnel-assignment/personnel-transfer/index'),
  name: 'OrganizationInformation',
  meta: { title: '省直事业单位人员划转', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'transfer-apply',
      component: () => import('@/views/personnel-assignment/personnel-transfer/transfer-apply/index'),
      name: 'TransferApply',
      meta: { title: '人员划转-申报', icon: 'spot' }
    },
    {
      path: 'transfer-first-audit',
      component: () => import('@/views/personnel-assignment/personnel-transfer/transfer-first-audit/index'),
      name: 'TransferFirstAudit',
      meta: { title: '人员划转-初审', icon: 'spot' }
    },
    {
      path: 'transfer-second-audit',
      component: () => import('@/views/personnel-assignment/personnel-transfer/transfer-second-audit/index'),
      name: 'TransferSecondAudit',
      meta: { title: '人员划转-审定', icon: 'spot' }
    },
    {
      path: 'transfer-approval',
      component: () => import('@/views/personnel-assignment/personnel-transfer/transfer-approval/index'),
      name: 'TransferApproval',
      meta: { title: '人员划转-批准', icon: 'spot' }
    },
    {
      path: 'transfer-send',
      component: () => import('@/views/personnel-assignment/personnel-transfer/transfer-send/index'),
      name: 'TransferSend',
      meta: { title: '人员划转-发文', icon: 'spot' }
    },
    {
      path: 'transfer-statistical',
      component: () => import('@/views/personnel-assignment/personnel-transfer/transfer-statistical/index'),
      name: 'TransferStatistical',
      meta: { title: '人员划转-统计', icon: 'spot' }
    }
  ]
}
