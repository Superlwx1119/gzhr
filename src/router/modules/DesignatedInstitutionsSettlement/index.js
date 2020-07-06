//  定点机构结算管理
import Layout from '@/layout'
import AuditDeductManage from './auditDeductManage'
import AuditManage from './AuditManage'
import ReservedManage from './reserved-manage'
import CustomEndclearManage from './customEndclearManage'
import CostAdjust from './cost-adjust'
import IndexAdjust from './index-adjust'
import FlowerProject from './flower-project'
import VerificationManage from './VerificationManage'
import MonthSettlement from './MonthSettlement'
import AppropriationSumManege from './appropriationSumManege'
import MajorDiseaseManage from './majorDiseaseManage'
import PrepaymentManage from './prepayment-manage'
export default {
  path: 'designated-institutions-settlement',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点机构结算管理', icon: 'example' },
  children: [
    AuditDeductManage,
    AuditManage,
    ReservedManage,
    CustomEndclearManage,
    CostAdjust,
    IndexAdjust,
    FlowerProject,
    VerificationManage,
    MonthSettlement,
    AppropriationSumManege,
    MajorDiseaseManage,
    PrepaymentManage
  ]
}
