<template>
  <el-row :gutter="10" class="tab-body">
    <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
      <el-form ref="queryForm" label-width="105px">
        <left-search-table :search-height="'150px'" :show-more-btn="true">
          <el-form-item label="应缴类型" prop="应缴类型1">
            <payable-type v-model="queryForm.应缴类型1" />
          </el-form-item>
          <el-form-item label="选择单位" prop="选择单位1">
            <select-units v-model="queryForm.选择单位1" />
          </el-form-item>
          <template slot="more">
            <el-form-item label="费用所属区" prop="费用所属区1">
              <el-date-picker v-model="queryForm.费用所属区1" style="width: 100%" type="daterange" start-placeholder="选择时间" end-placeholder="选择时间" />
            </el-form-item>
            <el-form-item label="选择险种" prop="选择险种1">
              <choose-insurance v-model="queryForm.选择险种1" />
            </el-form-item>
            <el-form-item label="缴费状态" prop="缴费状态1">
              <payment-status v-model="queryForm.缴费状态1" />
            </el-form-item>
          </template>
          <template slot="btn">
            <el-button @reset="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search">查询</el-button>
          </template>
          <div slot="list" class="box">
            <div class="box-header handle">
              <span class="box-title">人员医疗保险费已核销列表</span>
              <slot name="left-tools" />
            </div>
            <div class="box-body" :style="{ height: tableHeight }">
              <my-table-view :border="true" :max-cloumns="5" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(5)" :data="tableData" @rowClick="rowClick" @update:multipleSelection="selectAll" />
              <Pagination layout="total,prev, pager, next,jumper" />
            </div>
          </div>
        </left-search-table>
      </el-form>
    </el-col>
    <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
      <div class="box">
        <div class="box-body">
          <RightDetailInfo :title="'人员医疗保险费已核销列表详情'" :options="columns.slice(2)" :list-data="currDetail">
            <slot slot="tools" name="right-tools" />
          </RightDetailInfo>
          <section class="layer" :style="{ height: detailHeight }">
            <div class="layer-tab">
              <el-tabs v-model="activeName" type="border-card">
                <el-tab-pane label="单位汇总" name="first">
                  <div class="box">
                    <div class="box-body">
                      <my-table-view :style="{ height: showDetailSave ? 'calc(100% - 82px)!important' : '100%' }" :border="true" :max-cloumns="7" :columns="firstColumns" :data="firstData" />
                      <Pagination />
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="个人明细" name="second">
                  <div class="box">
                    <div class="box-body">
                      <my-table-view :style="{ height: showDetailSave ? 'calc(100% - 82px)!important' : '100%' }" :border="true" :max-cloumns="7" :columns="secondColumns" :data="secondData" />
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
</template>

<script>
import LeftSearchTable from '@/components/SearchList/LeftSearchTable'
import pageHandle from '@/mixins/pageHandle'
import SelectUnits from '@/components/Select/payable-calculation-management/SelectUnits'
import PayableType from '@/components/Select/payable-calculation-management/PayableType'
import ChooseInsurance from '@/components/Select/payable-calculation-management/ChooseInsurance'
import PaymentStatus from '@/components/Select/payable-calculation-management/PaymentStatus'

export default {
  name: 'Allocated',
  components: { PaymentStatus, LeftSearchTable, SelectUnits, PayableType, ChooseInsurance },
  mixins: [pageHandle],
  props: {
    showDetailSave: { type: Boolean, default: false },
    showAuditQuery: { type: Boolean, default: false },
    showAllocatedQuery: { type: Boolean, default: false },
    tableHeight: { type: String, default: 'calc(100% - 40px)' },
    detailHeight: { type: String, default: 'calc(100% - 138px)' }
  },
  data() {
    return {
      activeName: 'first',
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'a' },
        { label: '证件号码', prop: 'b' },
        { label: '批次号', prop: 'c' },
        { label: '核销总金额', prop: 'e' },
        { label: '经办人', prop: 'f' },
        { label: '经办时间', prop: 'g' }
      ],
      tableData: [{
        a: '庞XX',
        b: '632121YYYYMMDD0056',
        c: '1',
        e: '3000.00',
        f: '张三',
        g: '2010-10-10'
      }
      ],
      currDetail: {},
      firstColumns: [
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
      firstData: [{
        aa: '1030120',
        bb: '青海XXXX有限公司',
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
      }],
      detailForm: {},
      secondColumns: [
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
      secondData: [{
        aa: '1030120',
        bb: '青海XXXX有限公司',
        cc: '632121YYYYMMDD0056',
        dd: '庞XX',
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
      }]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.currDetail = this.tableData[0]
      this.$emit('row-click', this.tableData[0])
    },
    //  全选
    selectAll(val) {
      console.log(val)
      this.$emit('select', val)
    },
    rowClick(v) {
      console.log(v)
      this.currDetail = v.row
      this.$emit('row-click', v.row)
    },
    detailSave() { this.$msgSuccess('保存成功!') }
  }
}
</script>

<style scoped lang="scss"></style>
