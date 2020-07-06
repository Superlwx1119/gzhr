// 基金收入管理
export default {

  path: '/fundIncomeManage',
  component: () => import('@/views/financia-manage/fundIncomeManage'),
  name: 'fundIncomeManage',
  meta: { title: '基金收入管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'Workerequest',
      component: () => import('@/views/financia-manage/fundIncomeManage/Workerequest/index'),
      name: 'Workerequest',
      meta: { title: '职工社申资助请款', icon: 'spot' }
    },
    {
      path: 'amountofmoney',
      component: () => import('@/views/financia-manage/fundIncomeManage/amountofmoney/index'),
      name: 'amountofmoney',
      meta: { title: '分中心确认请款金额', icon: 'spot' }
    },
    {
      path: 'Checktheaccount',
      component: () => import('@/views/financia-manage/fundIncomeManage/Checktheaccount/index'),
      name: 'Checktheaccount',
      meta: { title: '分中心修改请款金额审核', icon: 'spot' }
    },
    {
      path: 'Otherincomereceived',
      component: () => import('@/views/financia-manage/fundIncomeManage/Otherincomereceived/index'),
      name: 'Otherincomereceived',
      meta: { title: '职工社申资助到账确认', icon: 'spot' }
    },
    {
      path: 'Othertoaccount',
      component: () => import('@/views/financia-manage/fundIncomeManage/Othertoaccount/index'),
      name: 'Othertoaccount',
      meta: { title: '职工社申资助到账查询', icon: 'spot' }
    },
    {
      path: 'governmenttoaccount',
      component: () => import('@/views/financia-manage/fundIncomeManage/governmenttoaccount/index'),
      name: 'governmenttoaccount',
      meta: { title: '城居政府资助清算', icon: 'spot' }
    },
    {
      path: 'Fundliquidation',
      component: () => import('@/views/financia-manage/fundIncomeManage/Fundliquidation/index'),
      name: 'Fundliquidation',
      meta: { title: '城居政府资助到账确认', icon: 'spot' }
    },
    {
      path: 'Medicalassistancereceived',
      component: () => import('@/views/financia-manage/fundIncomeManage/Medicalassistancereceived/index'),
      name: 'Medicalassistancereceived',
      meta: { title: '城居医疗救助到账确认', icon: 'spot' }
    },
    {
      path: 'taxtotheaccount',
      component: () => import('@/views/financia-manage/fundIncomeManage/taxtotheaccount/index'),
      name: 'taxtotheaccount',
      meta: { title: '税务征缴收入到账确认', icon: 'spot' }
    },
    {
      path: 'accountconfirmation',
      component: () => import('@/views/financia-manage/fundIncomeManage/accountconfirmation/index'),
      name: 'accountconfirmation',
      meta: { title: '其他征缴收入到账确认', icon: 'spot' }
    },
    {
      path: 'Interesttotheaccount',
      component: () => import('@/views/financia-manage/fundIncomeManage/Interesttotheaccount/index'),
      name: 'Interesttotheaccount',
      meta: { title: '利息收入到账确认', icon: 'spot' }
    },
    {
      path: 'Transfertotheaccount',
      component: () => import('@/views/financia-manage/fundIncomeManage/Transfertotheaccount/index'),
      name: 'Transfertotheaccount',
      meta: { title: '转移收入到账确认', icon: 'spot' }
    },
    {
      path: 'caretoaccount',
      component: () => import('@/views/financia-manage/fundIncomeManage/caretoaccount/index'),
      name: 'caretoaccount',
      meta: { title: '其他征缴收入到账确认', icon: 'spot' }
    }
  ]
}

