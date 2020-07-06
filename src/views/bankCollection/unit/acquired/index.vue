<!-- 门慢门特维护 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="单位托收出盘列表"
    title-need-handle
    class="credit-file-maintenance"
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm" @changeItem="changeItem">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

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
export default {
  components: {
    NormalLayer,
    FormItems,
    DetaiDialog
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
      showEditDialog: false, // 新增，修改
      newArray: []
    }
  },
  methods: {
    detailsClick(row) {
      this.dialogTitle = '出盘详情'
      this.showDetailDialog = true
    },
    deleteEvent(row) {
      this.$msgSuccess('删除成功')
    },
    batchDeleteEvent() {
      this.$msgSuccess('批量删除成功')
    },
    changeItem(data) {
      if (data) {
        // this.itemsDatas[2].hidden = data
        this.newArray = this.itemsDatas.splice(2, 1)
      } else {
        // this.newArray[0].hidden = false
        this.itemsDatas.splice(2, 0, ...this.newArray)
        console.log(this.itemsDatas)
      }
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
