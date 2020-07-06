<template>
  <form-dialog :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <div class="layer-tab" style="height: 500px">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="汇总表" name="first">
          <div class="box">
            <div class="box-body">
              汇总表
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="医疗救助支付汇总" name="second">
          <div class="box">
            <div class="box-body">
              医疗救助支付汇总
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="医疗救助支付明细" name="third">
          <div class="box">
            <div class="box-body">
              医疗救助支付明细
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="机关医保支付汇总" name="fourth">
          <div class="box">
            <div class="box-body">
              机关医保支付汇总
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="机关医保支付明细" name="fifth">
          <div class="box">
            <div class="box-body">
              机关医保支付明细
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">关闭</el-button>
      <el-button type="primary" @click="close">打印</el-button>
      <el-button type="primary" @click="close">导出</el-button>
    </span>
  </form-dialog>
</template>

<script>
export default {

  props: {
    dialogTitle: {
      type: String,
      default: ''
    },
    isDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      explainForm: {
        业务交接号: '',
        是否扣减: '',
        是否上传: ''
      },
      activeName: 'first'
    }
  },
  watch: {},
  methods: {
    close() {
      this.$emit('update:isShow', false)
    },
    isShow(v) {
      this.$emit('update:isShow', v)
    },
    resetForm() {
      this.$emit('update:isShow', false)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>

