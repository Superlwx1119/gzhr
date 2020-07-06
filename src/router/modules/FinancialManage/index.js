// 财务管理（参保征缴）
import Layout from '@/layout'
import InterfaceManage from './financialInterfaceManage'
import InsuManage from './insuManage'
import paymentBankManage from './paymentBankManage'
import fundIncomeManage from './fundIncomeManage'
// import InsuManage from './insuManage'
export default {
  path: '/financia-manage',
  component: Layout,
  alwaysShow: true,
  meta: {
    title: '财务管理',
    icon: 'example'
  },
  children: [
    InterfaceManage,
    InsuManage,
    paymentBankManage,
    fundIncomeManage
  ]
}
