<template>
  <!-- 二次补差报销审核-->
  <div class="sporadicSecondReimbursementAudit">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body">
          <el-form ref="searchForm" :model="queryForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="登记号" prop="no">
                  <el-input v-model="queryForm.no" placeholder="请输入登记号" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="16" :xl="18">
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
        <apply-info :info="infoForm" :is-edit="false" />
        <!--        代办信息-->
        <agent-info :info="infoForm" :is-edit="false" />
      </el-form>
    </section>
    <section class="layer">
      <div class="box">
        <div class="box-header">
          <span class="box-title">就诊信息</span>
        </div>
        <div class="box-body">
          <my-table-view height="260px" :highlight-current-row="false" :border="true" :columns="tableColumns" :data="tableData" />
        </div>
      </div>
    </section>
    <settlement-info :info="settlementInfo" />
    <section class="layer">
      <div class="box">
        <div class="box-body">
          <div class="action-btn-group">
            <el-button type="danger" @click="cancelAudit">取消审核</el-button>
            <el-button type="primary" @click="auditVisible = true">审核</el-button>
          </div>
        </div>
      </div>
    </section>
    <Audit :show.sync="auditVisible" />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import PeopleInfo from '@/components/PeopleInfo/index'
import AgentInfo from '../../sporadic-reimbursement/components/agent-info'
import ApplyInfo from '../../sporadic-reimbursement/components/apply-info'
import SettlementInfo from '../components/settlement-info'
export default {
  name: 'SporadicSecondReimbursementAudit',
  components: {
    PeopleInfo,
    AgentInfo,
    ApplyInfo,
    SettlementInfo
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      auditVisible: false,
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
        { label: '住院(门诊)号', prop: 'no' },
        { label: '零报方式', prop: 'type' },
        { label: '医疗类别', prop: 'name' },
        { label: '待遇类型', prop: 'type' },
        { label: '医疗机构名称', prop: 'medicalName' },
        { label: '医疗机构编码', prop: 'medicalType' },
        { label: '诊断疾病', prop: 'type' },
        { label: '基金先支付', prop: 'hospitalNo' },
        { label: '就诊日期', prop: 'date' },
        { label: '结算日期', prop: 'date' },
        { label: '备注', prop: 'date' },
        { label: '总金额(元)', prop: 'total' },
        { label: '单据数(张)', prop: 'total' }
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
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ001', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
      ]
      this.settlementInfo = { a: 80000, b: 32720, c: 0, d: 0, e: 32720, f: 10032, g: 22688,
        list: [
          { a: '现金', b: '16000', c: '大病补偿起付钱', d: '', e: '1' },
          { a: '居民大病基金', b: '10032', c: '大病补偿第一段', d: '', e: '0.6' }
        ]
      }
    },
    cancelAudit() {
      this.$msgConfirm('是否取消审核？').then(res => {
        this.$msgSuccess('取消审核成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    audit() {
      this.auditVisible = true
    }
  }
}
</script>

<style scoped lang="scss"></style>
