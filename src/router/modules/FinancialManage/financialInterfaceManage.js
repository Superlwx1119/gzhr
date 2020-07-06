// 财务接口管理
export default {
  path: '/interFace',
  component: () => import('@/views/financia-manage/interFace'),
  name: 'interFace',
  meta: { title: '财务接口管理', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'library',
      component: () => import('@/views/financia-manage/interFace/library/index'),
      name: 'library',
      meta: { title: '安易管理库管理', icon: 'spot' }
    },
    {
      path: 'financialInterFace',
      component: () => import('@/views/financia-manage/interFace/financialInterFace/index'),
      name: 'financialInterFace',
      meta: { title: '财务接口业务类型维护', icon: 'spot' }
    },
    {
      path: 'business',
      component: () => import('@/views/financia-manage/interFace/business/index'),
      name: 'business',
      meta: { title: '业务类型项目维护', icon: 'spot' }
    },
    {
      path: 'businessMaintenance',
      component: () => import('@/views/financia-manage/interFace/businessMaintenance/index'),
      name: 'businessMaintenance',
      meta: { title: '接口项目业务科目维护', icon: 'spot' }
    },
    {
      path: 'account',
      component: () => import('@/views/financia-manage/interFace/account/index'),
      name: 'account',
      meta: { title: '安易记账凭证生成', icon: 'spot' }
    },
    {
      path: 'credentials',
      component: () => import('@/views/financia-manage/interFace/credentials/index'),
      name: 'credentials',
      meta: { title: '凭证冲账', icon: 'spot' }
    },
    {
      path: 'credentialsSelect',
      component: () => import('@/views/financia-manage/interFace/credentialsSelect/index'),
      name: 'credentialsSelect',
      meta: { title: '凭证查询', icon: 'spot' }
    }
  ]
}
