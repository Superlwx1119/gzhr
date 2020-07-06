export default {
  path: '/studentInfoSelect',
  component: () => import('@/views/studentInfo/studentInfoSelect'),
  name: 'studentInfoSelect',
  meta: { title: '大中专学生信息查询', icon: '' },
  redirect: 'noRedirect',
  alwaysShow: true,
  children: [
    {
      path: 'index',
      component: () => import('@/views/studentInfo/studentInfoSelect/index'),
      name: 'index',
      meta: { title: '大中专学生信息查询', icon: 'spot' }
    }
  ]
}
