//  公开招聘管理
import Layout from '@/layout'
import OpenRecruitment from './OpenRecruitment'
import InterviewManagement from './InterviewManagement'
import RecruimentResultRecord from './RecruimentResultRecord'
export default {
  path: 'open-recruitment-management',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  meta: { title: '公开招聘管理', icon: 'example' },
  children: [
    OpenRecruitment,
    InterviewManagement,
    RecruimentResultRecord
  ]
}
