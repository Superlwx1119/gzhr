//  综合查询
import Layout from '@/layout'
import MedicalTreatmentQuery from './MedicalTreatmentQuery'
export default {
  path: 'overall-query',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '综合查询', icon: 'example' },
  children: [
    MedicalTreatmentQuery,
    {
      path: '/personal-rights-query',
      component: () => import('@/views/overall-query/personal-rights-query/index'),
      name: 'personalRightsQuery',
      meta: { title: '个人权益记录查询', icon: 'spot' }
    },
    {
      path: '/unit-gold-query',
      component: () => import('@/views/overall-query/unit-gold-query/index'),
      name: 'unitGoldQuery',
      meta: { title: '单位待转金查询', icon: 'spot' }
    },
    {
      path: '/employee-pay-info-query',
      component: () => import('@/views/overall-query/employee-pay-info-query/index'),
      name: 'employeePayInfoQuery',
      meta: { title: '职工缴费信息查询', icon: 'spot' }
    },
    {
      path: '/unit-pay-info-query',
      component: () => import('@/views/overall-query/unit-pay-info-query/index'),
      name: 'unitPayInfoQuery',
      meta: { title: '单位缴费信息查询', icon: 'spot' }
    },
    {
      path: '/resident-pay-info-query',
      component: () => import('@/views/overall-query/resident-pay-info-query/index'),
      name: 'residentPayInfoQuery',
      meta: { title: '居民缴费信息查询', icon: 'spot' }
    },
    {
      path: '/financial-book-query',
      component: () => import('@/views/overall-query/financial-book-query/index'),
      name: 'financialBookQuery',
      meta: { title: '财务记账信息查询', icon: 'spot' }
    },
    {
      path: '/unit-insurance-query',
      component: () => import('@/views/overall-query/unit-insurance-query/index'),
      name: 'unitInsuranceQuery',
      meta: { title: '参保单位信息查询', icon: 'spot' }
    },
    {
      path: '/insurance-personal-query',
      component: () => import('@/views/overall-query/insurance-personal-query/index'),
      name: 'insurancePersonalQuery',
      meta: { title: '参保人员信息查询', icon: 'spot' }
    },
    {
      path: '/unit-overall-query',
      component: () => import('@/views/overall-query/unit-overall-query/index'),
      name: 'unitOverallQuery',
      meta: { title: '单位综合查询', icon: 'spot' }
    },
    {
      path: '/personal-overall-query',
      component: () => import('@/views/overall-query/personal-overall-query/index'),
      name: 'personalOverallQuery',
      meta: { title: '个人综合查询', icon: 'spot' }
    }
  ]
}
