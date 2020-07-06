import Layout from '@/layout'
import Select from './Select'
import Signed from './Signed'
export default {
  path: 'StudentInfo',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '大中专院校信息管理', icon: 'example' },
  children: [
    Select,
    Signed
  ]
}
