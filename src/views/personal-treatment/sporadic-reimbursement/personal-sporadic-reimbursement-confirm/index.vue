<template>
  <!--  个人零星报销受理/确认-->
  <div class="PersonalSporadicReimbursementConfirm">
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
          <div class="box-header handle">
            <span class="box-title">就诊信息</span>
            <div class="box-tools">
              <el-button type="primary" @click="add">新增</el-button>
            </div>
          </div>
          <div class="box-body">
            <List :is-index="true" :height="190" :is-border="true" :is-selection="true" :columns="tableColumns" :data="tableData" :operates="tableOperates" />
            <Pagination />
          </div>
        </div>
      </section>
      <section class="layer">
        <div class="box">
          <div class="box-header">
            <span class="box-title">审核信息</span>
          </div>
          <div class="box-body">
            <el-form ref="auditForm" :model="auditForm" label-width="105px">
              <el-row :gutter="10">
                <el-col :md="12" :lg="8" :xl="6">
                  <el-form-item label="审核状态" prop="审核状态">
                    <audit-status v-model="auditForm.审核状态" />
                  </el-form-item>
                </el-col>
                <el-col :md="12" :lg="16" :xl="18">
                  <el-form-item label="审核意见" prop="审核意见">
                    <el-input v-model="auditForm.审核意见" placeholder="请输入" />
                  </el-form-item>
                </el-col>
                <el-col :md="24" :lg="24" :xl="24">
                  <div class="action-btn-group">
                    <el-checkbox v-model="checkbox" style="margin-right: 20px">保存时打印回执</el-checkbox>
                    <el-button>重置</el-button>
                    <el-button type="primary">保存</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
      </section>
    </section>
    <form-dialog title="就诊信息新增" width="1200px" new-calss="big" :is-show="visible" @update:isShow="updateIsShow">
      <el-form ref="dialogForm" :model="dialogForm" label-width="105px">
        <!--        业务信息-->
        <business-info :info="dialogForm" :is-edit="true" :is-disabled="false" />
        <!--        单据信息-->
        <documents-info :info="dialogForm" />
        <!--        费用信息-->
        <cost-info :show-tools="true" :is-edit="true" />
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
export default {
  name: 'PersonalSporadicReimbursementConfirm',
  components: {
    PeopleInfo,
    CardType,
    AuditStatus,
    AgentInfo,
    ApplyInfo,
    BusinessInfo, //  弹窗-业务信息
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
      rules: {
        收款账户: { required: true, message: '请选择收款账户', trigger: 'change' },
        开户银行: { required: true, message: '请选择开户银行', trigger: 'change' },
        开户银行行号: { required: true, message: '请输入开户银行行号', trigger: 'blur' },
        户名: { required: true, message: '请输入户名', trigger: 'blur' },
        银行账号: { required: true, message: '请输入银行账号', trigger: 'blur' },
        联系电话: { required: true, message: '请输入联系电话', trigger: 'blur' }
      },
      tableData: [],
      tableColumns: [
        { label: '零报方式', prop: 'type', align: 'center' },
        { label: '姓名', prop: 'name', align: 'center' },
        { label: '证件类型', prop: 'type', align: 'center' },
        { label: '证件号码', prop: 'cardNo', align: 'center', width: '200px' },
        { label: '医疗类别', prop: 'medicalType', align: 'center' },
        { label: '医疗机构名称', prop: 'hospitalName', align: 'center' },
        { label: '医疗机构编码', prop: 'hospitalNo', align: 'center' },
        { label: '诊断疾病', prop: 'type', align: 'center' },
        { label: '就诊日期', prop: 'date', align: 'center' },
        { label: '结算日期', prop: 'date', align: 'center' },
        { label: '总金额(元)', prop: 'total', align: 'center' },
        { label: '单据数(张)', prop: 'total', align: 'center' }
      ],
      tableOperates: {
        width: '100px',
        fixed: 'right',
        list: [
          { show: true, label: '修改', type: 'text', method: () => { } },
          { show: true, label: '删除', class: 'delete', type: 'text', method: () => {
            this.$msgConfirm('是否删除？').then(res => {
              this.$msgSuccess('删除成功')
            }).catch(err => {
              this.$msgInfo(err)
            })
          } }
        ]
      },
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
    },
    add() {
      this.visible = true
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
