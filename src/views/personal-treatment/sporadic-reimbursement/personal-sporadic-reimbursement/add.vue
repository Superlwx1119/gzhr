<template>
  <div class="personalSporadicReimbursementAdd">
    <form-dialog title="受理登记" width="1200px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
      <el-form ref="queryForm" :model="queryForm" label-width="105px">
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
          <el-col :md="24" :lg="8" :xl="12" style="text-align: right">
            <el-button @click="resetQuery('queryForm')">重置</el-button>
            <el-button type="primary" @click="queryBtn('queryForm')">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-form ref="addForm" :model="addForm" label-width="105px">
        <!--        人员信息-->
        <section class="layer">
          <div class="box">
            <div class="box-header">
              <span class="box-title">人员信息</span>
            </div>
            <div class="box-body">
              <PeopleInfo :info="addForm" :options="peopleInfoOptions" />
            </div>
          </div>
        </section>
        <!--        申请信息-->
        <apply-info :info="addForm" :is-edit="true" />
        <!--        代办信息-->
        <agent-info :info="addForm" :is-edit="true" />
        <!--        就诊信息-->
        <section class="layer">
          <div class="box">
            <div class="box-header handle">
              <span class="box-title">就诊信息</span>
              <div class="box-tools">
                <el-button type="primary" @click="medicalVisible = true">新增</el-button>
              </div>
            </div>
            <div class="box-body">
              <List :is-index="true" :height="190" :is-border="true" :is-selection="true" :columns="medicalColumns" :data="medicalData" :operates="medicalOperates" />
              <Pagination />
            </div>
          </div>
        </section>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd('addForm')">取消</el-button>
        <el-button type="primary" @click="addSubmit('addForm')">保存</el-button>
      </span>
    </form-dialog>
    <medical-dialog :show.sync="medicalVisible" @save="medicalSave" />
  </div>
</template>

<script>
import PeopleInfo from '@/components/PeopleInfo/index'
import CardType from '@/components/Select/CardType'
import AgentInfo from '../components/agent-info'
import ApplyInfo from '../components/apply-info'
import MedicalDialog from './add-medical-info'
export default {
  name: 'Add',
  components: {
    CardType,
    PeopleInfo,
    AgentInfo, //  代办信息
    ApplyInfo, //  申请信息
    MedicalDialog
  },
  mixins: [],
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      queryForm: {
        cardType: null,
        cardNo: null
      },
      peopleInfoOptions: [
        { label: '证件类型', key: 'cardType' },
        { label: '证件号码', key: 'cardNo' },
        { label: '姓名', key: 'name' },
        { label: '性别', key: 'sex' },
        { label: '生日', key: 'birth' },
        { label: '统筹区', key: 'address' }
      ],
      addForm: {},
      //  就诊信息
      medicalColumns: [
        { label: '零报原因', prop: 'type', align: 'center' },
        { label: '住院(门诊)号', prop: 'no', align: 'center', width: '120px', overflow: true },
        { label: '医疗机构名称', prop: 'medicalName', align: 'center', width: '120px', overflow: true },
        { label: '医疗机构编码', prop: 'medicalType', align: 'center', width: '120px', overflow: true },
        { label: '就诊日期', prop: 'date', align: 'center', width: '120px' },
        { label: '结算日期', prop: 'date', align: 'center', width: '120px' },
        { label: '单据数(张)', prop: 'total', align: 'center' }
      ],
      medicalOperates: {
        width: '100px',
        fixed: 'right',
        list: [
          { show: true, class: 'delete', label: '删除', type: 'text', method: (key, row, index) => {} },
          { show: true, label: '修改', type: 'text', method: (key, row, index) => {} }
        ]
      },
      medicalData: [],
      //  新增就诊信息弹窗
      medicalVisible: false
    }
  },
  computed: {
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    addIsShow(v) {
      this.$emit('update:show', v)
    },
    //  取消新增弹窗
    cancelAdd(formName) {
      this.$emit('update:show', false)
    },
    //  提交新增弹窗
    addSubmit(formName) {
      this.$emit('update:show', false)
    },
    resetQuery(formName) {
      this.$refs[formName].resetFields()
    },
    queryBtn(formName) {
      this.addForm = { '收款账户': '1', '开户银行行号': '123123', no: 'MZ001', type: '普通零报', name: '刘璐', sex: '女', birth: '1997-07-07', address: '香格里拉', medicalType: '高血压', medicalName: '湘雅附一', medicalNo: 'YY002', cardType: '身份证', hospitalName: 'xxxx医院', hospitalNo: 'ac002', date: '2020-02-02', total: '5' }
    },
    //  就诊信息添加保存
    medicalSave() {
      this.medicalData = [
        { type: 'xxx', no: 'MZ002', medicalName: '省人民医院', medicalNo: 'YY001', date: '2020-02-02', total: '3' }
      ]
    }
  }
}
</script>

<style scoped lang="scss"></style>
