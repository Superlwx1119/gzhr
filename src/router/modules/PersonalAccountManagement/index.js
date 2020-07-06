import Layout from '@/layout'
import AnnualCarryForward from './AnnualCarryForward'
import AuthorizationManagement from './AuthorizationManagement'
import BeRealistic from './BeRealistic'
import DeductionManagement from './DeductionManagement'
import Inherit from './Inherit'
import IssuanceManagement from './IssuanceManagement'
import PreplanningManagement from './PreplanningManagement'
import Retreat from './Retreat'
import Return from './Return'
import SettlementInterest from './SettlementInterest'
import WithdrawalAccountManagement from './WithdrawalAccountManagement'
import WithdrawalManagement from './WithdrawalManagement'
export default {
  path: 'personal-account-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '个人账户管理', icon: 'example' },
  children: [
    IssuanceManagement,
    PreplanningManagement,
    Inherit,
    Return,
    SettlementInterest,
    AnnualCarryForward,
    BeRealistic,
    Retreat,
    WithdrawalManagement,
    AuthorizationManagement,
    WithdrawalAccountManagement,
    DeductionManagement
  ]
}
