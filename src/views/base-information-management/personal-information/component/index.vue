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
        <el-tabs type="border-card">
          <el-tab-pane label="基本信息">
            <BaseInformation :detail-info="detailInfo" />
          </el-tab-pane>
          <el-tab-pane label="政治面貌">
            <PoliticsStatus />
          </el-tab-pane>
          <el-tab-pane label="任职履历">
            <ForRecord />
          </el-tab-pane>
          <el-tab-pane label="教育经历">
            <Education />
          </el-tab-pane>
          <el-tab-pane label="年度考核">
            <AnnualAppraisal />
          </el-tab-pane>
          <el-tab-pane label="奖励处分">
            <RewardPunishment />
          </el-tab-pane>
          <el-tab-pane label="家庭成员">
            <Family />
          </el-tab-pane>
          <el-tab-pane label="培训进修">
            <Training />
          </el-tab-pane>
          <el-tab-pane label="聘用合同">
            <EmploymentContract />
          </el-tab-pane>
        </el-tabs>

      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import BaseInformation from './base-information'
import ForRecord from './for-record'
import PoliticsStatus from './politics-status'
import Education from './education'
import AnnualAppraisal from './annual-appraisal'
import EmploymentContract from './employment-contract'
import Family from './family'
import Training from './training'
import RewardPunishment from './reward-punishment'
export default {
  components: {
    PoliticsStatus,
    BaseInformation,
    ForRecord,
    Education,
    AnnualAppraisal,
    EmploymentContract,
    Family,
    Training,
    RewardPunishment
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
