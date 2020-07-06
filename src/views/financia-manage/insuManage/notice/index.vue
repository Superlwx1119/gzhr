<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="打印通知书及缴款列表"
    title-need-handle
    class="credit-file-maintenance"
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <div slot="selectAll">
          <el-select v-model="selectAll" multiple placeholder="请选择" @change="choiesType">
            <el-option value="1" label="POS缴款" />
            <el-option value="2" label="银行缴款" />
            <el-option value="3" label="二维码缴款" />
          </el-select>
        </div>
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button v-if="showBank" type="primary" @click="addClick">银行填写</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">查看明细</el-button>
        <el-button type="text" class="modify">追收通知书</el-button>
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
      showBank: false,
      selectAll: [],
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
      showAuditDialog: false // 审核弹窗
    }
  },
  methods: {
    addClick(row) {
      // if (this.multipleSelection.length === 0) {
      //   this.$msgConfirm('请选择一条数据')
      // } else {
      //   this.$msgConfirm('发送').then(res => {
      //     this.showAuditDialog = true
      //   }).catch(err => {
      //     this.$msgInfo(err)
      //   })
      // }
    },
    detailsClick(row) {
      this.dialogTitle = '基金追缴台账明细'
      this.showDetailDialog = true
    },
    deleteEvent(row) {
      this.$msgSuccess('删除成功')
    },
    batchDeleteEvent() {
      this.$msgSuccess('批量删除成功')
    },
    choiesType(event) {
      if (this.selectAll.indexOf('2') === -1) {
        this.showBank = false
      } else {
        this.showBank = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.credit-file-maintenance {
  position: relative;
}
</style>
