<!-- 支取个人账户资金审核 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="支取个人账户资金审核列表"
    title-need-handle
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="batchAuditClick">批量审核</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
        <el-button type="text" class="modify" @click="auditClick(scope.row)">审核</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <detail-dialog v-model="showDetailDialog" dialog-title="支取个人账户资金审核详情" />
    <audit-dialog v-model="showAuditDialog" dialog-title="支取个人账户资金审核" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import DetailDialog from '../detail-dialog'
import AuditDialog from '@/views/components/AuditDialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    DetailDialog,
    AuditDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '证件类型', prop: 'xxx', type: 'select' },
        { label: '证件号码', prop: 'xxx', type: 'input' },
        { label: '姓名', prop: 'xxx', type: 'select' },
        { label: '业务状态', prop: 'xxx', type: 'select' },
        { label: '经办日期', prop: 'dateRange', type: 'dateRange' },
        { label: '所属区', prop: 'xxx', type: 'select' },
        { label: '受理单号', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: '',
        dateRange: []
      },
      columns: Columns,
      tableData: [
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' },
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' }
      ],
      showDetailDialog: false,
      showAuditDialog: false
    }
  },
  methods: {
    batchAuditClick() {
      if (this.multipleSelection.length <= 0) {
        this.$msgConfirm('请选择')
      } else {
        this.showAuditDialog = true
      }
    },
    auditClick(row) {
      this.showAuditDialog = true
    },
    detailsClick(row) {
      this.showDetailDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
