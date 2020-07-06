<template>
  <el-row :gutter="10" class="tab-body">
    <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
      <el-form ref="queryForm" label-width="105px">
        <left-search-table :search-height="'150px'" :show-more-btn="true">
          <el-form-item label="单位名称" prop="单位名称1">
            <el-input v-model="queryForm.单位名称1" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="单位编码" prop="单位编码1">
            <el-input v-model="queryForm.单位编码1" placeholder="请输入" />
          </el-form-item>
          <template slot="more">
            <el-form-item v-if="searchArr.includes('险种') " label="险种" prop="险种">
              <InsuranceType v-model="queryForm.险种" />
            </el-form-item>
            <el-form-item v-if="searchArr.includes('计算状态') " label="计算状态" prop="计算状态">
              <el-select v-model="queryForm.计算状态" style="width: 100%;" placeholder="请选择">
                <el-option label="未试算" value="1" />
                <el-option label="已试算" value="2" />
              </el-select>
            </el-form-item>
            <el-form-item v-if="searchArr.includes('审核状态') " label="审核状态" prop="审核状态">
              <audit-status v-model="queryForm.审核状态" />
            </el-form-item>
            <el-form-item v-if="searchArr.includes('起止时间') " label="起止时间" prop="起止时间">
              <el-date-picker
                v-model="queryForm.起止时间"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                placeholder="开始日期"
              />
            </el-form-item>
            <el-form-item v-if="searchArr.includes('计算时间') " label="计算时间" prop="计算时间">
              <el-date-picker
                v-model="queryForm.计算时间"
                type="date"
                style="width:100%"
                placeholder="请选择时间"
              />
            </el-form-item>
            <el-form-item v-if="searchArr.includes('复核状态') " label="复核状态" prop="复核状态1">
              <el-select v-model="queryForm.复核状态1" style="width: 100%;" placeholder="请选择">
                <el-option label="未复核" value="1" />
                <el-option label="复核通过" value="2" />
                <el-option label="复核不通过" value="3" />
              </el-select>
            </el-form-item>
            <el-form-item v-if="searchArr.includes('姓名')" label="姓名" prop="姓名">
              <el-input v-model="queryForm.姓名" placeholder="请输入" />
            </el-form-item>
            <el-form-item v-if="searchArr.includes('证件号码') " label="证件号码" prop="证件号码">
              <el-input v-model="queryForm.证件号码" placeholder="请输入" />
            </el-form-item>

          </template>
          <template slot="btn">
            <el-button @reset="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search">查询</el-button>
          </template>
          <div slot="list" class="box">
            <div class="box-header handle">
              <span class="box-title">{{ tableTitle }}</span>
              <slot name="left-tools" />
            </div>
            <div class="box-body" :style="{ height: tableHeight }">
              <my-table-view :border="true" :max-cloumns="5" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(5)" :multiple-selection.sync="multipleSelection" :data="tableData" @rowClick="rowClick" @update:multipleSelection="selectAll" />
              <Pagination layout="total,prev, pager, next,jumper" />
            </div>
          </div>
        </left-search-table>
      </el-form>
    </el-col>
    <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
      <div class="box">
        <div class="box-body">
          <RightDetailInfo :title="detailTitle" :options="columns.slice(2)" :list-data="currDetail">
            <slot slot="tools" name="right-tools" />
          </RightDetailInfo>
          <section class="layer" :style="{ height: detailHeight }">
            <div class="layer-tab">
              <el-tabs v-model="activeName" type="border-card">
                <el-tab-pane label="单位总汇" name="first">
                  <div class="box">
                    <div class="box-body">
                      <my-table-view :border="true" :max-cloumns="7" :columns="confluenceColumns" :data="confluenceData" />
                      <Pagination />
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="个人明细" name="second">
                  <div class="box">
                    <div class="box-body">
                      <my-table-view :border="true" :max-cloumns="7" :columns="personalColumns" :data="personalData" />
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
import AuditStatus from '@/components/Select/AuditStatus'
import InsuranceType from '@/components/Select/InsuranceType'

export default {
  name: 'Allocated',
  components: { AuditStatus, LeftSearchTable, InsuranceType },
  mixins: [pageHandle],
  props: {
    searchArr: { type: Array, default: function() { return [] } },
    differenceRereat: { type: Boolean, default: false },
    showPerson: { type: Boolean, default: false },
    receiptAudit: { type: Boolean, default: false },
    repaymentAudit: { type: Boolean, default: false },
    approve: { type: Boolean, default: false },
    tableTitle: { type: String, default: '查询结果' },
    detailTitle: { type: String, default: '查询详情' },
    tableHeight: { type: String, default: 'calc(100% - 40px)' },
    detailHeight: { type: String, default: 'calc(100% - 120px)' },
    columns: { type: Array, default: function() { return [] } },
    tableData: { type: Array, default: function() { return [] } },
    detailColumns: { type: Array, default: function() { return [] } },
    detailData: { type: Array, default: function() { return [] } },
    // confluenceColumns: { type: Array, default: function() { return [] } },
    confluenceData: { type: Array, default: function() { return [] } },
    // personalColumns: { type: Array, default: function() { return [] } },
    personalData: { type: Array, default: function() { return [] } }
  },
  data() {
    return {
      activeName: 'first',
      currDetail: {},
      detailForm: {},
      multipleSelection: [],
      confluenceColumns: [
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
      personalColumns: [
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
      ]
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
    deleteDetail() {
      console.log(this.currDetail)
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
