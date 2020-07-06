//  体检管理
import Layout from '@/layout'
import PhysicalExaminationInfo from './physicalExaminationInfo'
import PhysicalExaminationBusiness from './physicalExaminationBusiness'
import PhysicalExaminationAllocated from './physicalExaminationAllocated'
import PhysicalExaminationQuery from './physicalExaminationQuery'
export default {
  path: 'health-manage',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '体检管理', icon: 'example' },
  children: [
    PhysicalExaminationInfo,
    PhysicalExaminationBusiness,
    PhysicalExaminationAllocated,
    PhysicalExaminationQuery
  ]
}
