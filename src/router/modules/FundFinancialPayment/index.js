//  基金财务支付
import Layout from '@/layout'
export default {
  path: '/fund-financial-payment',
  component: Layout,
  redirect: '/fund-financial-payment/financial-appropriation-summary',
  alwaysShow: true,
  meta: { title: '基金财务支付', icon: 'example' },
  children: [
    {
      path: 'financial-appropriation-summary',
      component: () => import('@/views/fund-financial-payment/financial-appropriation-summary/index'),
      name: 'financialAppropriationSummary',
      meta: { title: '财务拨付汇总', noCache: true, icon: 'spot' }
    },
    {
      path: 'generate-payment-plan',
      component: () => import('@/views/fund-financial-payment/generate-payment-plan/index'),
      name: 'generatePaymentPlan',
      meta: { title: '生成支付计划', noCache: true, icon: 'spot' }
    },
    {
      path: 'financial-audit',
      component: () => import('@/views/fund-financial-payment/financial-audit/index'),
      name: 'financialAudit',
      meta: { title: '财务审核', noCache: true, icon: 'spot' }
    },
    {
      path: 'bank-offer',
      component: () => import('@/views/fund-financial-payment/bank-offer/index'),
      name: 'bankOffer',
      meta: { title: '银行报盘', noCache: true, icon: 'spot' }
    },
    {
      path: 'bank-offer-back',
      component: () => import('@/views/fund-financial-payment/bank-offer-back/index'),
      name: 'bankOfferBack',
      meta: { title: '银行回盘', noCache: true, icon: 'spot' }
    },
    {
      path: 'refund-redial',
      component: () => import('@/views/fund-financial-payment/refund-redial/index'),
      name: 'refundredial',
      meta: { title: '退票重拨数据处理与查询', noCache: true, icon: 'spot' }
    },
    {
      path: 'payment-information-management',
      component: () => import('@/views/fund-financial-payment/payment-information-management/index'),
      name: 'paymentInformationmanagement',
      meta: { title: '预付金信息管理', noCache: true, icon: 'spot' }
    },
    {
      path: 'prepayment-reconciliation-management',
      component: () => import('@/views/fund-financial-payment/prepayment-reconciliation-management/index'),
      name: 'prepaymentReconciliationManagement',
      meta: { title: '预付金对账管理', noCache: true, icon: 'spot' }
    },
    {
      path: 'medical-expenses',
      component: () => import('@/views/fund-financial-payment/medical-expenses/index'),
      name: 'medicalExpenses',
      meta: { title: '医疗费对账管理', noCache: true, icon: 'spot' }
    }
  ]
}
