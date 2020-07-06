<!-- 个人账户年度结转审核 -->
<template>
  <normal-layer
    :search-number="3"
    title-name="年度结转汇总结果"
    title-need-handle
    class="credit-file-maintenance"
  >

    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <!-- <el-button @click="reset">重置</el-button> -->
        <el-button type="primary">查询</el-button>
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
        <el-button type="text" class="modify" @click="progress(scope.row)">查看进度</el-button>
        <el-button type="text" class="modify" @click="details(scope.row)">查看详情</el-button>
        <el-button type="text" class="modify" @click="review(scope.row)">审核</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <!-- 详情弹窗 -->
    <Details :show="DetaVisible" title="查看详请" @update:show="DetaIsShow" />
    <!-- 进度弹窗 -->
    <Progress :show="ProVisible" title="年度结转进度日志" @update:show="ProgressShow" />
    <!-- 审核弹窗 -->
    <audit-dialog v-model="showAuditDialog" dialog-title="审核" />

  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import AuditDialog from '@/views/components/AuditDialog'
import PageHandle from '@/mixins/pageHandle'
// import Columns from './listCloumns'
import moment from 'moment'
import Details from './components/details'
import Progress from './components/progress'
export default {
  components: {
    NormalLayer,
    FormItems,
    AuditDialog,
    Details,
    Progress
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      DetaVisible: false,
      ProVisible: false,
      showAuditDialog: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '医保区划', prop: 'xxx', type: 'select' },
        { label: '执行起止日期', prop: 'dateRange', type: 'dateRange' }
        // { label: '计息标志', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        xxx: '',
        dateRange: [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().endOf('month').format('YYYY-MM-DD')
        ]
      },
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'name', label: '医保区划', align: 'center' },
        { prop: 'name', label: '年度', align: 'center' },
        { prop: 'name', label: '执行计划时间', align: 'center' },
        { prop: 'name', label: '人数', align: 'center' },
        { prop: 'name', label: '人次', align: 'center' },
        { prop: 'name', label: '总金额（元）', align: 'center' },
        { prop: 'name', label: '计息标志', align: 'center' },
        { type: 'operation', label: '操作', fixed: 'right', width: '200px' }
      ],
      tableData: [
        { name: '大碗宽面', code: 'xxx', nameCode: 'xxx' },
        { name: '大碗宽面', code: 'xxx', nameCode: 'xxx' }
      ]
    }
  },
  methods: {
    // 批量审核
    batchAuditClick() {
      if (this.multipleSelection.length <= 0) {
        this.$msgConfirm('请选择')
      } else {
        this.showAuditDialog = true
      }
    },
    progress(row) {
      this.ProVisible = true
    },
    ProgressShow(v) {
      this.ProVisible = v
    },
    details(row) {
      this.DetaVisible = true
    },
    DetaIsShow(v) {
      this.DetaVisible = v
    },
    review(row) {
      this.showAuditDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.credit-file-maintenance{
  position: relative;
}
</style>
