<!-- 账户共济授权审核 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="账户共济授权审核列表"
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
        <!-- <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button> -->
        <el-button type="text" class="modify" @click="auditClick(scope.row)">审核</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <!-- <detail-dialog v-model="showDetailDialog" dialog-title="账户共济授权审核详情" /> -->
    <audit-dialog v-model="showAuditDialog" dialog-title="账户共济授权审核" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
// import DetailDialog from '../detail-dialog'
import AuditDialog from '@/views/components/AuditDialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    // DetailDialog,
    AuditDialog
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
        { label: '使用人证件号', prop: 'xxx', type: 'input' },
        { label: '绑定状态', prop: 'xxx', type: 'select' },
        { label: '有效日期', prop: 'dateRange', type: 'dateRange' }
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
