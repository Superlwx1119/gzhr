export default {
  path: '/employment',
  component: () => import('@/views/bankCollection/employment'),
  name: 'employment',
  meta: { title: '灵活就业银行代扣', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'signSend',
      component: () => import('@/views/bankCollection/employment/signSend/index'),
      name: 'signSend',
      meta: { title: '灵活就业代扣签约发送', icon: 'spot' }
    },
    {
      path: 'signAudit',
      component: () => import('@/views/bankCollection/employment/signAudit/index'),
      name: 'signAudit',
      meta: { title: '灵活就业代扣签约回盘审核', icon: 'spot' }
    },
    {
      path: 'withholdingSend',
      component: () => import('@/views/bankCollection/employment/withholdingSend/index'),
      name: 'withholdingSend',
      meta: { title: '灵活就业人员代扣发送', icon: 'spot' }
    },
    {
      path: 'withholdingAudit',
      component: () => import('@/views/bankCollection/employment/withholdingAudit/index'),
      name: 'withholdingAudit',
      meta: { title: '灵活就业人员代扣核定', icon: 'spot' }
    }
  ]
}
