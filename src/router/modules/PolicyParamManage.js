import Layout from '@/layout'
export default {
  path: 'policy-param-manage',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '政策参数管理', icon: 'example' },
  children: [
    {
      path: '/business-check-control-param',
      component: () => import('@/views/policy-param-manage/business-check-control-param/index'),
      name: 'businessCheckControlParam',
      meta: { title: '业务检查控制参数管理', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: true,
      children: [
        {
          path: 'param-maintenance',
          component: () => import('@/views/policy-param-manage/business-check-control-param/param-maintenance/index'),
          name: 'businessCheckControlParamMaintenance',
          meta: { title: '业务检查控制参数维护', icon: 'spot' }
        },
        {
          path: 'param-audit',
          component: () => import('@/views/policy-param-manage/business-check-control-param/param-audit/index'),
          name: 'businessCheckControlParamAudit',
          meta: { title: '业务检查控制参数审核', icon: 'spot' }
        },
        {
          path: 'param-query',
          component: () => import('@/views/policy-param-manage/business-check-control-param/param-query/index'),
          name: 'businessCheckControlParamQuery',
          meta: { title: '业务检查控制参数查询', icon: 'spot' }
        }
      ]
    },
    {
      path: '/system-parameter-management',
      component: () => import('@/views/policy-param-manage/system-parameter-management/index'),
      name: 'systemParameterManagement',
      meta: { title: '系统参数管理', icon: 'spot' },
      redirect: 'noRedirect',
      alwaysShow: true,
      children: [
        {
          path: 'system-parameter-maintenance',
          component: () => import('@/views/policy-param-manage/system-parameter-management/system-parameter-maintenance/index'),
          name: 'systemParameterMaintenance',
          meta: { title: '系统参数维护', icon: 'spot' }
        },
        {
          path: 'system-parameter-audit',
          component: () => import('@/views/policy-param-manage/system-parameter-management/system-parameter-audit/index'),
          name: 'systemParameterAudit',
          meta: { title: '系统参数审核', icon: 'spot' }
        },
        {
          path: 'system-parameter-query',
          component: () => import('@/views/policy-param-manage/system-parameter-management/system-parameter-query/index'),
          name: 'systemParameterQuery',
          meta: { title: '系统参数查询', icon: 'spot' }
        }
      ]
    }
  ]
}
