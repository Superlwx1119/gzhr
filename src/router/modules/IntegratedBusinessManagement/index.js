//  综合业务管理
import Layout from '@/layout'
import cardService from './cardService'
import medicalFunds from './medicalFunds'// 城乡居民大病医疗保险医疗资金
import businessManagement from './businessManagement'// 城乡居民医保征缴业务管理
import insuranceStatusManagement from './insuranceStatusManagement'// 险种状态管理
import survivalCertificationManagement from './survivalCertificationManagement'// 生存认证管理
import MedicareTreatment from './MedicareTreatment' //  医保待遇管理

import payHistoryRevisionManagement from './payHistoryRevisionManagement' //  缴费历史修订管理
import medicareFeeRefundManagement from './medicareFeeRefundManagement' //  医保费退款管理
import warehousingManagement from './warehousingManagement' //  入库管理
import smallCarSwayingManagement from './smallCarSwayingManagement' //  小客车摇号管理

import OneTimePay from './OneTimePay' //  一次性缴核定事项管理
import ProvincialInsuredInfoManagement from './ProvincialInsuredInfoManagement'// 省属参保人信息管理
import UnemployedMonthlyTreatment from './UnemployedMonthlyTreatment'// 失业代扣人员月度处理
import AccountBalanceDiscountFeatures from './AccountBalanceDiscountFeatures'// 死亡人员（超2年）个账余额扣回功能
import JuniorCollegeInstitutionInfoManagement from './JuniorCollegeInstitutionInfoManagement'// 大中专院校信息管理
import assistanceManagement from './assistanceManagement' //  城乡政府资助金管理
import bulkRefundManagement from './bulkRefundManagement' //  城乡居民医保批量退款管理
import insuranceDataExchange from './insuranceDataExchange' //  城乡居民医保资助参保数据交换表
import statisticPayer from './statisticPayer' //  城乡居民医保参保缴费人数统计
import grantsManagement from './grantsManagement' //  城乡居民医保政府资助金管理
import cancelAfterVerification from './cancelAfterVerification' //  城乡居民医保征缴信息核销
import informationSearch from './informationSearch' //  城乡居民医保信息查询
import insuredManagement from './insuredManagement' //  城乡居民医保参保管理
export default {
  path: 'Integrated-business-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '综合业务管理', icon: 'example' },
  children: [
    cardService,
    medicalFunds,
    businessManagement,
    insuranceStatusManagement,
    survivalCertificationManagement,
    MedicareTreatment,
    payHistoryRevisionManagement,
    medicareFeeRefundManagement,
    warehousingManagement,
    smallCarSwayingManagement,
    OneTimePay,
    ProvincialInsuredInfoManagement,
    UnemployedMonthlyTreatment,
    AccountBalanceDiscountFeatures,
    JuniorCollegeInstitutionInfoManagement,
    assistanceManagement,
    bulkRefundManagement,
    insuranceDataExchange,
    statisticPayer,
    cancelAfterVerification,
    informationSearch,
    grantsManagement,
    insuredManagement
  ]
}
