export default {
  path: '/write-off-return-management',
  name: 'WriteOffReturnManagement',
  component: () => import('@/views/payable-computing-management/write-off-return-management'),
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '核销返还管理', icon: '' },
  children: [
    {
      path: 'unit-medical-fee-write-off',
      component: () => import('@/views/payable-computing-management/write-off-return-management/unit-medical-fee-write-off/index'),
      name: 'UnitMedicalFeeWriteOff',
      meta: { title: '单位医疗保险费核销', icon: 'spot' }
    },
    {
      path: 'unit-medical-fee-write-off-review',
      component: () => import('@/views/payable-computing-management/write-off-return-management/unit-medical-fee-write-off-review/index'),
      name: 'UnitMedicalFeeWriteOffReview',
      meta: { title: '单位医疗保险费核销审核', icon: 'spot' }
    },
    {
      path: 'personnel-medical-fee-write-off',
      component: () => import('@/views/payable-computing-management/write-off-return-management/personnel-medical-fee-write-off/index'),
      name: 'PersonnelMedicalFeeWriteOff',
      meta: { title: '人员医疗保险费核销', icon: 'spot' }
    },
    {
      path: 'personnel-medical-fee-write-off-review',
      component: () => import('@/views/payable-computing-management/write-off-return-management/personnel-medical-fee-write-off-review/index'),
      name: 'PersonnelMedicalFeeWriteOffReview',
      meta: { title: '人员医疗保险费核销审核', icon: 'spot' }
    }
  ]
}
