<template>
  <!--省内异地拨付汇总-->
  <div class="offsite-appropriation-summary">
    <div class="header-tabs">
      <ul>
        <li :class="tabsActive === 1 ? 'active' : ''" @click="tabsActive = 1">结算支付汇总表</li>
        <li :class="tabsActive === 2 ? 'active' : ''" @click="tabsActive = 2">费用拨付汇总表</li>
      </ul>
    </div>
    <el-row v-show="tabsActive === 1" :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <el-form ref="searchForm" label-width="105px" :model="searchForm">
          <left-search-table :search-height="'162px'" :show-more-btn="true">
            <el-form-item label="清算状态" prop="清算状态">
              <el-select v-model="searchForm.清算状态" clearable style="width: 100%">
                <el-option label="选项1" :value="1" />
                <el-option label="选项2" :value="2" />
              </el-select>
            </el-form-item>
            <el-form-item label="审签日期" prop="审签日期">
              <el-date-picker
                v-model="searchForm.审签日期"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 100%"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </el-form-item>
            <template slot="more">
              <el-form-item label="审签批号" prop="审签批号">
                <el-input v-model="searchForm.审签批号" clearable placeholder="请输入" />
              </el-form-item>
            </template>
            <template slot="btn">
              <el-button @click="reset">重置</el-button>
              <el-button type="primary" @click="search">查询</el-button>
            </template>
            <div slot="list" class="box">
              <div class="box-header">
                <span class="box-title">结算支付汇总表</span>
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
            <RightDetailInfo :title="'结算支付汇总表'" :options="columns.slice(2)" :list-data="currDetail">
              <!-- <template slot="tools">
                <el-button type="primary" @click="audit">审签</el-button>
              </template> -->
            </RightDetailInfo>
            <section class="layer" style="height: calc(100% - 100px)">
              <div class="box">
                <div class="box-header">
                  <span class="box-title">结算支付明细表</span>
                </div>
                <div class="box-body">
                  <MyTableView :border="true" :columns="detailColumns" :data="detailData" />
                  <Pagination />
                </div>
              </div>
            </section>
          </div>
        </div>
      </el-col>
    </el-row>
    <div v-show="tabsActive === 2" class="charge-summary item3">
      <section class="layer layer-query">
        <div class="box">
          <div class="box-body">
            <el-form :ref="summaryForm" v-model="summaryForm" label-width="105px">
              <el-row :gutter="10">
                <el-col :md="12" :lg="8" :xl="6">
                  <el-form-item label="清算状态" prop="清算状态">
                    <el-select v-model="summaryForm.清算状态" clearable style="width: 100%">
                      <el-option label="选项1" :value="1" />
                      <el-option label="选项2" :value="2" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :md="12" :lg="8" :xl="6">
                  <el-form-item label="审签日期" prop="审签日期">
                    <el-date-picker
                      v-model="summaryForm.审签日期"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      style="width: 100%"
                      format="yyyy-MM-dd"
                      value-format="yyyy-MM-dd"
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="12" :lg="8" :xl="6">
                  <el-form-item label="审签批号" prop="审签批号">
                    <el-input v-model="summaryForm.审签批号" clearable placeholder="请输入" />
                  </el-form-item>
                </el-col>
                <el-col :md="12" :lg="8" :xl="6">
                  <el-button @click="resetSummary">重置</el-button>
                  <el-button type="primary" @click="searchSummary">查询</el-button>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
      </section>
      <section class="layer layer-result">
        <div class="box">
          <div class="box-header handle">
            <span class="box-title">费用拨付汇总表</span>
            <div class="box-tools">
              <el-button type="primary" style="float:right;" @click="cancelSummary">取消拨付汇总</el-button>
            </div>
          </div>
          <div class="box-body search-result">
            <MyTableView :border="true" :columns="detailColumns" :data="detailData">
              <template slot="operation" slot-scope="scope">
                <el-button type="text" class="modify" @click="checkTable(scope.row)">拨付报表</el-button>
              </template>
            </MyTableView>
            <Pagination />
          </div>
        </div>
      </section>
      <ReportForm
        :dialog-title="reportTitle"
        :is-dialog-visible="isReportDialogVisible"
        @update:isShow="isReportShow"
      />
    </div>
  </div>
</template>

<script>
import ReportForm from './components/ReportForm'
import { payColumns, chargeColumns } from './tableColumns'
export default {
  components: {
    ReportForm
  },
  props: {},
  data() {
    return {
      tabsActive: 1,
      isReportDialogVisible: false,
      reportTitle: '',
      multipleSelection: [],
      summaryForm: {
        审签日期: '',
        清算状态: '',
        审签批号: ''
      },
      searchForm: {
        审签日期: '',
        清算状态: '',
        审签批号: ''
      },
      activeName: 'first',
      columns: payColumns,
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          '经办部门': '部门' + item,
          '领导审签批号': '9821738213',
          '医院数量': '1',
          '拨付总人次(人/次)': '21',
          '医保拨付总金额(元)': '99'
        }
      }),
      currDetail: {},
      detailColumns: chargeColumns,
      detailData: [1, 2, 3].map(item => {
        return {
          '财务拨付汇总批号': '792178421' + item,
          '拨付总人次': '32',
          '医保拨付总金额': '9832',
          '经办人': 'alex',
          '经办时间': '2020-01-01'
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
    cancelSummary() {

    },
    resetSummary() {
      this.$refs.summaryForm.resetFields()
    },
    searchSummary() {
      console.log(this.searchForm)
    },
    checkTable() {
      this.isReportDialogVisible = true
      this.reportTitle = '拨付报表'
    },
    isReportShow(v) {
      this.isReportDialogVisible = v
    }
  }
}
</script>

<style scoped lang="scss">
.offsite-appropriation-summary {
  height: 100%;
  .header-tabs ul{
    display: flex;
    list-style: none;
    padding: 0;
    margin-top: 0;
    margin-bottom: 10px;
    height: 40px;
    line-height: 40px;
    background-color: #fafafa;
    li {
      cursor: pointer;
      padding: 0 10px;
      font-size: 14px;
      &.active {
        background-color: #fff;
        color: $--color-primary;
        border-right: 1px solid #ededed;
        border-left: 1px solid #ededed;
      }
    }
  }
  .tab-body, .charge-summary {
    height: calc(100% - 50px);
  }
}
</style>
