// export default {
//   path: '/drug-info',
//   component: () => import('@/views/directory-business-attribute-info/drug-info/index'),
//   name: 'drugInfo',
//   meta: { title: '药品目录业务属性信息管理', icon: '' },
//   redirect: 'noRedirect',
//   alwaysShow: true,
//   children: [
//     {
//       path: 'info-maintenance',
//       component: () => import('@/views/directory-business-attribute-info/drug-info/info-maintenance/index'),
//       name: 'drugInfoMaintenance',
//       meta: { title: '药品目录业务属性信息维护', icon: '' }
//     },
//     {
//       path: 'info-audit',
//       component: () => import('@/views/directory-business-attribute-info/drug-info/info-audit/index'),
//       name: 'drugInfoAudit',
//       meta: { title: '药品目录业务属性信息审核', icon: '' }
//     },
//     {
//       path: 'info-query',
//       component: () => import('@/views/directory-business-attribute-info/drug-info/info-query/index'),
//       name: 'drugInfoQuery',
//       meta: { title: '药品目录业务属性信息查询', icon: '' }
//     }
//   ]
// }
export default [
  {
    path: '/drug-info/info-maintenance',
    component: () => import('@/views/directory-business-attribute-info/drug-info/info-maintenance/index'),
    name: 'drugInfoMaintenance',
    meta: { title: '药品目录业务属性信息维护', icon: 'spot' }
  },
  {
    path: '/drug-info/info-audit',
    component: () => import('@/views/directory-business-attribute-info/drug-info/info-audit/index'),
    name: 'drugInfoAudit',
    meta: { title: '药品目录业务属性信息审核', icon: 'spot' }
  },
  {
    path: '/drug-info/info-query',
    component: () => import('@/views/directory-business-attribute-info/drug-info/info-query/index'),
    name: 'drugInfoQuery',
    meta: { title: '药品目录业务属性信息查询', icon: 'spot' }
  }
]
