export default {
  path: '/major-disease-manage',
  component: () => import('@/views/designated-institutions-settlement/major-disease-manage/index'),
  name: 'MajorDiseaseManage',
  meta: { title: '城乡大病管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'twice-summary',
      component: () => import('@/views/designated-institutions-settlement/major-disease-manage/twice-summary/index'),
      name: 'TwiceSummary',
      meta: { title: '城乡大病二次汇总', icon: '' }
    },
    {
      path: 'cost-send',
      component: () => import('@/views/designated-institutions-settlement/major-disease-manage/cost-send/index'),
      name: 'CostSend',
      meta: { title: '城乡大病医疗费用发送', icon: '' }
    },
    {
      path: 'pay-search',
      component: () => import('@/views/designated-institutions-settlement/major-disease-manage/pay-search/index'),
      name: 'PaySearch',
      meta: { title: '城乡居民大病保险待遇结算支付明细查询', icon: '' }
    }
  ]
}
