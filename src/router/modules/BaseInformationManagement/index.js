//  基础信息管理
import Layout from '@/layout'
import OrganizationInformation from './OrganizationInformation'
import PersonalInformation from './PersonalInformation'
export default {
  path: 'base-information',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '基础信息管理', icon: 'example' },
  children: [
    OrganizationInformation,
    PersonalInformation
  ]
}
