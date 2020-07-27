import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import BaseInformationManagement from './modules/BaseInformationManagement/index' //  基础信息管理
import PersonnelManagement from './modules/PersonnelManagement/index' //  人事管理
import JobsSettingManagement from './modules/JobsSettingManagement/index' //  岗位设置管理
import JobsChangeManagement from './modules/JobsChangeManagement/index' //  岗位变动管理
import EmploymentContractManagement from './modules/EmploymentContractManagement/index' //  聘用合同管理
import OpenRecruitmentManagement from './modules/OpenRecruitmentManagement/index' //  公开招聘管理
// import PersonnelAssignment from './modules/PersonnelAssignment/index' //  人事管理
// import DirectoryBusinessAttributeInfo from './modules/DirectoryBusinessAttributeInfo/index' //  个人待遇管理
// import PolicyParamManage from './modules/PolicyParamManage' //  政策参数管理
// import FundCollectsManage from './modules/FundCollectsManage' //  基金征集管理
// import HealthManage from './modules/HealthManage/index' //  体检管理
// import OverallQuery from './modules/OverallQuery/index' //  综合查询
// import BankCollection from './modules/BankCollection/index' // 银行托收
// import SutdentInfo from './modules/StudentInfo/index' // 大中专院校信息管理=
// import InsuranceRelationshipTransfer from './modules/InsuranceRelationshipTransfer/index' // 医保关系转移接续=
// import FinancialManage from './modules/FinancialManage/index' // 财务管理 // 异地就医=
// import PaymentInAdvance from './modules/PaymentInAdvance' // 预缴管理
// import OffsiteTreatment from './modules/OffsiteTreatment' // 财务管理
// import PayableComputingManagement from './modules/PayableComputingManagement/index' // 应缴计算管理
// import ResidentsPayManage from './modules/ResidentsPayManage/index' // 城乡居民缴费管理
// import PersonalAccountManagement from './modules/PersonalAccountManagement' // 个人账户管理

// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // {
  //   path: '/login',
  //   component: () => import('@/views/login/index'),
  //   hidden: true
  // },
  // {
  //   path: '/auth-redirect',
  //   component: () => import('@/views/login/auth-redirect'),
  //   hidden: true
  // },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  BaseInformationManagement,
  PersonnelManagement,
  JobsSettingManagement,
  JobsChangeManagement,
  OpenRecruitmentManagement,
  EmploymentContractManagement
  // PersonnelAssignment

  // DirectoryBusinessAttributeInfo,
  // PolicyParamManage,
  // FundCollectsManage,
  // PayableComputingManagement,
  // HealthManage,
  // OverallQuery,
  // BankCollection,
  // SutdentInfo,
  // InsuranceRelationshipTransfer,
  // FinancialManage,
  // OffsiteTreatment,
  // PaymentInAdvance,
  // ResidentsPayManage,
  // PersonalAccountManagement
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

export default router
