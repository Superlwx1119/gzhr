import Layout from '@/layout'
import Unit from './Unit/index' // 单位托管
import ThirdParty from './ThirdParty/index' // 第三方代缴
import Employment from './Employment/index' // 灵活就业

export default {
  path: 'BankCollection',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '银行托收', icon: 'example' },
  children: [
    Unit,
    ThirdParty,
    Employment
  ]
}
