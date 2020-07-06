//  医保目录业务属性信息维护
import Layout from '@/layout'
import DrugInfo from './DrugInfo'
import DiseaseInfo from './DiseaseInfo'
import MedicalConsumablesInfo from './MedicalConsumablesInfo'
import MedicalServiceInfo from './MedicalServiceInfo'
export default {
  path: 'directory-business-attribute-info',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '医保目录业务属性信息维护', icon: 'example' },
  // children: [
  //   DrugInfo,
  //   DiseaseInfo,
  //   MedicalConsumablesInfo,
  //   MedicalServiceInfo
  // ]
  children: DrugInfo.concat(DiseaseInfo, MedicalConsumablesInfo, MedicalServiceInfo)
}
