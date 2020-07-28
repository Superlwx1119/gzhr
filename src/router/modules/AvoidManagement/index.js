//  回避管理
import Layout from '@/layout'
export default {
  path: 'avoid-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '回避管理', icon: 'example' },
  children: [
    {
      path: '/avoid-record',
      component: () => import('@/views/avoid-management/avoid-record/index'),
      name: 'AvoidRecord',
      meta: { title: '回避备案', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'avoid-record',
          component: () => import('@/views/avoid-management/avoid-record/index'),
          name: 'AvoidRecord',
          meta: { title: '回避备案', icon: '' }
        }
      ]
    },
    {
      path: '/avoid-record-search',
      component: () => import('@/views/avoid-management/avoid-record-search/index'),
      name: 'AvoidRecordSearch',
      meta: { title: '回避备案查询', icon: '' },
      redirect: 'noRedirect',
      alwaysShow: false,
      children: [
        {
          path: 'avoid-record-search',
          component: () => import('@/views/avoid-management/avoid-record-search/index'),
          name: 'AvoidRecordSearch',
          meta: { title: '回避备案查询', icon: '' }
        }
      ]
    }
  ]
}
