// 个人待遇申报管理
import SlowManage from './slowManage'
import AccordingDiseaseManage from './accordingDiseaseManage'
import AccidentHarmManage from './accidentHarmManage'
import DesignatedMedicalInstitutionManage from './designatedMedicalInstitutionManage'
import FamilyBedManage from './familyBedManage'
import FamilyPhysicianContractManage from './familyPhysicianContractManage'
import ReferralReferralsManage from './referralReferralsManage'
import EmergencyHospitalizationManage from './emergencyHospitalizationManage'
import RemotePlacementManage from './remotePlacementManage'
import SpecialInspectionManage from './specialInspectionManage'
import SpecialDrugManage from './specialDrugManage'
import LongtermDrugManage from './longtermDrugManage'
import IssueDrugManage from './issueDrugManage'
import AnnualSalvageFiling from './annualSalvageFiling'
import ChronicDiseaseTreatmentDosageRegimen from './chronicDiseaseTreatmentDosageRegimen'
import GeneralClinicManagement from './generalClinicManagement'
import OutpatientTwoDiseasesManage from './outpatientTwoDiseasesManage'
import GeneralHospitalManage from './generalHospitalManage'
import QuitSingleDiseaseManage from './quitSingleDiseaseManage'
import OnestopSettlementManage from './onestopSettlementManage'
import NofirstVisitsManage from './nofirstVisitsManage'
import HospitalStartingLineManage from './hospitalStartingLineManage'
import HospitalExtrasManage from './hospitalExtrasManage'
import RoamingHospitalizationManage from './roamingHospitalizationManage'
import NondiffPaymentManage from './nondiffPaymentManage'
import MedicalTreatmentQualificationManage from './medicalTreatmentQualificationManage'
import ExpenseDelayEntryManage from './expenseDelayEntryManage'
import MedicalAllianceContractManage from './medicalAllianceContractManage'
import ImmediateFamilyMembersManage from './immediateFamilyMembersManage'
import ThirdPartyliabilityAppManage from './thirdPartyliabilityAppManage'
import Layout from '@/layout'
export default {
  path: '/personal-benefitts-declaration-manage',
  component: Layout,
  alwaysShow: true,
  meta: {
    title: '个人待遇申报管理',
    icon: 'example'
  },
  children: [
    SlowManage,
    AccordingDiseaseManage,
    AccidentHarmManage,
    DesignatedMedicalInstitutionManage,
    FamilyBedManage,
    FamilyPhysicianContractManage,
    ReferralReferralsManage,
    EmergencyHospitalizationManage,
    RemotePlacementManage,
    SpecialInspectionManage,
    SpecialDrugManage,
    LongtermDrugManage,
    IssueDrugManage,
    AnnualSalvageFiling,
    ChronicDiseaseTreatmentDosageRegimen,
    GeneralClinicManagement,
    OutpatientTwoDiseasesManage,
    GeneralHospitalManage,
    QuitSingleDiseaseManage,
    OnestopSettlementManage,
    NofirstVisitsManage,
    HospitalStartingLineManage,
    HospitalExtrasManage,
    RoamingHospitalizationManage,
    NondiffPaymentManage,
    MedicalTreatmentQualificationManage,
    ExpenseDelayEntryManage,
    MedicalAllianceContractManage,
    ImmediateFamilyMembersManage,
    ThirdPartyliabilityAppManage
  ]
}
