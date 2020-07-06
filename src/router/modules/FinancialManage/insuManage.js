// 医保基金追缴台账管理
export default {
  path: '/insuManage',
  component: () => import('@/views/financia-manage/insuManage'),
  name: 'insuManage',
  meta: { title: '医保基金追缴台账管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'bookEntry',
      component: () => import('@/views/financia-manage/insuManage/bookEntry/index'),
      name: 'bookEntry',
      meta: { title: '基金追收追缴台账录入', icon: 'spot' }
    },
    {
      path: 'fundAudit',
      component: () => import('@/views/financia-manage/insuManage/fundAudit/index'),
      name: 'fundAudit',
      meta: { title: '基金追收追缴台账审核', icon: 'spot' }
    },
    {
      path: 'notice',
      component: () => import('@/views/financia-manage/insuManage/notice/index'),
      name: 'notice',
      meta: { title: '打印通知书及缴款', icon: 'spot' }
    },
    {
      path: 'fundSend',
      component: () => import('@/views/financia-manage/insuManage/fundSend/index'),
      name: 'fundSend',
      meta: { title: '基金追收追缴台账终止录入', icon: 'spot' }
    },
    {
      path: 'bankSelect',
      component: () => import('@/views/financia-manage/insuManage/bankSelect/index'),
      name: 'bankSelect',
      meta: { title: '银行追收追缴到账数据接收与查询', icon: 'spot' }
    },
    {
      path: 'fundMatching',
      component: () => import('@/views/financia-manage/insuManage/fundMatching/index'),
      name: 'fundMatching',
      meta: { title: '基金追收追缴到账匹配', icon: 'spot' }
    },
    {
      path: 'bankConfirm',
      component: () => import('@/views/financia-manage/insuManage/bankConfirm/index'),
      name: 'bankConfirm',
      meta: { title: '银行追收追缴到账金额确认', icon: 'spot' }
    }
  ]
}
