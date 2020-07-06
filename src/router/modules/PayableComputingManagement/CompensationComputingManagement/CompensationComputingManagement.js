export default {
  path: '/compensation-computing-management',
  name: 'CompensationComputingManagement',
  component: () => import('@/views/payable-computing-management/compensation-computing-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '补收计算管理', icon: '' },
  children: [
    {
      path: 'unit-supplementary-receipt-approved',
      component: () => import('@/views/payable-computing-management/compensation-computing-management/unit-supplementary-receipt-approved/index'),
      name: 'UnitSupplementaryReceiptApproved',
      meta: { title: '单位补收核定', icon: 'spot' }
    },
    {
      path: 'unit-supplementary-receipt-review',
      component: () => import('@/views/payable-computing-management/compensation-computing-management/unit-supplementary-receipt-review/index'),
      name: 'UnitSupplementaryReceiptReview',
      meta: { title: '单位补收审核', icon: 'spot' }
    },
    {
      path: 'unit-repayment-approved',
      component: () => import('@/views/payable-computing-management/compensation-computing-management/unit-repayment-approved/index'),
      name: 'UnitRepaymentApproved',
      meta: { title: '单位补欠核定', icon: 'spot' }
    },
    {
      path: 'unit-repayment-review',
      component: () => import('@/views/payable-computing-management/compensation-computing-management/unit-repayment-review/index'),
      name: 'UnitRepaymentReview',
      meta: { title: '单位补欠审核', icon: 'spot' }
    },
    {
      path: 'unit-difference-retreat',
      component: () => import('@/views/payable-computing-management/compensation-computing-management/unit-difference-retreat/index'),
      name: 'UnitDifferenceRetreat',
      meta: { title: '单位差额补退', icon: 'spot' }
    },
    {
      path: 'unit-difference-retreat-review',
      component: () => import('@/views/payable-computing-management/compensation-computing-management/unit-difference-retreat-review/index'),
      name: 'UnitDifferenceRetreatReview',
      meta: { title: '单位差额补退审核', icon: 'spot' }
    },
    {
      path: 'medicare-zoning-difference-retreat',
      component: () => import('@/views/payable-computing-management/compensation-computing-management/medicare-zoning-difference-retreat/index'),
      name: 'MedicareZoningDifferenceRetreat',
      meta: { title: '医保区划差额补退', icon: 'spot' }
    },
    {
      path: 'one-time-payment',
      component: () => import('@/views/payable-computing-management/compensation-computing-management/one-time-payment/index'),
      name: 'OneTimePayment',
      meta: { title: '医保退休不满足年限一次性缴纳', icon: 'spot' }
    },
    {
      path: 'one-time-payment-review',
      component: () => import('@/views/payable-computing-management/compensation-computing-management/one-time-payment-review/index'),
      name: 'OneTimePaymentReview',
      meta: { title: '医保退休不满足年限一次性缴纳审核', icon: 'spot' }
    }
  ]
}
