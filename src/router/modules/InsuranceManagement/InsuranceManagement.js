import Layout from '@/layout'
import InsuranceRegistrationManagement from './InsuranceRegistrationManagement/InsuranceRegistrationManagement'
import InsuredUnitManagement from './InsuredUnitManagement/InsuredUnitManagement'
import ManagementEmployees from './ManagementEmployees/ManagementEmployees'
import ManagementResidentInsured from './ManagementResidentInsured/ManagementResidentInsured'
import SalaryManageInsurancePayment from './SalaryManageInsurancePayment/SalaryManageInsurancePayment'
import TaxDocking from './TaxDocking/TaxDocking'
export default {
  path: 'insurance-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '参保管理', icon: 'example' },
  children: [

    InsuranceRegistrationManagement, // 参保登记管理

    InsuredUnitManagement, // 参保单位管理

    ManagementEmployees, // 职工参保人员管理

    ManagementResidentInsured, // 居民参保人员管理

    SalaryManageInsurancePayment, // 参保缴费工资管理

    TaxDocking// 税务对接

  ]
}
