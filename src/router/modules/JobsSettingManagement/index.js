//  岗位设置管理
import Layout from '@/layout'
export default {
  path: 'jobs-setting-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '岗位设置管理', icon: 'example' },
  children: [
    {
      path: '/jobs-plan-apply',
      component: () => import('@/views/jobs-setting-management/jobs-plan-apply/index'),
      name: 'JobsPlanApply',
      meta: { title: '岗位设置方案申报', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'jobs-plan-apply',
          component: () => import('@/views/jobs-setting-management/jobs-plan-apply/index'),
          name: 'JobsPlanApply',
          meta: { title: '岗位设置方案申报', icon: '' }
        }
      ]
    },
    {
      path: '/jobs-plan-audit',
      component: () => import('@/views/jobs-setting-management/jobs-plan-audit/index'),
      name: 'JobsPlanAudit',
      meta: { title: '岗位设置方案审核', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'jobs-plan-audit',
          component: () => import('@/views/jobs-setting-management/jobs-plan-audit/index'),
          name: 'JobsPlanAudit',
          meta: { title: '岗位设置方案审核', icon: '' }
        }
      ]
    },
    {
      path: '/jobs-plan-approve',
      component: () => import('@/views/jobs-setting-management/jobs-plan-approve/index'),
      name: 'JobsPlanApprove',
      meta: { title: '岗位设置方案审批', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'jobs-plan-approve',
          component: () => import('@/views/jobs-setting-management/jobs-plan-approve/index'),
          name: 'JobsPlanApprove',
          meta: { title: '岗位设置方案审批', icon: '' }
        }
      ]
    },
    {
      path: '/jobs-plan-search',
      component: () => import('@/views/jobs-setting-management/jobs-plan-search/index'),
      name: 'JobsPlanSearch',
      meta: { title: '岗位设置方案查询', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'jobs-plan-search',
          component: () => import('@/views/jobs-setting-management/jobs-plan-search/index'),
          name: 'JobsPlanSearch',
          meta: { title: '岗位设置方案查询', icon: '' }
        }
      ]
    },
    {
      path: '/jobs-hire-apply',
      component: () => import('@/views/jobs-setting-management/jobs-hire-apply/index'),
      name: 'JobsHireApply',
      meta: { title: '岗位首次聘用申报', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'jobs-hire-apply',
          component: () => import('@/views/jobs-setting-management/jobs-hire-apply/index'),
          name: 'JobsHireApply',
          meta: { title: '岗位首次聘用申报', icon: '' }
        }
      ]
    },
    {
      path: '/jobs-hire-audit',
      component: () => import('@/views/jobs-setting-management/jobs-hire-audit/index'),
      name: 'JobsHireAudit',
      meta: { title: '岗位首次聘用审核', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'jobs-hire-audit',
          component: () => import('@/views/jobs-setting-management/jobs-hire-audit/index'),
          name: 'JobsHireAudit',
          meta: { title: '岗位首次聘用审核', icon: '' }
        }
      ]
    },
    {
      path: '/jobs-hire-approve',
      component: () => import('@/views/jobs-setting-management/jobs-hire-approve/index'),
      name: 'JobsHireApprove',
      meta: { title: '岗位首次聘用审批', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'jobs-hire-approve',
          component: () => import('@/views/jobs-setting-management/jobs-hire-approve/index'),
          name: 'JobsHireApprove',
          meta: { title: '岗位首次聘用审批', icon: '' }
        }
      ]
    },
    {
      path: '/jobs-hire-search',
      component: () => import('@/views/jobs-setting-management/jobs-hire-search/index'),
      name: 'JobsHireSearch',
      meta: { title: '岗位首次聘用查询', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'jobs-hire-search',
          component: () => import('@/views/jobs-setting-management/jobs-hire-search/index'),
          name: 'JobsHireSearch',
          meta: { title: '岗位首次聘用查询', icon: '' }
        }
      ]
    },
    {
      path: '/special-jobs-apply',
      component: () => import('@/views/jobs-setting-management/special-jobs-apply/index'),
      name: 'SpecialJobsApply',
      meta: { title: '特岗设置申报', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'special-jobs-apply',
          component: () => import('@/views/jobs-setting-management/special-jobs-apply/index'),
          name: 'SpecialJobsApply',
          meta: { title: '特岗设置申报', icon: '' }
        }
      ]
    },
    {
      path: '/special-jobs-audit',
      component: () => import('@/views/jobs-setting-management/special-jobs-audit/index'),
      name: 'SpecialJobsAudit',
      meta: { title: '特岗设置审核', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'special-jobs-audit',
          component: () => import('@/views/jobs-setting-management/special-jobs-audit/index'),
          name: 'SpecialJobsAudit',
          meta: { title: '特岗设置审核', icon: '' }
        }
      ]
    },
    {
      path: '/special-jobs-approve',
      component: () => import('@/views/jobs-setting-management/special-jobs-approve/index'),
      name: 'SpecialJobsApprove',
      meta: { title: '特岗设置审批', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'special-jobs-approve',
          component: () => import('@/views/jobs-setting-management/special-jobs-approve/index'),
          name: 'SpecialJobsApprove',
          meta: { title: '特岗设置审批', icon: '' }
        }
      ]
    },
    {
      path: '/special-jobs-search',
      component: () => import('@/views/jobs-setting-management/special-jobs-search/index'),
      name: 'SpecialJobsSearch',
      meta: { title: '特岗设置查询', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'special-jobs-search',
          component: () => import('@/views/jobs-setting-management/special-jobs-search/index'),
          name: 'SpecialJobsSearch',
          meta: { title: '特岗设置查询', icon: '' }
        }
      ]
    }
  ]
}
