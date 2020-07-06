<template>
  <!-- 二次补差报销登记-->
  <div class="sporadicSecondReimbursementRegister">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body">
          <el-form ref="searchForm" :model="queryForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="证件类型" prop="cardType">
                  <CardType v-model="queryForm.cardType" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="证件号码" prop="cardNo">
                  <el-input v-model="queryForm.cardNo" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="业务发生年份" prop="year">
                  <el-date-picker v-model="queryForm.year" type="year" style="width: 100%;" placeholder="选择年份" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="24" :xl="6" style="text-align: right">
                <el-button @click="reset('searchForm')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer">
      <el-form ref="infoForm" :model="infoForm" :rules="rules" label-width="105px">
        <section class="layer">
          <div class="box">
            <div class="box-header">
              <span class="box-title">人员信息</span>
            </div>
            <div class="box-body">
              <PeopleInfo :info="infoForm" :options="peopleInfoOptions" />
            </div>
          </div>
        </section>
        <!--        申请信息-->
        <apply-info :info="infoForm" :is-edit="true" />
        <!--        代办信息-->
        <agent-info :info="infoForm" :is-edit="true" />
      </el-form>
    </section>
    <section class="layer">
      <div class="box">
        <div class="box-header">
          <span class="box-title">就诊信息</span>
        </div>
        <div class="box-body">
          <my-table-view height="280px" :highlight-current-row="true" :border="true" :columns="tableColumns" :data="tableData" @rowClick="rowClick" />
          <Pagination />
        </div>
      </div>
    </section>
    <settlement-info :info="settlementInfo" />
    <section class="layer">
      <div class="box">
        <div class="box-body">
          <div class="action-btn-group">
            <el-button type="primary" @click="reset">重置</el-button>
            <el-button type="danger" @click="cancel">取消登记</el-button>
            <el-button type="primary" @click="settlement">试算</el-button>
            <el-button type="primary" @click="register">登记</el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import PeopleInfo from '@/components/PeopleInfo/index'
import CardType from '@/components/Select/CardType'
import AgentInfo from '../../sporadic-reimbursement/components/agent-info'
import ApplyInfo from '../../sporadic-reimbursement/components/apply-info'
import SettlementInfo from '../components/settlement-info'
export default {
  name: 'SporadicSecondReimbursementRegister',
  components: {
    PeopleInfo,
    CardType,
    AgentInfo,
    ApplyInfo,
    SettlementInfo
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      infoForm: {},
      rules: {},
      peopleInfoOptions: [
        { label: '证件类型', key: 'cardType' },
        { label: '证件号码', key: 'cardNo' },
        { label: '姓名', key: 'name' },
        { label: '性别', key: 'sex' },
        { label: '生日', key: 'birth' },
        { label: '统筹区', key: 'address' }
      ],
      tableData: [],
      tableColumns: [
        { type: 'index', label: '序号' },
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
      ],
      currRow: null,
      settlementInfo: {}
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    search(formName) {
      this.infoForm = { '收款账户': 'xxx001aaxx', '开户银行': '招商银行', '开户银行行号': '622201xxxx9917820', sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ001', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
      this.tableData = [
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ001', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' },
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ002', type: '特殊零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' },
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ003', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
      ]
    },
    rowClick(row) { this.currRow = row; console.log(row) },
    reset() {
      this.infoForm = {}
      this.tableData = []
      this.settlementInfo = {}
    },
    cancel() {
      this.$msgConfirm('是否取消登记？').then(res => {
        this.$msgSuccess('取消登记成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    settlement() {
      if (!this.currRow) {
        this.$msgError('请选择一条就诊信息！')
      } else {
        this.settlementInfo = {
          a: 80000,
          b: 32720,
          c: 0,
          d: 0,
          e: 32720,
          f: 10032,
          g: 22688,
          list: [
            { a: '现金', b: '16000', c: '大病补偿起付钱', d: '', e: '1' },
            { a: '居民大病基金', b: '10032', c: '大病补偿第一段', d: '', e: '0.6' }
          ]
        }
      }
    },
    register() {
      if (Object.keys(this.settlementInfo).length === 0) {
        this.$msgError('请先对选中业务进行试算！')
      } else {
        this.$msgSuccess('登记成功!')
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
