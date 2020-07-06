// 注册全局组件
import Pagination from '@/components/Pagination/default' // ComponentA
import List from '@/components/list/default'
import ExpandList from '@/components/list/ExpandList'
import SearchTable from '@/components/SearchList/SearchTable'
import FormDialog from '@/components/dialog/formDialog'
import RightDetailInfo from '@/components/RightDetailInfo/index'
import LeftSearchTable from '@/components/SearchList/LeftSearchTable'
// import ListDialog from '@/components/dialog/formDialog'
import ConditionHeader from '@/components/ConditionHeader'
import Audit from '@/components/Audit/Audit' //  审核弹窗
import AuditDialog from '@/views/components/AuditDialog/index' //  审核弹窗
import MyTableView from '@/components/list/myTableView/index' //  表格组件
import FormItems from '@/views/components/PageLayers/form-items' // 表单组件

export default (Vue) => {
  Vue.component('Pagination', Pagination)
  Vue.component('List', List)
  Vue.component('ExpandList', ExpandList)
  Vue.component('SearchTable', SearchTable)
  Vue.component('FormDialog', FormDialog)
  Vue.component('RightDetailInfo', RightDetailInfo)
  Vue.component('LeftSearchTable', LeftSearchTable)
  // Vue.component('ListDialog', ListDialog)
  Vue.component('ConditionHeader', ConditionHeader)
  Vue.component('Audit', Audit)
  Vue.component('AuditDialog', AuditDialog)
  Vue.component('MyTableView', MyTableView)
  Vue.component('FormItems', FormItems)
}
