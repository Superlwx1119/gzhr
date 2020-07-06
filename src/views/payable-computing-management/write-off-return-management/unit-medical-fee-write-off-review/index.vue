<!-- 单位医疗保险费核销审核 -->
<template>
  <div class="third-index">
    <el-row :gutter="10" class="tab-body" style="height:100%;">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left" style="height:100%;">
        <el-form ref="queryForm" label-width="105px">
          <left-search-table :search-height="'150px'" :show-more-btn="true">
            <el-form-item label="选择单位" prop="选择单位1">
              <select-units v-model="queryForm.选择单位1" />
            </el-form-item>
            <el-form-item label="审核状态" prop="shzt">
              <el-select v-model="queryForm.shzt" style="width:100%">
                <el-option label="未审核" value="未审核" />
                <el-option label="复核通过" value="复核通过" />
                <el-option label="复核不通过" value="复核不通过" />
              </el-select>
            </el-form-item>
            <template slot="more">
              <el-form-item label="经办日期" prop="经办日期1">
                <el-date-picker v-model="queryForm.经办日期1" style="width: 100%" type="daterange" start-placeholder="选择时间" end-placeholder="选择时间" />
              </el-form-item>
            </template>
            <template slot="btn">
              <el-button @reset="reset('queryForm')">重置</el-button>
              <el-button type="primary" @click="search">查询</el-button>
            </template>
            <div slot="list" class="box">
              <div class="box-header handle">
                <span class="box-title">单位医疗保险费核销列表</span>
                <div class="box-tools">
                  <el-button v-if="queryForm.shzt === '未审核'" type="primary" @click="batchReview">批量审核</el-button>
                  <el-button v-if="queryForm.shzt === '复核通过'" type="primary" @click="cancelReview">取消审核</el-button>
                </div>
              </div>
              <div class="box-body">
                <my-table-view :border="true" :max-cloumns="5" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(5)" :data="tableData" @update:multipleSelection="multipleSelection" />
                <Pagination layout="total,prev, pager, next,jumper" />
              </div>
            </div>
          </left-search-table>
        </el-form>
      </el-col>
      <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
        <div class="box">
          <div class="box-body">
            <RightDetailInfo :title="'单位医疗保险费核销列表详情'" :options="columns.slice(2)" :list-data="tableData[0]">
              <slot slot="tools" name="right-tools">
                <el-button v-if="queryForm.shzt === '未审核'" type="primary" @click="review">审核</el-button>
              </slot>
            </RightDetailInfo>
            <section class="layer" style="height: calc(100% - 120px)">
              <div class="layer-tab">
                <el-tabs v-model="activeName" type="border-card">
                  <el-tab-pane label="单位汇总" name="first">
                    <div class="box">
                      <div class="box-body">
                        <my-table-view :border="true" :max-cloumns="7" :columns="unitSummaryColumns" :data="unitSummaryData" />
                        <Pagination />
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="个人明细" name="second">
                    <div class="box">
                      <div class="box-body">
                        <my-table-view :border="true" :max-cloumns="7" :columns="personalDetailsColumns" :data="personalDetailsData" />
                        <Pagination />
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </section>
          </div>
        </div>
      </el-col>
    </el-row>
    <AuditDialog :is-dialog-visible="reviewDialogVisible" :dialog-title="reviewDialogTitle" @closeAll="closeAuditDialog" />
  </div>
