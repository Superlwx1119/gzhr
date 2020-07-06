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
      <el-button type="danger" @click="addClick">取消审核</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="editClick(scope.row)">查看详情</el-button>
        <el-button type="text" class="modify" @click="editClick(scope.row)">差异对比</el-button>
      </template>
    </my-table-view>
    <Pagination />
    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
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
      showEditDialog: false // 新增，修改
    }
  },
  methods: {
    addClick(row) {
      this.$message.success('网上缴费对账登记完成')
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
