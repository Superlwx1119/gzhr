<!-- 门慢门特维护 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="单位托收签约列表"
    title-need-handle
    class="credit-file-maintenance"
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="addClick">审核</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="editClick(scope.row)">详情</el-button>
      </template>
    </my-table-view>
    <Pagination />
    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
    <Audit v-model="showAudit" :dialog-title="dialogTitle" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '../../components/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './columns'
import EditDialog from './dialog/edit'
import itemData from './itemData'
import moment from 'moment'
import Audit from './dialog/audit'
export default {
  components: {
    NormalLayer,
    FormItems,
    EditDialog,
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
      showAudit: false, // 审核
      dialogTitle: '',
      showEditDialog: false // 详情
    }
  },
  methods: {
    addClick(row) {
      if (this.multipleSelection.length === 0) {
        this.$msgConfirm('请选择一条数据')
      } else {
        this.$msgConfirm('发起审核').then(res => {
          this.dialogTitle = '审核'
          this.showAudit = true
        }).catch(err => {
          this.$msgInfo(err)
        })
      }
    },
    editClick(row) {
      this.dialogTitle = '签约修改'
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

<style lang="scss">
.credit-file-maintenance {
  position: relative;
}
.app-main .layer-query .el-col:last-child{
  text-align: right;
}
</style>
