<template>
  <div class="box">
    <normal-layer
      :search-number="itemsDatas.length"
      title-name="个人账户注资二次汇总"
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
      <el-button type="primary">确认</el-button>
      <el-button type="primary">导出</el-button>
      </template>-->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="核发数据医保区划汇总" name="first">
          <div class="box">
            <box-title title-name="本月个人账户核发结果" />
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns.columns2"
              :multiple-selection.sync="multipleSelection"
              height="100%"
            >
              <template slot="operation" slot-scope="scope">
                <el-button type="text" class="modify" @click="addClick(scope.row)">详情</el-button>
              </template>
            </my-table-view>
            <Pagination />
          </div>
        </el-tab-pane>
        <el-tab-pane label="核发数据银行汇总" name="second">
          <div class="box">
            <box-title title-name="本月个人账户核发银行汇总" />
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns.columns3"
              :multiple-selection.sync="multipleSelection"
              height="100%"
            >
              <template slot="operation" slot-scope="scope">
                <el-button type="text" class="modify" @click="addClick(scope.row)">详情</el-button>
                <el-button type="text" class="modify">注资汇总表</el-button>
                <el-button type="text" class="modify">结算支付汇总表</el-button>
              </template>
            </my-table-view>
            <Pagination />
          </div>
        </el-tab-pane>
        <el-tab-pane label="医保区划核发异常数据修改汇总" name="third">
          <div class="box">
            <box-title title-name="核发异常数据修改汇总" />
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns.columns4"
              :multiple-selection.sync="multipleSelection"
              height="100%"
            >
              <template slot="operation" slot-scope="scope">
                <el-button type="text" class="modify" @click="addClick(scope.row)">详情</el-button>
              </template>
            </my-table-view>
            <Pagination />
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="box">
        <box-title title-name="本月黑名单变动汇总" />
        <my-table-view
          v-loading="loading"
          :data="tableData"
          :columns="columns.columns1"
          :multiple-selection.sync="multipleSelection"
          height="100%"
        >
          <template slot="operation" slot-scope="scope">
            <el-button type="text" class="modify" @click="addClick(scope.row)">详情</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </div>

      <detai-dialog v-model="showDetailDialog" :dialog-title="dialogTitle" />
      <Audit v-model="showAuditDialog" :dialog-title="dialogTitle" />
    </normal-layer>
  </div>
</template>

<script>
import BoxTitle from '@/views/components/PageLayers/box-title'
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
    Audit,
    BoxTitle
  },
  mixins: [PageHandle],
  data() {
    return {
      activeName: 'first',
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
      this.dialogTitle = '详单'
      this.showAuditDialog = true
    },
    detailsClick(row) {
      this.dialogTitle = '个人收入明细'
      this.showDetailDialog = true
    },
    deleteEvent(row) {
      this.$msgSuccess('删除成功')
    },
    batchDeleteEvent() {
      this.$msgSuccess('批量删除成功')
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.credit-file-maintenance {
  position: relative;
}
.box {
  height: auto;
}
</style>
