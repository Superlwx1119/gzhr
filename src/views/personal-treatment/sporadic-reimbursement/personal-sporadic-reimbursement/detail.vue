<template>
  <div class="personalSporadicReimbursementDetail">
    <form-dialog title="受理登记详情" width="1200px" new-calss="big" :is-show="show" @update:isShow="detailIsShow">
      <el-form ref="detailForm" :model="detailForm" label-width="105px">
        <!--        人员信息-->
        <section class="layer">
          <div class="box">
            <div class="box-header">
              <span class="box-title">人员信息</span>
            </div>
            <div class="box-body">
              <PeopleInfo :info="detailForm" :options="peopleInfoOptions" />
            </div>
          </div>
        </section>
        <!--        申请信息-->
        <apply-info :info="detailForm" :is-edit="false" />
        <!--        代办信息-->
        <agent-info :info="detailForm" :is-edit="false" />
        <!--        就诊信息-->
        <section class="layer">
          <div class="box">
            <div class="box-header handle">
              <span class="box-title">就诊信息</span>
            </div>
            <div class="box-body">
              <List :is-index="true" :height="190" :is-border="true" :columns="medicalColumns" :data="medicalData" :operates="medicalOperates" />
              <Pagination />
            </div>
          </div>
        </section>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelEdit('detailForm')">关闭</el-button>
      </span>
    </form-dialog>
  </div>
</template>

<script>
import PeopleInfo from '@/components/PeopleInfo/index'
import AgentInfo from '../components/agent-info'
import ApplyInfo from '../components/apply-info'
export default {
  name: 'Edit',
  components: {
    PeopleInfo,
    AgentInfo, //  代办信息
    ApplyInfo //  申请信息
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
      // detailForm: {},
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
    detailForm: function() {
      return this.form
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    detailIsShow(v) {
      this.$emit('update:show', v)
    },
    //  取消新增弹窗
    cancelEdit(formName) {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss"></style>
