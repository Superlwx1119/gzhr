// export default {
//   path: '/medical-service-info',
//   component: () => import('@/views/directory-business-attribute-info/medical-service-info/index'),
//   name: 'medicalServiceInfo',
//   meta: { title: '医疗服务项目业务属性信息管理', icon: '' },
//   redirect: 'noRedirect',
//   alwaysShow: true,
//   children: [
//     {
//       path: 'info-maintenance',
//       component: () => import('@/views/directory-business-attribute-info/medical-service-info/info-maintenance/index'),
//       name: 'medicalServiceInfoMaintenance',
//       meta: { title: '医疗服务项目业务属性信息维护', icon: '' }
//     },
//     {
//       path: 'info-audit',
//       component: () => import('@/views/directory-business-attribute-info/medical-service-info/info-audit/index'),
//       name: 'medicalServiceInfoAudit',
//       meta: { title: '医疗服务项目业务属性信息审核', icon: '' }
//     },
//     {
//       path: 'info-query',
//       component: () => import('@/views/directory-business-attribute-info/medical-service-info/info-query/index'),
//       name: 'medicalServiceInfoQuery',
//       meta: { title: '医疗服务项目业务属性信息查询', icon: '' }
//     }
//   ]
// }
export default [
  {
    path: '/medical-service-info/info-maintenance',
    component: () => import('@/views/directory-business-attribute-info/medical-service-info/info-maintenance/index'),
    name: 'medicalServiceInfoMaintenance',
    meta: { title: '医疗服务项目业务属性信息维护', icon: 'spot' }
  },
  {
    path: '/medical-service-info/info-audit',
    component: () => import('@/views/directory-business-attribute-info/medical-service-info/info-audit/index'),
    name: 'medicalServiceInfoAudit',
    meta: { title: '医疗服务项目业务属性信息审核', icon: 'spot' }
  },
  {
    path: '/medical-service-info/info-query',
    component: () => import('@/views/directory-business-attribute-info/medical-service-info/info-query/index'),
    name: 'medicalServiceInfoQuery',
    meta: { title: '医疗服务项目业务属性信息查询', icon: 'spot' }
  }
]
