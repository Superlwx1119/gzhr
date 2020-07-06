//  定点协议管理
import Layout from '@/layout'
import PharmacyExpertQuery from './PharmacyExpertQuery/PharmacyExpertQuery' // 药学专家查询
import AssessmentInfoManagement from './AssessmentInfoManagement/AssessmentInfoManagement' // 考核信息管理
import InstitutionalServiceAgreementManagement from './InstitutionalServiceAgreementManagement/InstitutionalServiceAgreementManagement' // 定点医药机构服务协议管理
import InstitutionalPropertyManagement from './InstitutionalPropertyManagement/InstitutionalPropertyManagement' // 定点医药机构属性管理
import InstitutionalBankAccountManagement from './InstitutionalBankAccountManagement/InstitutionalBankAccountManagement' // 定点医药机构银行账号管理
import InstitutionalOpenServiceManagement from './InstitutionalOpenServiceManagement/InstitutionalOpenServiceManagement' // 定点医药机构开通服务管理
import InstitutionalStopServiceManagement from './InstitutionalStopServiceManagement/InstitutionalStopServiceManagement' // 定点医药机构停止服务管理
import InstitutionalRelationshipManagement from './InstitutionalRelationshipManagement/InstitutionalRelationshipManagement' // 定点医药机构关系管理
import InstitutionalListMatchReview from './InstitutionalListMatchReview/InstitutionalListMatchReview' // 定点医药机构目录匹配审核
import InstitutionalListMatchLockManagement from './InstitutionalListMatchLockManagement/InstitutionalListMatchLockManagement' // 定点医药机构目录匹配锁定管理
import InstitutionalListMatchSyncManagement from './InstitutionalListMatchSyncManagement/InstitutionalListMatchSyncManagement' // 定点医药机构目录匹配同步广利
import ListCenterMaintenance from './ListCenterMaintenance/ListCenterMaintenance' // 目录中心维护
import FeeRefundRegistrationManagement from './FeeRefundRegistrationManagement/FeeRefundRegistrationManagement' // 退费备案登记管理
import NoCertificateRegistrationManagement from './NoCertificateRegistrationManagement/NoCertificateRegistrationManagement' // 无医保凭证结算备案登记管理
import DepartmentStopServiceManagement from './DepartmentStopServiceManagement/DepartmentStopServiceManagement' // 科室停止服务管理
import DoctorStopServiceManagement from './DoctorStopServiceManagement/DoctorStopServiceManagement' // 医师停止服务管理
import InstitutionalDepartmentManagement from './InstitutionalDepartmentManagement/InstitutionalDepartmentManagement' // 定点医药机构科室管理
import DoctorInfoManagement from './DoctorInfoManagement/DoctorInfoManagement' // 医师信息管理
import WardInfoManagement from './WardInfoManagement/WardInfoManagement' // 病区信息管理
import HospitalBedInfoManagement from './HospitalBedInfoManagement/HospitalBedInfoManagement' // 病床信息管理
export default {
  path: 'fixed-point-protocol-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '定点协议管理', icon: 'example' },
  children: [
    PharmacyExpertQuery,
    AssessmentInfoManagement,
    InstitutionalServiceAgreementManagement,
    InstitutionalPropertyManagement,
    InstitutionalBankAccountManagement,
    InstitutionalOpenServiceManagement,
    InstitutionalStopServiceManagement,
    InstitutionalRelationshipManagement,
    InstitutionalListMatchReview,
    InstitutionalListMatchLockManagement,
    InstitutionalListMatchSyncManagement,
    ListCenterMaintenance,
    FeeRefundRegistrationManagement,
    NoCertificateRegistrationManagement,
    DepartmentStopServiceManagement,
    DoctorStopServiceManagement,
    InstitutionalDepartmentManagement,
    DoctorInfoManagement,
    WardInfoManagement,
    HospitalBedInfoManagement
  ]
}
