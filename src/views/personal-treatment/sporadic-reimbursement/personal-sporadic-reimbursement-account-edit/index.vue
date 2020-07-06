<template>
  <div class="personalSporadicReimbursementAccountEdit">
    <section class="layer layer-query">
      <div class="box">
        <ConditionHeader />
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="10">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="证件类型" prop="cardType">
                  <CardType v-model="searchForm.cardType" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="证件号码" prop="cardNo">
                  <el-input v-model="searchForm.cardNo" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="24" :lg="8" :xl="12" style="text-align: right">
                <el-button @click="reset('searchForm')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <section class="layer layer-result">
      <section class="layer">
        <el-form ref="infoForm" :model="infoForm" label-width="105px">
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
          <apply-info :info="infoForm" :edit-account="true" :show-staging="false" :is-disabled="applyDisabled" :is-edit="true" />
          <!--        代办信息-->
          <agent-info :info="infoForm" :is-edit="false" />
        </el-form>
      </section>
      <section class="layer">
        <div class="box">
          <div class="box-header handle">
            <span class="box-title">就诊信息</span>
          </div>
          <div class="box-body">
            <my-table-view height="300px" :border="true" :columns="tableColumns" :data="tableData" />
            <Pagination />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import PeopleInfo from '@/components/PeopleInfo/index'
import CardType from '@/components/Select/CardType'
import AgentInfo from '../components/agent-info'
import ApplyInfo from '../components/apply-info'
export default {
  name: 'PersonalSporadicReimbursementAccountEdit',
  components: {
    PeopleInfo, //  个人基本信息
    CardType, //  证件类型
    AgentInfo, //  代办信息
    ApplyInfo //  申请信息
  },
  mixins: [],
  props: {},
  data() {
    return {
      searchForm: {},
      infoForm: {},
      auditForm: {},
      checkbox: false,
      peopleInfoOptions: [
        { label: '证件类型', key: 'cardType' },
        { label: '证件号码', key: 'cardNo' },
        { label: '姓名', key: 'name' },
        { label: '性别', key: 'sex' },
        { label: '生日', key: 'birth' },
        { label: '统筹区', key: 'address' }
      ],
      // peopleInfo: [],
      tableData: [],
      tableColumns: [
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
      applyDisabled: true
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    search(formName) {
      this.applyDisabled = false
      this.infoForm = { '收款账户': '1', '开户银行': '招商银行', '开户银行行号': '622201xxxx9917820', sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ001', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
      this.tableData = [
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ001', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' },
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ002', type: '特殊零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' },
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ003', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
      ]
    }
  }
}
</script>

<style scoped lang="scss"></style>
