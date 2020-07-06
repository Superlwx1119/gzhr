export default {
  path: '/medical-charge-review',
  component: () => import('@/views/offsite-treatment/medical-charge-review'),
  name: 'medicalChargeReview',
  meta: { title: '异地医疗费受理审核(参保地)', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'acceptance',
      component: () => import('@/views/offsite-treatment/medical-charge-review/acceptance'),
      name: 'offsiteMedicalChargeAcceptance',
      meta: { title: '异地医疗费受理', icon: 'spot' }
    },
    {
      path: 'examine',
      component: () => import('@/views/offsite-treatment/medical-charge-review/examine'),
      name: 'offsiteMedicalChargeExamine',
      meta: { title: '异地医疗费初审', icon: 'spot' }
    },
    {
      path: 'review',
      component: () => import('@/views/offsite-treatment/medical-charge-review/review'),
      name: 'offsiteMedicalChargeReview',
      meta: { title: '异地医疗费复审', icon: 'spot' }
    },
    {
      path: 'maintain',
      component: () => import('@/views/offsite-treatment/medical-charge-review/maintain'),
      name: 'offsiteMedicalChargeMaintain',
      meta: { title: '异地医疗费扣付原因维护', icon: 'spot' }
    }
  ]
}

