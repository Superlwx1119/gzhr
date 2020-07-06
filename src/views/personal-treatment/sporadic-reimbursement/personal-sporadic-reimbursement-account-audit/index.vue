<template>
  <!--账户审核-->
  <div class="personalSporadicReimbursementAccountAudit">
    <el-row :gutter="10" class="tab-body">
      <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
        <el-form ref="queryForm" label-width="105px">
          <left-search-table :search-height="'150px'" :show-more-btn="true">
            <el-form-item label="经办时间" prop="经办时间1">
              <el-date-picker v-model="queryForm.经办时间1" style="width: 100%" type="daterange" start-placeholder="选择时间" end-placeholder="选择时间" />
            </el-form-item>
            <el-form-item label="关键字" prop="关键字1">
              <keyword v-model="queryForm.关键字1" />
            </el-form-item>
            <template slot="more">
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
                <span class="box-title">个人零星报销账户信息</span>
                <div class="box-tools">
                  <el-button type="primary" @click="auditAll">批量审核</el-button>
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
            <RightDetailInfo :title="'个人零星报销账户信息详情'" :options="columns.slice(2)" :list-data="currDetail">
              <template slot="tools">
                <el-button type="primary" @click="audit">审核</el-button>
              </template>
            </RightDetailInfo>
            <section class="layer">
              <div class="box">
                <div class="box-header">
                  <span class="box-title">人员信息</span>
                </div>
                <div class="box-body">
                  <PeopleInfo :info="infoForm" :options="peopleInfoOptions" :show-detail="false" :show-fund="false" :show-total="false" />
                </div>
              </div>
            </section>
            <!--        申请信息-->
            <apply-info :info="infoForm" :is-edit="false" />
            <!--        代办信息-->
            <agent-info :info="infoForm" :is-edit="false" />
            <section class="layer">
              <div class="box">
                <div class="box-header">
                  <span class="box-title">就诊信息</span>
                </div>
                <div class="box-body">
                  <my-table-view height="317px" :max-cloumns="7" :border="true" :columns="medicalColumns" :data="medicalData" />
                  <Pagination />
                </div>
              </div>
            </section>
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
import AuditStatus from '@/components/Select/AuditStatus'
import Keyword from '@/components/Select/personal-sporadic/Keyword'
import PeopleInfo from '@/components/PeopleInfo/index'
import AgentInfo from '../components/agent-info'
import ApplyInfo from '../components/apply-info'
export default {
  name: 'PersonalSporadicReimbursementAccountAudit',
  components: { LeftSearchTable, Keyword, AuditStatus, PeopleInfo, AgentInfo, ApplyInfo },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      auditVisible: false,
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '申办人', prop: 'a' },
        { label: '受理号', prop: 'b' },
        { label: '开户银行行号', prop: 'c' },
        { label: '开户银行名称', prop: 'd' },
        { label: '银行账号', prop: 'e' },
        { label: '开户名称', prop: 'f' },
        { label: '账户使用类别', prop: 'g' },
        { label: '状态', prop: 'h' },
        { label: '手机号', prop: 'i' },
        { label: '备注', prop: 'j' },
        { label: '经办人', prop: 'k' },
        { label: '经办时间', prop: 'l' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '哈理由', b: 'SL00' + item, c: '430981199102219982', d: '中国银行', e: '62220219127293757', f: '真有钱', g: '临时账户', h: '未审核', i: '13500010002', j: '阿沙发沙发上发', k: '韩信', l: '2020-02-02'
        }
      }),
      currDetail: {},
      peopleInfoOptions: [
        { label: '证件类型', key: 'cardType' },
        { label: '证件号码', key: 'cardNo' },
        { label: '姓名', key: 'name' },
        { label: '性别', key: 'sex' },
        { label: '生日', key: 'birth' },
        { label: '统筹区', key: 'address' }
      ],
      infoForm: { '收款账户': 'xxx001aaxx', '开户银行': '招商银行', '开户银行行号': '622201xxxx9917820', sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ001', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' },
      medicalData: [
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ001', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' },
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ002', type: '特殊零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' },
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ003', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
      ],
      medicalColumns: [
        { label: '住院(门诊)号', prop: 'no', align: 'center', width: '120px', overflow: true },
        { label: '零报方式', prop: 'type', align: 'center' },
        { label: '医疗类别', prop: 'name', align: 'center' },
        { label: '待遇类型', prop: 'type', align: 'center' },
        { label: '医疗机构名称', prop: 'medicalName', align: 'center', width: '120px', overflow: true },
        { label: '医疗机构编码', prop: 'medicalType', align: 'center', width: '120px', overflow: true },
        { label: '诊断疾病', prop: 'type', align: 'center' },
        { label: '基金先支付', prop: 'hospitalNo', align: 'center' },
        { label: '就诊日期', prop: 'date', align: 'center', width: '120px' },
        { label: '结算日期', prop: 'date', align: 'center', width: '120px' },
        { label: '备注', prop: 'date', align: 'center', width: '200px', overflow: true },
        { label: '总金额(元)', prop: 'total', align: 'center' },
        { label: '单据数(张)', prop: 'total', align: 'center' }
      ]
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
    auditAll() { this.auditVisible = true },
    audit() { this.auditVisible = true }
  }
}
</script>

<style scoped lang="scss"></style>
