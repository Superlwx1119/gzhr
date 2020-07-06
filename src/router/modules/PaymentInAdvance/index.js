//  预缴管理
import Layout from '@/layout'
import PaymentInAdvanceManage from './PaymentInAdvanceManage'
export default {
  path: 'payment-in-advance',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '预缴管理', icon: 'example' },
  children: [
    PaymentInAdvanceManage
  ]
}
