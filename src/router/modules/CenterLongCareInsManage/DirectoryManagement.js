export default {
  path: '/directory-management',
  component: () => import('@/views/center-long-care-ins-manage/directory-management/index'),
  name: 'DirectoryManagement',
  meta: { title: '长护目录管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'maintenance-inquiry-life-ecare-service-items',
      component: () => import('@/views/center-long-care-ins-manage/directory-management/maintenance-inquiry-life-ecare-service-items/index'),
      name: 'MaintenanceInquiryLifeEcareServiceItems',
      meta: { title: '生活照料服务项目维护与查询', icon: 'spot' }
    },
    {
      path: 'audit-of-life-care-services',
      component: () => import('@/views/center-long-care-ins-manage/directory-management/audit-of-life-care-services/index'),
      name: 'AuditOfLifeCareServices',
      meta: { title: '生活照料服务项目审核', icon: 'spot' }
    },
    {
      path: 'signature-of-life-care-services',
      component: () => import('@/views/center-long-care-ins-manage/directory-management/signature-of-life-care-services/index'),
      name: 'SignatureOfLifeCareServices',
      meta: { title: '生活照料服务项目审签', icon: 'spot' }
    },
    {
      path: 'medical-care-services',
      component: () => import('@/views/center-long-care-ins-manage/directory-management/medical-care-services/index'),
      name: 'MedicalCareServices',
      meta: { title: '医疗护理服务项目维护与查询', icon: 'spot' }
    },
    {
      path: 'audit-medical-care-services',
      component: () => import('@/views/center-long-care-ins-manage/directory-management/audit-medical-care-services/index'),
      name: 'AuditMedicalCareServices',
      meta: { title: '医疗护理服务项目审核', icon: 'spot' }
    },
    {
      path: 'signature-medical-care-services',
      component: () => import('@/views/center-long-care-ins-manage/directory-management/signature-medical-care-services/index'),
      name: 'SignatureMedicalCareServices',
      meta: { title: '医疗护理服务项目审签', icon: 'spot' }
    }
  ]
}
