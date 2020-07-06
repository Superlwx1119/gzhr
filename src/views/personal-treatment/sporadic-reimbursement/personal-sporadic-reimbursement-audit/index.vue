<template>
  <!--  个人零星报销受理审核-->
  <div class="PersonalSporadicReimbursementAudit">
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
          <apply-info :info="infoForm" :is-edit="false" />
          <!--        代办信息-->
          <agent-info :info="infoForm" :is-edit="false" />
        </el-form>
      </section>
      <section class="layer">
        <div class="box">
          <div class="box-header handle">
            <span class="box-title">就诊信息</span>
            <!--            <div class="box-tools">-->
            <!--              <el-button type="primary" @click="add">新增</el-button>-->
            <!--            </div>-->
          </div>
          <div class="box-body">
            <List :is-index="true" :height="190" :is-border="true" :columns="tableColumns" :data="tableData" :operates="tableOperates" />
            <Pagination />
            <div class="action-btn-group" style="margin: 20px 0">
              <el-button>重置</el-button>
              <el-button type="danger" @click="cancelAudit">取消审核</el-button>
              <el-button type="primary" @click="completeAudit">完成审核</el-button>
            </div>
          </div>
        </div>
      </section>
    </section>
    <form-dialog title="结算审核" width="1200px" new-calss="big" :is-show="visible" @update:isShow="updateIsShow">
      <el-form ref="dialogForm" :model="dialogForm" :rules="dialogRules" label-width="105px">
        <!--        业务信息-->
        <business-info :info="dialogForm" :is-edit="false" :is-disabled="true" />
        <!--        单据信息-->
        <documents-info :info="dialogForm" :is-disabled="true" />
        <!--        费用信息-->
        <cost-info />
        <!--        支付信息-->
        <pay-info />
        <!--        基金结算单-->
        <fund-settlement />
        <section class="layer">
          <div class="box">
            <div class="box-header">
              <span class="box-title">审核信息</span>
            </div>
            <div class="box-body">
              <el-row :gutter="10">
                <el-col :md="12" :lg="8" :xl="6">
                  <el-form-item label="审核状态" prop="审核状态">
                    <audit-status v-model="dialogForm.审核状态" />
                  </el-form-item>
                </el-col>
                <el-col :md="12" :lg="16" :xl="18">
                  <el-form-item label="审核意见" prop="审核意见">
                    <el-input v-model="dialogForm.审核意见" placeholder="请输入" />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </div>
        </section>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelEdit('dialogForm')">取消</el-button>
        <el-button type="primary" @click="submit('dialogForm')">保存</el-button>
      </span>
    </form-dialog>
  </div>
</template>

<script>
import PeopleInfo from '@/components/PeopleInfo/index'
import CardType from '@/components/Select/CardType'
import AuditStatus from '@/components/Select/AuditStatus'
import AgentInfo from '../components/agent-info'
import ApplyInfo from '../components/apply-info'
import BusinessInfo from '../components/dialog/business-info'
import DocumentsInfo from '../components/dialog/documents-info'
import CostInfo from '../components/dialog/cost-info'
import PayInfo from '../components/dialog/pay-info'
import FundSettlement from '../components/dialog/fund-settlement'
export default {
  name: 'PersonalSporadicReimbursementAudit',
  components: {
    PeopleInfo,
    CardType,
    AuditStatus,
    AgentInfo,
    ApplyInfo,
    BusinessInfo, //  弹窗-业务信息
    DocumentsInfo, //  弹窗-单据信息
    CostInfo, //  弹窗-费用信息
    PayInfo, //  弹窗-支付信息
    FundSettlement //  弹窗-基金结算单
  },
  mixins: [],
  props: {},
  data() {
    return {
      searchForm: {
        cardType: null,
        cardNo: null
      },
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
      tableData: [],
      tableColumns: [
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
      tableOperates: {
        width: '100px',
        fixed: 'right',
        list: [
          { show: true, label: '结算审核', type: 'text', method: () => {
            this.visible = true
          } }
        ]
      },
      //  弹窗
      visible: false,
      dialogForm: {},
      dialogRules: {
        审核状态: { required: true, message: '请选择审核状态', trigger: 'change' }
      }
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
      this.infoForm = { '收款账户': 'xxx001aaxx', '开户银行': '招商银行', '开户银行行号': '622201xxxx9917820', sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ001', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
      this.tableData = [
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ001', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' },
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ002', type: '特殊零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' },
        { sex: '女', birth: '1997-07-07', address: '香格里拉', no: 'MZ003', type: '普通零报', name: '刘璐', medicalType: '高血压', medicalName: '湘雅附一', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
      ]
    },
    add() {
    },
    completeAudit() {
      this.$msgConfirm('确定完成审核？').then(res => {
        this.$msgSuccess('审核成功')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    cancelAudit() {
      this.$msgConfirm('确定取消审核？').then(res => {
        this.$msgSuccess('取消成功')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    updateIsShow(v) {
      this.visible = v
    },
    //  取消弹窗
    cancelEdit(formName) {
      this.visible = false
    },
    //  提交弹窗
    submit(formName) {
      this.visible = false
      this.tableData = [
        { type: '普通零报', name: '刘璐', medicalType: '高血压', cardNo: '431227xxxxxxxxxxx14', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
      ]
    }
  }
}
</script>

<style scoped lang="scss"></style>
