//  长期护理保险管理（商保端）
//  虽然这是商保端，但是页面都在中心端的long-ins-eva-bus-manage文件夹下，因为他们公用某些业务组件，只是不同端而已
import Layout from '@/layout'
import LongInsEvaBusManage from './LongInsEvaBusManage'
export default {
  path: 'shang-long-care-ins-manage',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '长期护理保险管理（商保端）', icon: 'example' },
  children: LongInsEvaBusManage
}
