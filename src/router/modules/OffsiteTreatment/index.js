import Layout from '@/layout'
import IntegratedManagement from './IntegratedManagement'
import MedicalChargeSettlement from './MedicalChargeSettlement'
import MedicalChargeReview from './MedicalChargeReview'
import AppropriationSummary from './AppropriationSummary'
import InstitutionManagement from './InstitutionManagement'
import Subsystem from './Subsystem'
export default {
  path: 'offsite-treatment',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '异地就医子系统', icon: 'example' },
  children: [
    IntegratedManagement,
    MedicalChargeSettlement,
    MedicalChargeReview,
    AppropriationSummary,
    Subsystem,
    InstitutionManagement
  ]
}