</template>
<script>
import LeftSearchTable from '@/components/SearchList/LeftSearchTable'
import AuditDialog from '@/views/components/AuditDialog' // 审核弹窗
import SelectUnits from '@/components/Select/payable-calculation-management/SelectUnits'
export default {
  components: {
    LeftSearchTable,
    AuditDialog,
    SelectUnits
  },
  data() {
    return {
      activeName: 'first',
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '批次号', prop: 'a' },
        { label: '单位管理码', prop: 'b' },
        { label: '单位名称', prop: 'c' },
        { label: '单位类型', prop: 'd' },
        { label: '核缴总金额', prop: 'g' },
        { label: '经办人', prop: 'h' },
        { label: '经办时间', prop: 'i' }
      ],
      tableData: [
        {
          a: '1001',
          b: '1030120',
          c: 'XXXX公路总段',
          d: '事业单位',
          g: '3000.00',
          h: '张三',
          i: '2010-10-10'
        }
      ],
      currDetail: {},
      unitSummaryColumns: [
        { type: 'index', label: '序号' },
        { label: '单位管理码', prop: 'aa' },
        { label: '单位名称', prop: 'bb' },
        { label: '费款所属期', prop: 'cc' },
        { label: '对应费款所属期', prop: 'dd' },
        { label: '险种', prop: 'ee' },
        { label: '应缴人数', prop: 'ff' },
        { label: '单位应缴基数', prop: 'gg' },
        { label: '单位应缴(元)', prop: 'hh' },
        { label: '单位划个账基数', prop: 'ii' },
        { label: '单位划个账(元)', prop: 'jj' },
        { label: '个人应缴基数', prop: 'kk' },
        { label: '个人应缴(元)', prop: 'll' },
        { label: '个人应缴划个账基数', prop: 'mm' },
        { label: '个人应缴划个账(元)', prop: 'nn' },
        { label: '单位应缴汇总(元)', prop: 'oo' },
        { label: '个人应缴汇总(元)', prop: 'pp' },
        { label: '应缴总金额(元)', prop: 'qq' }
      ],
      unitSummaryData: [1, 2, 3].map(item => {
        return {
          aa: '1030120' + item,
          bb: 'XXXX公路总段' + item,
          cc: '201908',
          dd: '201908',
          ee: '基本医疗',
          ff: '1',
          gg: '3000',
          hh: '3000',
          ii: '0',
          jj: '0',
          kk: '0',
          ll: '0',
          mm: '0',
          nn: '0',
          oo: '3000',
          pp: '0',
          qq: '3000'
        }
      }),
      detailForm: {},
      queryForm: {
        选择单位1: '',
        shzt: '未审核',
        经办日期1: ''
      },
      personalDetailsColumns: [
        { type: 'index', label: '序号' },
        { label: '单位管理码', prop: 'aa' },
        { label: '单位名称', prop: 'bb' },
        { label: '身份证号码', prop: 'cc' },
        { label: '姓名', prop: 'dd' },
        { label: '费款所属期', prop: 'ee' },
        { label: '对应费款所属期', prop: 'ff' },
        { label: '险种', prop: 'gg' },
        { label: '应缴人数', prop: 'hh' },
        { label: '单位应缴基数', prop: 'ii' },
        { label: '单位应缴(元)', prop: 'jj' },
        { label: '单位划个账基数', prop: 'kk' },
        { label: '单位划个账(元)', prop: 'll' },
        { label: '个人应缴基数', prop: 'mm' },
        { label: '个人应缴(元)', prop: 'nn' },
        { label: '个人应缴划个账基数', prop: 'oo' },
        { label: '个人应缴划个账(元)', prop: 'pp' },
        { label: '单位应缴汇总(元)', prop: 'qq' },
        { label: '个人应缴汇总(元)', prop: 'rr' },
        { label: '应缴总金额(元)', prop: 'ss' }
      ],
      personalDetailsData: [1, 2, 3].map(item => {
        return {
          aa: '1030120' + item,
          bb: 'XXXX公路总段' + item,
          cc: '632121YYYYMMDD0056',
          dd: '陈某某',
          ee: '201908',
          ff: '201908',
          gg: '基本医疗',
          hh: '1',
          ii: '3000',
          jj: '3000',
          kk: '0',
          ll: '0',
          mm: '0',
          nn: '0',
          oo: '0',
          pp: '0',
          qq: '3000',
          rr: '0',
          ss: '3000'
        }
      }),
      reviewDialogVisible: false,
      selectRows: [],
      reviewDialogTitle: ''
    }
  },
  watch: {
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    search(formName) {},
    batchReview() {
      if (this.selectRows.length > 0) {
        this.reviewDialogTitle = '单位零星应收批量审核'
        this.reviewDialogVisible = true
      } else {
        this.$msgError('请选择要操作的数据！')
      }
    },
    multipleSelection(val) {
      this.selectRows = val
    },
    review() {
      this.reviewDialogTitle = '单位零星应收审核'
      this.reviewDialogVisible = true
    },
    closeAuditDialog() {
      this.reviewDialogVisible = false
    },
    cancelReview() {
      if (this.selectRows.length > 0) {
        this.$msgSuccess('取消审核完成！')
      } else {
        this.$msgError('请选择要操作的数据！')
      }
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
