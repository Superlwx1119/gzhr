import Layout from '@/layout'
import taxTake from './taxTake'
export default {
  path: 'taxCollection',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '税务半责', icon: 'example' },
  children: [
    taxTake
  ]
}
