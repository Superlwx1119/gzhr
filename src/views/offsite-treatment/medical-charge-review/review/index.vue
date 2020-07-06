<template>
  <!--异地医疗费复审-->
  <div class="offsite-charge-review">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <el-form ref="searchForm" label-width="105px" :model="searchForm">
          <left-search-table :search-height="'162px'" :show-more-btn="true">
            <el-form-item label="清分日期" prop="清分日期">
              <el-date-picker
                v-model="searchForm.清分日期"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 100%"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </el-form-item>
            <el-form-item label="审核状态" prop="审核状态">
              <el-select v-model="searchForm.审核状态" clearable style="width: 100%">
                <el-option label="选项1" :value="1" />
                <el-option label="选项2" :value="2" />
              </el-select>
            </el-form-item>
            <template slot="more">
              <el-form-item label="申报受理号" prop="申报受理号">
                <el-input v-model="searchForm.申报受理号" clearable placeholder="请输入" />
              </el-form-item>
            </template>
            <template slot="btn">
              <el-button @click="reset">重置</el-button>
              <el-button type="primary" @click="search">查询</el-button>
            </template>
            <div slot="list" class="box">
              <div class="box-header handle">
                <span class="box-title">异地费用复审汇总</span>
                <div class="box-tools">
                  <el-button type="primary" @click="reviewExplain">审核说明</el-button>
                  <el-button type="primary" @click="batchExamine">批量审核</el-button>
                </div>
              </div>
              <div class="box-body">
                <my-table-view :border="true" :max-cloumns="4" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(4)" :data="tableData" :multiple-selection.sync="multipleSelection" @rowClick="rowClick" />
                <Pagination layout="total,prev, pager, next,jumper" />
              </div>
            </div>
          </left-search-table>
        </el-form>
      </el-col>
      <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
        <div class="box">
          <div class="box-body">
            <RightDetailInfo :title="'异地费用复审汇总信息'" :options="columns.slice(2)" :list-data="currDetail">
              <template slot="tools">
                <el-button type="primary" @click="examine">审核</el-button>
              </template>
            </RightDetailInfo>
            <section class="layer" style="height: calc(100% - 138px)">
              <div class="box">
                <div class="box-header">
                  <span class="box-title">异地费用复审明细</span>
                </div>
                <div class="box-body">
                  <MyTableView :border="true" :columns="detailColumns" :data="detailData">
                    <template slot="operation" slot-scope="scope">
                      <el-button type="text" class="modify" @click="checkChargeDetail(scope.row)">费用明细</el-button>
                    </template>
                  </MyTableView>
                  <Pagination />
                </div>
              </div>
            </section>
          </div>
        </div>
      </el-col>
    </el-row>
    <DeductionDetail
      :drawer-title="drawerTitle"
      :is-drawer-visible="isDrawerVisible"
      size="60%"
      @update:isShow="isShow"
    />
    <audit-dialog v-model="showAuditDialog" handle-name="审核" :dialog-title="dialogTitle" />
    <Explain
      :dialog-title="explainTitle"
      :is-dialog-visible="isExplainDialogVisible"
      @update:isShow="isExplainShow"
    />
  </div>
</template>

<script>
import DeductionDetail from './components/DeductionDetail'
import Explain from './components/Explain'
import AuditDialog from '@/views/components/AuditDialog'
import { summaryColumns, detailColumns } from './tableColumns'
export default {
  components: {
    DeductionDetail,
    AuditDialog,
    Explain
  },
  props: {},
  data() {
    return {
      explainTitle: '',
      isExplainDialogVisible: false,
      showAuditDialog: false,
      dialogTitle: '',
      isDrawerVisible: false,
      drawerTitle: '',
      multipleSelection: [],
      searchForm: {
        清分日期: '',
        审核状态: '',
        申报受理号: ''
      },
      columns: summaryColumns,
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          '申报受理号': '213412',
          '审核状态': 'q',
          '结算申报类型': 'w',
          '结算申报号': '213213',
          '医疗机构编码': '21323',
          '申报机构': 'ew',
          '申报开始日期': '2020-01-01',
          '申报结束日期': '2020-11-11',
          '批次总人数': '2',
          '总费用金额(元)': '100',
          '总基金支付金额(元)': '200',
          '拨付中心': 'qw'
        }
      }),
      currDetail: {},
      detailColumns: detailColumns,
      detailData: [1, 2, 3].map(item => {
        return {
          '审核状态': 'wq',
          '结算方式': 'wq',
          '业务类型': 'wq',
          '身份证号码': '3213214214214',
          '姓名': 'ds',
          '性别': 's',
          '疾病诊断': 'we',
          '住院天数': '32',
          '入院时间': '2020-01-02',
          '出院时间': '2020-03-04',
          '医疗费用(元)': '12',
          '扣付金额': '212',
          '扣减原因': 'ew',
          '基金总支付': '212',
          '个人自付金额': '234',
          '基本统筹支付金额': '2144',
          '大病统筹支付金额': '549'
        }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.currDetail = this.tableData[0]
  },
  methods: {
    rowClick(v) {
      console.log(v)
      this.currDetail = v.row
    },
    search() {
      console.log(this.searchForm)
    },
    reset() {
      console.log(1)
      this.$refs.searchForm.resetFields()
    },
    checkRow(row) {
      this.isDrawerVisible = true
      this.drawerTitle = '扣款明细'
    },
    isShow(v) {
      this.isDrawerVisible = v
    },
    batchExamine() {
      if (this.multipleSelection.length > 0) {
        this.showAuditDialog = true
        this.dialogTitle = '异地费用复审'
      } else {
        this.$msgInfo('请选择操作数据')
      }
    },
    examine() {
      this.showAuditDialog = true
      this.dialogTitle = '异地费用复审'
    },
    reviewExplain() {
      this.isExplainDialogVisible = true
      this.explainTitle = '审核说明'
    },
    checkChargeDetail() {
      this.isDrawerVisible = true
      this.drawerTitle = '费用明细'
    },
    isExplainShow(v) {
      this.isExplainDialogVisible = v
    }
  }
}
</script>

<style scoped lang="scss">
.offsite-charge-review {
  height: 100%;
}
</style>
