//  个人待遇管理
import Layout from '@/layout'
import SporadicReimbursement from './SporadicReimbursement'
import SporadicSecondReimbursement from './SporadicSecondReimbursement'
import SpecialPerson from './SpecialPerson'
export default {
  path: 'personal-treatment',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '个人待遇管理', icon: 'example' },
  children: [
    SporadicReimbursement,
    SpecialPerson,
    SporadicSecondReimbursement
  ]
}
