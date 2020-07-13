<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    width="1200px"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-body">
        <div v-if="operationType.includes('add')">
          <BaseInformationForm ref="addForm1" :add-form-data="addForm" />
          <EducationInformationForm ref="addForm2" :add-form-data="addForm" />
          <AllocateInformation ref="addForm3" :add-form-data="addForm" />
          <SpouseInformation ref="addForm4" :add-form-data="addForm" />
          <FamilyInformation ref="addForm5" :add-form-data="addForm" />
          <AgentInformation ref="addForm6" :add-form-data="addForm" />
          <DepartmentAdvise ref="addForm7" :add-form-data="addForm" />
          <Attachment ref="addForm8" :add-form-data="addForm" />
        </div>
        <div v-else>
          <BaseInformationTable />
          <EducationTable />
          <AllocateTable />
          <SpouseTable />
          <FamilyTable />
          <DepartmentTable />
          <Attachment />
        </div>
        <Audit v-if="operationType.includes('audit')" ref="addForm9" :add-form-data="addForm" />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button v-if="operationType.includes('add')" type="primary" @click="save('addForm')">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import BaseInformationForm from './base-information-form'
import EducationTable from './education-table'
import SpouseTable from './spouse-table'
import FamilyTable from './family-table'
import DepartmentTable from './department-table'
import AllocateTable from './allocate-table'
import BaseInformationTable from './base-information-table'
import AllocateInformation from './allocate-information'
import EducationInformationForm from './education-information'
import SpouseInformation from './spouse-information'
import FamilyInformation from './family-information'
import DepartmentAdvise from './department-advise'
import AgentInformation from './agent-information'
import Attachment from './attachment'
import Audit from './audit'
export default {
  components: {
    BaseInformationTable,
    DepartmentTable,
    AllocateTable,
    FamilyTable,
    SpouseTable,
    EducationTable,
    BaseInformationForm,
    EducationInformationForm,
    AllocateInformation,
    SpouseInformation,
    FamilyInformation,
    DepartmentAdvise,
    AgentInformation,
    Attachment,
    Audit
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    detailInfo: {
      type: Object,
      default: function() { return {} }
    },
    dialogTitle: {
      type: String,
      default: '信息查看'
    },
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    operationType: {
      type: Array,
      default: function() { return [] }
    }
  },
  data() {
    return {
      addForm: {},
      activeName: '1',
      queryForm: {},
      isShowAdd: false,
      loading: false

    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    reset() {
      this.$refs.addForm1.$refs.addForm.resetFields()
      this.$refs.addForm2.$refs.addForm.resetFields()
      this.$refs.addForm3.$refs.addForm.resetFields()
      this.$refs.addForm4.$refs.addForm.resetFields()
      this.$refs.addForm5.$refs.addForm.resetFields()
      this.$refs.addForm6.$refs.addForm.resetFields()
      this.$refs.addForm7.$refs.addForm.resetFields()
      // this.$refs.addForm8.$refs.addForm.resetFields()
      // this.$refs.addForm9.$refs.addForm.resetFields()
    },
    isShow(v) {
      this.$emit('closeAll', false)
    },
    save() {
      const p1 = new Promise((resolve, reject) => {
        this.$refs['addForm1'].$refs['addForm'].validate(valid => {
          if (valid) {
            this.addForm = Object.assign(this.addForm, this.$refs['addForm1'].$refs['addForm'].model)
            resolve()
          }
        })
      })
      const p2 = new Promise((resolve, reject) => {
        this.$refs['addForm2'].$refs['addForm'].validate(valid => {
          if (valid) {
            this.addForm = Object.assign(this.addForm, this.$refs['addForm2'].$refs['addForm'].model)
            resolve()
          }
        })
      })
      const p3 = new Promise((resolve, reject) => {
        this.$refs['addForm3'].$refs['addForm'].validate(valid => {
          if (valid) {
            this.addForm = Object.assign(this.addForm, this.$refs['addForm3'].$refs['addForm'].model)
            resolve()
          }
        })
      })
      const p4 = new Promise((resolve, reject) => {
        this.$refs['addForm4'].$refs['addForm'].validate(valid => {
          if (valid) {
            this.addForm = Object.assign(this.addForm, this.$refs['addForm4'].$refs['addForm'].model)
            resolve()
          }
        })
      })
      const p5 = new Promise((resolve, reject) => {
        this.$refs['addForm5'].$refs['addForm'].validate(valid => {
          if (valid) {
            this.addForm = Object.assign(this.addForm, this.$refs['addForm4'].$refs['addForm'].model)
            resolve()
          }
        })
      })
      const p6 = new Promise((resolve, reject) => {
        this.$refs['addForm6'].$refs['addForm'].validate(valid => {
          if (valid) {
            this.addForm = Object.assign(this.addForm, this.$refs['addForm4'].$refs['addForm'].model)
            resolve()
          }
        })
      })
      const p7 = new Promise((resolve, reject) => {
        this.$refs['addForm7'].$refs['addForm'].validate(valid => {
          if (valid) {
            this.addForm = Object.assign(this.addForm, this.$refs['addForm4'].$refs['addForm'].model)
            resolve()
          }
        })
      })
      const p8 = new Promise((resolve, reject) => {
        this.$refs['addForm8'].$refs['addForm'].validate(valid => {
          if (valid) {
            this.addForm = Object.assign(this.addForm, this.$refs['addForm4'].$refs['addForm'].model)
            resolve()
          }
        })
      })
      const p9 = new Promise((resolve, reject) => {
        this.$refs['addForm9'].$refs['addForm'].validate(valid => {
          if (valid) {
            this.addForm = Object.assign(this.addForm, this.$refs['addForm4'].$refs['addForm'].model)
            resolve()
          }
        })
      })
      Promise.all([p1, p2, p3, p4, p5, p6, p7, p8, p9]).then(() => {
        console.log(this.addForm)
        console.log('验证通过,提交表单')
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
