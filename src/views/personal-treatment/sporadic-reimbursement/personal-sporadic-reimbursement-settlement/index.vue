<template>
  <!--个人零星报销受理结算-->
  <div class="PersonalSporadicReimbursementSettlement">
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
            <my-table-view height="380px" :border="true" :columns="tableColumns" :data="tableData">
              <template slot="operation" slot-scope="scope">
                <el-button type="text" @click="settlement(scope.row)">费用结算</el-button>
              </template>
            </my-table-view>
            <!--            <List :is-index="true" :height="190" :is-border="true" :operates="tableOperates" />-->
            <Pagination />
            <div class="action-btn-group" style="margin: 20px 0">
              <el-button>重置</el-button>
              <el-button type="danger">打回</el-button>
              <el-button type="danger" @click="cancelSettlement">取消结算</el-button>
              <el-button type="primary" @click="completeSettlement">完成结算</el-button>
            </div>
          </div>
        </div>
      </section>
    </section>
    <form-dialog title="费用结算" width="1200px" new-calss="big" :is-show="visible" @update:isShow="updateIsShow">
      <el-form ref="dialogForm" :model="dialogForm" label-width="105px">
        <!--        业务信息-->
        <business-info v-if="dialogForm.type === '普通零报'" :info="dialogForm" :is-edit="false" :is-disabled="true" />
        <!--        特殊业务信息-->
        <special-business-info v-if="dialogForm.type === '特殊零报'" :info="dialogForm" :is-edit="false" :is-disabled="true" />
        <!--        单据信息-->
        <documents-info :info="dialogForm" :is-disabled="true" />
        <!--        费用信息-->
        <cost-info :show-tools="true" :is-edit="true" />
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelEdit('dialogForm')">取消</el-button>
        <el-button type="primary" @click="cancelEdit('dialogForm')">试算</el-button>
        <el-button type="primary" @click="submit('dialogForm')">结算</el-button>
      </span>
    </form-dialog>
  </div>
</template>

<script>
import PeopleInfo from '@/components/PeopleInfo/index'
import CardType from '@/components/Select/CardType'
import AgentInfo from '../components/agent-info'
import ApplyInfo from '../components/apply-info'
import BusinessInfo from '../components/dialog/business-info'
import SpecialBusinessInfo from '../components/dialog/special-business-info'
import DocumentsInfo from '../components/dialog/documents-info'
import CostInfo from '../components/dialog/cost-info'
export default {
  name: 'PersonalSporadicReimbursementSettlement',
  components: {
    PeopleInfo, //  个人基本信息
    CardType, //  证件类型
    AgentInfo, //  代办信息
    ApplyInfo, //  申请信息
    BusinessInfo, //  弹窗-业务信息
    SpecialBusinessInfo, //  弹窗-特殊业务信息
    DocumentsInfo, //  弹窗-单据信息
    CostInfo //  弹窗-费用信息
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
      // peopleInfo: [],
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
        { label: '单据数(张)', prop: 'total', align: 'center' },
        { label: '操作', type: 'operation' }
      ],
      //  弹窗
      visible: false,
      dialogForm: {}
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
    settlement(row) {
      this.visible = true
      this.dialogForm = row
    },
    completeSettlement() {
      this.$msgConfirm('确定完成结算？').then(res => {
        this.$msgSuccess('结算成功')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    cancelSettlement() {
      this.$msgConfirm('确定取消结算？').then(res => {
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
    }
  }
}
</script>
<style scoped lang="scss"></style>
