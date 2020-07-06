<!-- 账户共济授权 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="账户共济明细列表"
    title-need-handle
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="registrationClick">登记</el-button>
      <el-button type="primary" @click="unbundlingClick">解绑</el-button>
      <el-button type="danger" @click="batchDeleteClick">批量删除</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="delete" @click="deleteClick(scope.row)">删除</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import moment from 'moment'
import EditDialog from './edit-dialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    EditDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '授权人姓名', prop: 'xxx', type: 'input' },
        { label: '授权人证件类', prop: 'xxx', type: 'select' },
        { label: '授权人证件号', prop: 'xxx', type: 'input' },
        { label: '使用人姓名', prop: 'xxx', type: 'input' },
        { label: '使用人证件类', prop: 'xxx1', type: 'select' },
        { label: '使用人证件号', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: '',
        xxx1: '',
        dateRange: [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().endOf('month').format('YYYY-MM-DD')
        ]
      },
      columns: Columns,
      tableData: [
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' },
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' }
      ],
      showDetailDialog: false,
      dialogTitle: '新增',
      showEditDialog: false
    }
  },
  methods: {
    registrationClick() {
      this.$msgSuccess('')
    },
    unbundlingClick(row) {
      this.dialogTitle = '解绑'
      this.showEditDialog = true
    },
    deleteEvent(row) {
      this.$msgSuccess('删除成功')
    },
    batchDeleteEvent() {
      this.$msgSuccess('批量删除成功')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

