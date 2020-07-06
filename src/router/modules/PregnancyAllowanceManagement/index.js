import Layout from '@/layout'
import issue from './issue'
import AccountMaintenance from './AccountMaintenance'
import InformationQuery from './InformationQuery'
import PersonalRightsInterests from './PersonalRightsInterests'
export default {
  path: 'PregnancyAllowanceManagement',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '生育津贴管理', icon: 'example' },
  children: [
    issue,
    InformationQuery,
    AccountMaintenance,
    PersonalRightsInterests
  ]
}
