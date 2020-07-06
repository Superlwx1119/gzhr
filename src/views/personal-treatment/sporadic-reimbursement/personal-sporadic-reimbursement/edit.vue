<template>
  <div class="personalSporadicReimbursementEdit">
    <form-dialog title="受理登记修改" width="1200px" new-calss="big" :is-show="show" @update:isShow="editIsShow">
      <el-form ref="editForm" :model="editForm" label-width="105px">
        <!--        人员信息-->
        <section class="layer">
          <div class="box">
            <div class="box-header">
              <span class="box-title">人员信息</span>
            </div>
            <div class="box-body">
              <PeopleInfo :info="editForm" :options="peopleInfoOptions" />
            </div>
          </div>
        </section>
        <!--        申请信息-->
        <apply-info :info="editForm" :is-edit="true" />
        <!--        代办信息-->
        <agent-info :info="editForm" :is-edit="true" />
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
        <el-button @click="cancelEdit('editForm')">取消</el-button>
        <el-button type="primary" @click="editSubmit('editForm')">保存</el-button>
      </span>
    </form-dialog>
    <medical-dialog :show.sync="medicalVisible" @save="medicalSave" />
  </div>
</template>

<script>
import PeopleInfo from '@/components/PeopleInfo/index'
import AgentInfo from '../components/agent-info'
import ApplyInfo from '../components/apply-info'
import MedicalDialog from './add-medical-info'
export default {
  name: 'Edit',
  components: {
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
    },
    form: {
      type: Object,
      default: () => { return {} }
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
      // editForm: {},
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
    editForm: function() {
      return this.form
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    editIsShow(v) {
      this.$emit('update:show', v)
    },
    //  取消新增弹窗
    cancelEdit(formName) {
      this.$emit('update:show', false)
    },
    //  提交新增弹窗
    editSubmit(formName) {
      this.$emit('update:show', false)
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
