//  应缴计算管理
import Layout from '@/layout'
import NormalComputingManagement from './NormalComputingManagement/NormalComputingManagement' // 正常计算管理
import CompensationComputingManagement from './CompensationComputingManagement/CompensationComputingManagement' // 补收计算管理
import WriteOffReturnManagement from './WriteOffReturnManagement/WriteOffReturnManagement' // 核销返还管理
import SpecialComputingManagement from './SpecialComputingManagement/SpecialComputingManagement' // 特殊计算管理
export default {
  path: 'payable-computing-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '应缴计算管理', icon: 'example' },
  children: [
    NormalComputingManagement,
    CompensationComputingManagement,
    WriteOffReturnManagement,
    SpecialComputingManagement
  ]
}
