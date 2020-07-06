// 支付银行管理
export default {
  path: '/paymentBankManage',
  component: () => import('@/views/financia-manage/paymentBankManage'),
  name: 'paymentBankManage',
  meta: { title: '支付银行管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'Informationmaintenance',
      component: () => import('@/views/financia-manage/paymentBankManage/Informationmaintenance/index'),
      name: 'Informationmaintenance',
      meta: { title: '基础银行信息维护', icon: 'spot' }
    },
    {
      path: 'Accountmaintenance',
      component: () => import('@/views/financia-manage/paymentBankManage/Accountmaintenance/index'),
      name: 'Accountmaintenance',
      meta: { title: '转入个账接收账户维护', icon: 'spot' }
    }
  ]
}
