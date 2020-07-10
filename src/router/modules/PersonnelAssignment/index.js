//  人员调配管理
import Layout from '@/layout'
import OrganizationsAllocate from './OrganizationsAllocate'
import PersonnelTransfer from './PersonnelTransfer'
import PersonHiring from './PersonHiring'
import ExSoldierPlacement from './ExSoldierPlacement'
export default {
  path: 'personnel-assignment',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '人员调配管理', icon: 'example' },
  children: [
    OrganizationsAllocate,
    PersonnelTransfer,
    PersonHiring,
    ExSoldierPlacement
  ]
}
