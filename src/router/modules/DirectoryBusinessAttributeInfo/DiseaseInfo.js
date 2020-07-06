// export default {
//   path: '/disease-info',
//   component: () => import('@/views/directory-business-attribute-info/disease-info/index'),
//   name: 'diseaseInfo',
//   meta: { title: '疾病限额管理', icon: '' },
//   redirect: 'noRedirect',
//   alwaysShow: true,
//   children: [
//     {
//       path: 'info-maintenance',
//       component: () => import('@/views/directory-business-attribute-info/disease-info/info-maintenance/index'),
//       name: 'diseaseInfoMaintenance',
//       meta: { title: '疾病限额维护', icon: '' }
//     },
//     {
//       path: 'info-audit',
//       component: () => import('@/views/directory-business-attribute-info/disease-info/info-audit/index'),
//       name: 'diseaseInfoAudit',
//       meta: { title: '疾病限额审核', icon: '' }
//     },
//     {
//       path: 'info-query',
//       component: () => import('@/views/directory-business-attribute-info/disease-info/info-query/index'),
//       name: 'diseaseInfoQuery',
//       meta: { title: '疾病限额查询', icon: '' }
//     }
//   ]
// }
export default [
  {
    path: '/disease-info/info-maintenance',
    component: () => import('@/views/directory-business-attribute-info/disease-info/info-maintenance/index'),
    name: 'diseaseInfoMaintenance',
    meta: { title: '疾病限额维护', icon: 'spot' }
  },
  {
    path: '/disease-info/info-audit',
    component: () => import('@/views/directory-business-attribute-info/disease-info/info-audit/index'),
    name: 'diseaseInfoAudit',
    meta: { title: '疾病限额审核', icon: 'spot' }
  },
  {
    path: '/disease-info/info-query',
    component: () => import('@/views/directory-business-attribute-info/disease-info/info-query/index'),
    name: 'diseaseInfoQuery',
    meta: { title: '疾病限额查询', icon: 'spot' }
  }
]
