// export default {
//   path: '/medical-consumables-info',
//   component: () => import('@/views/directory-business-attribute-info/medical-consumables-info/index'),
//   name: 'medicalConsumablesInfo',
//   meta: { title: '医用耗材业务属性信息管理', icon: '' },
//   redirect: 'noRedirect',
//   alwaysShow: true,
//   children: [
//     {
//       path: 'info-maintenance',
//       component: () => import('@/views/directory-business-attribute-info/medical-consumables-info/info-maintenance/index'),
//       name: 'medicalConsumablesInfoMaintenance',
//       meta: { title: '医用耗材业务属性信息维护', icon: '' }
//     },
//     {
//       path: 'info-audit',
//       component: () => import('@/views/directory-business-attribute-info/medical-consumables-info/info-audit/index'),
//       name: 'medicalConsumablesInfoAudit',
//       meta: { title: '医用耗材业务属性信息审核', icon: '' }
//     },
//     {
//       path: 'info-query',
//       component: () => import('@/views/directory-business-attribute-info/medical-consumables-info/info-query/index'),
//       name: 'medicalConsumablesInfoQuery',
//       meta: { title: '医用耗材业务属性信息查询', icon: '' }
//     }
//   ]
// }
export default [
  {
    path: '/medical-consumables-info/info-maintenance',
    component: () => import('@/views/directory-business-attribute-info/medical-consumables-info/info-maintenance/index'),
    name: 'medicalConsumablesInfoMaintenance',
    meta: { title: '医用耗材业务属性信息维护', icon: 'spot' }
  },
  {
    path: '/medical-consumables-info/info-audit',
    component: () => import('@/views/directory-business-attribute-info/medical-consumables-info/info-audit/index'),
    name: 'medicalConsumablesInfoAudit',
    meta: { title: '医用耗材业务属性信息审核', icon: 'spot' }
  },
  {
    path: '/medical-consumables-info/info-query',
    component: () => import('@/views/directory-business-attribute-info/medical-consumables-info/info-query/index'),
    name: 'medicalConsumablesInfoQuery',
    meta: { title: '医用耗材业务属性信息查询', icon: 'spot' }
  }
]
