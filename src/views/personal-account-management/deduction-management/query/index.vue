<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="扣减查询列表"
    title-need-handle
    class="credit-file-maintenance"
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <!-- <template slot="title-btns">
      <el-button type="primary" @click="addClick">批量审核</el-button>
    </template> -->

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <detai-dialog v-model="showDetailDialog" :dialog-title="dialogTitle" />
    <Audit v-model="showAuditDialog" :dialog-title="dialogTitle" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '../../components/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './columns'
import DetaiDialog from './dialog/details'
import itemData from './itemData'
import moment from 'moment'
import Audit from './dialog/audit'
export default {
  components: {
    NormalLayer,
    FormItems,
    DetaiDialog,
    Audit
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      multipleSelection: [],
      itemsDatas: itemData,
      queryForm: {
        xxx: '',
        dateRange: [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().endOf('month').format('YYYY-MM-DD')
        ]
      },
      columns: Columns,
      tableData: [
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' },
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' }
      ],
      showDetailDialog: false, // 详情
      dialogTitle: '',
      showAuditDialog: false // 审核
    }
  },
  methods: {
    addClick(row) {
      if (this.multipleSelection.length === 0) {
        this.$msgConfirm('请选择一条数据')
      } else {
        this.$msgConfirm('发起审核').then(res => {
          this.dialogTitle = '审核'
          this.showAuditDialog = true
        }).catch(err => {
          this.$msgInfo(err)
        })
      }
    },
    detailsClick(row) {
      this.dialogTitle = '个人账户补注扣减信息详情'
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
.credit-file-maintenance {
  position: relative;
}
</style>
