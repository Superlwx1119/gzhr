//  人事管理
import Layout from '@/layout'
import EmploymentContract from './EmploymentContract'
import BonusPenaltyManagement from './BonusPenaltyManagement'
import AnnualAppraisal from './AnnualAppraisal'
import TrainingManagement from './TrainingManagement'
export default {
  path: 'personel-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '人事管理', icon: 'example' },
  children: [
    EmploymentContract,
    BonusPenaltyManagement,
    TrainingManagement,
    AnnualAppraisal
  ]
}
