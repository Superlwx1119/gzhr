//  人事管理
import Layout from '@/layout'
import EmploymentContract from './EmploymentContract'
export default {
  path: 'personel-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '人事管理', icon: 'example' },
  children: [
    EmploymentContract
  ]
}
