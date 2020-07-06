<!-- 个人账户提现查询  -->
<template>
  <normal-layer
    :search-number="6"
    title-name="账户返还明细信息"
    title-need-handle
    class="credit-file-maintenance"
  >

    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary">查询</el-button>

        <template slot="cxtj">
          <el-select v-model="queryForm.cxtj" filterable placeholder="请在此输入身份证或姓名" @change="change">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </form-items>
    </template>

    <!-- <template slot="title-btns">
      <el-button type="primary" @click="batchAuditClick">批量审核</el-button>
    </template> -->
    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    >

      <!-- <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="progress(scope.row)">查看进度</el-button>
        <el-button type="text" class="modify" @click="details(scope.row)">查看详情</el-button>
        <el-button type="text" class="modify" @click="review(scope.row)">审核</el-button>
      </template> -->

    </my-table-view>
    <Pagination />

    <!-- 详情弹窗 -->
    <!-- <Details :show="DetaVisible" title="查看详请" @update:show="DetaIsShow" /> -->
    <!-- 进度弹窗 -->
    <!-- <Progress :show="ProVisible" title="年度结转进度日志" @update:show="ProgressShow" /> -->
    <!-- 审核弹窗 -->
    <!-- <audit-dialog v-model="showAuditDialog" dialog-title="单位注销审核" /> -->

  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
// import AuditDialog from '@/views/components/AuditDialog'
import PageHandle from '@/mixins/pageHandle'
// import Columns from './listCloumns'
import moment from 'moment'
// import Details from './components/details'
// import Progress from './components/progress'
export default {
  components: {
    NormalLayer,
    FormItems
    // AuditDialog,
    // Details,
    // Progress
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
        { label: '查询条件', prop: 'cxtj', type: 'custom', slotName: 'cxtj' },
        { label: '姓名', prop: 'xxx', type: 'select', disabled: true },
        { label: '证件号码', prop: 'xxx', type: 'select', disabled: true },
        { label: '执行起止日期', prop: 'dateRange', type: 'dateRange' },
        { label: '审核标志', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        cxtj: '',
        xxx: '',
        dateRange: [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().endOf('month').format('YYYY-MM-DD')
        ]
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      columns: [
        // { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'name', label: '证件号码' },
        { prop: 'name', label: '姓名' },
        { prop: 'name', label: '出生日期' },
        { prop: 'name', label: '参保所属机构' },
        { prop: 'name', label: '医疗人员类别' },
        { prop: 'name', label: '单位名称' },
        { prop: 'name', label: '所属行业' },
        { prop: 'name', label: '特殊单位类别' },
        { prop: 'name', label: '隶属关系' },
        { prop: 'name', label: '经济类型' },
        { prop: 'name', label: '单位类型' },
        { prop: 'name', label: '发放方式' },
        { prop: 'name', label: '拨付对象类型' },
        { prop: 'name', label: '返换类型' },
        { prop: 'name', label: '计息标志' },
        { prop: 'name', label: '支付标志' },
        { prop: 'name', label: '本次收支金额（元）' },
        { prop: 'name', label: '个账清退扣减金额（元）' },
        { prop: 'name', label: '人员变更类型' },
        { prop: 'name', label: '金融行业机构编码' },
        { prop: 'name', label: '银行行别代码' },
        { prop: 'name', label: '银行账号' },
        { prop: 'name', label: '户名' },
        { prop: 'name', label: '申请人' },
        { prop: 'name', label: '申请时间' },
        { prop: 'name', label: '审核标志' },
        { prop: 'name', label: '审核人' },
        { prop: 'name', label: '审核时间' },
        { prop: 'name', label: '审核意见' }
        // { type: 'operation', label: '操作', fixed: 'right', width: '200px' }
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
    reset() {
      this.queryForm = {}
    },
    change() {},
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
/deep/.el-form {
  .el-form-item__label{
    width: 170px;
  }
}

</style>
