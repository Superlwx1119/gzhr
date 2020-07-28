//  吃空饷管理
import Layout from '@/layout'
export default {
  path: 'freeload-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '吃空饷管理', icon: 'example' },
  children: [
    {
      path: '/freeload-add',
      component: () => import('@/views/freeload-management/freeload-add/index'),
      name: 'FreeloadAdd',
      meta: { title: '吃空饷新增', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'freeload-add',
          component: () => import('@/views/freeload-management/freeload-add/index'),
          name: 'FreeloadAdd',
          meta: { title: '吃空饷新增', icon: '' }
        }
      ]
    },
    {
      path: '/freeload-back',
      component: () => import('@/views/freeload-management/freeload-back/index'),
      name: 'FreeloadBack',
      meta: { title: '吃空饷反馈', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'freeload-back',
          component: () => import('@/views/freeload-management/freeload-back/index'),
          name: 'FreeloadBack',
          meta: { title: '吃空饷反馈', icon: '' }
        }
      ]
    }
  ]
}
