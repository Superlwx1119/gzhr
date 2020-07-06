<template>
  <form-dialog :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <div class="layer-tab" style="height: 500px">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="省内异地拨付表" name="first">
          <div class="box">
            <div class="box-header handle">
              <div class="box-tools">
                <el-button type="primary">打印</el-button>
                <el-button type="primary">上传拨付数据</el-button>
                <el-button type="primary">回退拨付数据</el-button>
              </div>
            </div>
            <div class="box-body">
              省内异地拨付表
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="职工费用拨付表" name="second">
          <div class="box">
            <div class="box-body">
              职工费用拨付表
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="城乡费用拨付表" name="third">
          <div class="box">
            <div class="box-body">
              城乡费用拨付表
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">关闭</el-button>
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

