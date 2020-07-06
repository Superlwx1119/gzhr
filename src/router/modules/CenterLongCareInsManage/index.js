//  长期护理保险管理（中心端）
import Layout from '@/layout'
import LongInsEvaBusManage from './LongInsEvaBusManage'
import InfoManageLongTermCareIns from './InfoManageLongTermCareIns'
import LongCareExpenseAcceptanceReviewSettlement from './LongCareExpenseAcceptanceReviewSettlement'
import CareInformationQuery from './CareInformationQuery'
import DirectoryManagement from './DirectoryManagement'
import LongGuardPointMechanism from './LongGuardPointMechanism'
export default {
  path: 'center-long-care-ins-manage',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '长期护理保险管理（中心端）', icon: 'example' },
  children: [
    LongInsEvaBusManage,
    InfoManageLongTermCareIns,
    LongCareExpenseAcceptanceReviewSettlement,
    CareInformationQuery,
    DirectoryManagement,
    LongGuardPointMechanism
  ]
}
