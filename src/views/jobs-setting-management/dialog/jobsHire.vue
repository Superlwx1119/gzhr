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
        <BaseInformation />
        <div slot="table-title" class="box-header handle">
          <span class="box-title">人员聘用信息</span>
        </div>
        <el-tabs type="border-card">
          <el-tab-pane label="管理岗位聘用表">
            <ManagementJobsHire />
          </el-tab-pane>
          <el-tab-pane label="专技工勤岗位聘用表">
            <ProfessionalJobsHire />
          </el-tab-pane>
          <el-tab-pane label="岗位聘用核准表">
            <JobsApproveTable />
          </el-tab-pane>
        </el-tabs>
        <Attachment />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import BaseInformation from '../component/baseInformation'
import ManagementJobsHire from '../component/managementJobsHire'
import ProfessionalJobsHire from '../component/professionalJobsHire'
import JobsApproveTable from '../component/jobsApproveTable'
import Attachment from '../component/attachment'
export default {
  components: {
    BaseInformation,
    ManagementJobsHire,
    ProfessionalJobsHire,
    JobsApproveTable,
    Attachment
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
    operation: {
      type: String,
      default: 'detail'
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
      this.$refs.addForm.$refs.addForm.resetFields()
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
