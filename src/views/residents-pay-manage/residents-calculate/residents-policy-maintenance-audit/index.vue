<template>
  <!-- 居民政策维护审核-->
  <div class="ResidentsPolicyMaintenanceAudit">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <el-form ref="queryForm" label-width="105px">
          <left-search-table :search-height="'162px'" :show-more-btn="true">
            <el-form-item label="医保区划" prop="医保区划1">
              <insurance-area v-model="queryForm.医保区划1" />
            </el-form-item>
            <el-form-item label="险种" prop="险种1">
              <insurance-type v-model="queryForm.险种1" />
            </el-form-item>
            <template slot="more">
              <el-form-item label="人员类别" prop="人员类别1">
                <personal-type v-model="queryForm.人员类别1" />
              </el-form-item>
              <el-form-item label="补助类型" prop="补助类型1">
                <assistance-type v-model="queryForm.补助类型1" />
              </el-form-item>
              <el-form-item label="审核状态" prop="审核状态1">
                <audit-status v-model="queryForm.审核状态1" />
              </el-form-item>
            </template>
            <template slot="btn">
              <el-button @reset="reset('queryForm')">重置</el-button>
              <el-button type="primary" @click="search">查询</el-button>
            </template>
            <div slot="list" class="box">
              <div class="box-header handle">
                <span class="box-title">居民政策信息列表</span>
                <div class="box-tools">
                  <el-button type="primary" @click="handleAuditAll">批量审核</el-button>
                </div>
              </div>
              <div class="box-body">
                <my-table-view :border="true" :max-cloumns="4" :first-highlight="true" :highlight-current-row="true" :columns="columns | filterColumns(4)" :data="tableData" @rowClick="rowClick" />
                <Pagination layout="total,prev, pager, next,jumper" />
              </div>
            </div>
          </left-search-table>
        </el-form>
      </el-col>
      <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
        <div class="box">
          <div class="box-body">
            <RightDetailInfo :title="'居民政策信息护列表详情'" :options="columns.slice(2)" :list-data="currDetail">
              <template slot="tools">
                <el-button type="primary" @click="handleAudit">审核</el-button>
              </template>
            </RightDetailInfo>
            <RightDetailInfo :title="'征缴款项政策信息'" :options="detailColumns.slice(2)" :list-data="detailData" />
          </div>
        </div>
      </el-col>
    </el-row>
    <Audit :show.sync="auditVisible" />
  </div>
</template>

<script>
import LeftSearchTable from '@/components/SearchList/LeftSearchTable'
import pageHandle from '@/mixins/pageHandle'
import InsuranceArea from '@/components/Select/residents-pay-manage/InsuranceArea'
import InsuranceType from '@/components/Select/InsuranceType'
import PersonalType from '@/components/Select/PersonalType'
import AssistanceType from '@/components/Select/residents-pay-manage/assistance-type'
import AuditStatus from '@/components/Select/AuditStatus'
export default {
  name: 'ResidentsPolicyMaintenanceAudit',
  components: { LeftSearchTable, AuditStatus, AssistanceType, PersonalType, InsuranceType, InsuranceArea },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      auditVisible: false,
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '申请事件ID', prop: 'a' },
        { label: '统筹区', prop: 'b' },
        { label: '险种', prop: 'c' },
        { label: '人员类别', prop: 'd' },
        { label: '政策描述', prop: 'e' },
        { label: '补助类型', prop: 'f' },
        { label: '生效年月', prop: 'g' },
        { label: '失效年月', prop: 'h' },
        { label: '人群类别', prop: 'i' },
        { label: '申报周期', prop: 'j' },
        { label: '个人缴纳', prop: 'k' },
        { label: '中央财政', prop: 'l' },
        { label: '省级财政', prop: 'm' },
        { label: '市财政', prop: 'n' },
        { label: '县财政', prop: 'o' },
        { label: '民政', prop: 'p' },
        { label: '残联', prop: 'q' },
        { label: '计生', prop: 'r' },
        { label: '个人缴纳划入', prop: 's' }
      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return { 'a': 'CAC414288123' + item, 'b': '统筹区' + item, c: 'xxx', d: 'xxx', e: 'xxx',
          f: 'xxx', g: 'xxx', h: 'xxx', i: 'xxx', j: 'xxx', k: 'xxx', l: 'xxx', m: 'xxx', n: 'xxx', o: 'xxx',
          p: 'xxx', q: 'xxx', r: 'xxx', s: 'xxx'
        }
      }),
      currDetail: {},
      detailColumns: [
        { label: '社保业务系统编号', prop: 'aa' },
        { label: '地市', prop: 'bb' },
        { label: '医保区划', prop: 'cc' },
        { label: '险种', prop: 'dd' },
        { label: '人员类别', prop: 'ee' },
        { label: '补助类型', prop: 'ff' },
        { label: '生效年月', prop: 'gg' },
        { label: '失效年月', prop: 'hh' },
        { label: '人群类别', prop: 'ii' },
        { label: '计算周期', prop: 'jj' },
        { label: '政策描述', prop: 'kk' },
        { label: '个人缴纳(元)', prop: 'll' },
        { label: '个人缴纳划入(元)', prop: 'mm' },
        { label: '中央财政(元)', prop: 'nn' },
        { label: '省财政(元)', prop: 'oo' },
        { label: '市财政(元)', prop: 'pp' },
        { label: '县财政(元)', prop: 'qq' },
        { label: '民政(元)', prop: 'rr' },
        { label: '残联(元)', prop: 'ss' },
        { label: '计生(元)', prop: 'tt' }
      ],
      detailData: {
        aa: 'xxx', bb: 'xxx', cc: 'xxx', dd: 'xxx', ee: 'xxx', ff: 'xxx', gg: 'xxx', hh: 'xxx',
        ii: 'xxx', jj: 'xxx', kk: 'xxx', ll: 'xxx', mm: 'xxx', nn: 'xxx', oo: 'xxx', pp: 'xxx',
        qq: 'xxx', rr: 'xxx', ss: 'xxx', tt: 'xxx'
      }
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
    handleAuditAll() { this.auditVisible = true },
    handleAudit() { this.auditVisible = true },
    rowClick(v) {
      console.log(v)
      this.currDetail = v.row
    }
  }
}
</script>

<style scoped lang="scss"></style>
