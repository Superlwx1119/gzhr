<!-- 个人账户提现申请 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="个人账户提现申请列表"
    title-need-handle
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="addClick">新增</el-button>
      <el-button type="danger" @click="batchDeleteClick">批量删除</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
        <el-button type="text" class="modify" @click="editClick(scope.row)">修改</el-button>
        <el-button type="text" class="delete" @click="deleteClick(scope.row)">删除</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
    <detail-dialog v-model="showDetailDialog" dialog-title="个人账户提现申请详情" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import moment from 'moment'
import EditDialog from './edit-dialog'
import DetailDialog from '../detail-dialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    EditDialog,
    DetailDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '证件类型', prop: 'xxx', type: 'select' },
        { label: '证件号码', prop: 'xxx', type: 'input' },
        { label: '姓名', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        xxx: '',
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
    addClick(row) {
      this.dialogTitle = '个人账户提现申请新增'
      this.showEditDialog = true
    },
    editClick(row) {
      this.dialogTitle = '个人账户提现申请编辑'
      this.showEditDialog = true
    },
    detailsClick(row) {
      this.showDetailDialog = true
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

