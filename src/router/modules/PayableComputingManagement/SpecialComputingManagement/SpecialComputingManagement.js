export default {
  path: '/special-computing-management',
  name: 'SpecialComputingManagement',
  component: () => import('@/views/payable-computing-management/special-computing-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '特殊计算管理', icon: '' },
  children: [
    {
      path: 'special-collection',
      component: () => import('@/views/payable-computing-management/special-computing-management/special-collection/index'),
      name: 'SpecialCollection',
      meta: { title: '特殊收款征集', icon: 'spot' }
    },
    {
      path: 'special-collection-review',
      component: () => import('@/views/payable-computing-management/special-computing-management/special-collection-review/index'),
      name: 'SpecialCollectionReview',
      meta: { title: '特殊收款征集审核', icon: 'spot' }
    },
    {
      path: 'bottom-fund-computing',
      component: () => import('@/views/payable-computing-management/special-computing-management/bottom-fund-computing/index'),
      name: 'BottomFundComputing',
      meta: { title: '铺底资金计算', icon: 'spot' }
    },
    {
      path: 'bottom-fund-review',
      component: () => import('@/views/payable-computing-management/special-computing-management/bottom-fund-review/index'),
      name: 'BottomFundReview',
      meta: { title: '铺底资金审核', icon: 'spot' }
    }
  ]
}
