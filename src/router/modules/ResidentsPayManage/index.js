//  城乡居民缴费管理
import Layout from '@/layout'
import ResidentsCalculate from './ResidentsCalculate'
import ResidentsPayReturn from './ResidentsPayReturn'
import ResidentsAccountManage from './ResidentsAccountManage'
import ResidentsDayPayConfirm from './ResidentsDayPayConfirm'
import ResidentsLevyWay from './ResidentsLevyWay'
export default {
  path: 'residents-pay-manage',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '城乡居民缴费管理', icon: 'example' },
  children: [
    ResidentsCalculate, //  居民计算管理
    ResidentsPayReturn, //  应缴核销返还
    ResidentsAccountManage, //  到账管理
    ResidentsDayPayConfirm, //  日结算核查确认
    ResidentsLevyWay //  征收方式调整
  ]
}
