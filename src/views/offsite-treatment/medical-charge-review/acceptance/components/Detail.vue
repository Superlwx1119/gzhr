<template>
  <form-dialog :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <div class="layer-tab">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="申报汇总表" name="first">
          <div class="box">
            申报汇总表
          </div>
        </el-tab-pane>
        <el-tab-pane label="城职汇总表" name="second">
          <div class="box">
            城职汇总表
          </div>
        </el-tab-pane>
        <el-tab-pane label="城职明细表" name="third">
          <div class="box">
            城职明细表
          </div>
        </el-tab-pane>
        <el-tab-pane label="城居汇总表" name="forth">
          <div class="box">
            城居汇总表
          </div>
        </el-tab-pane>
        <el-tab-pane label="城居明细表" name="fifth">
          <div class="box">
            城居明细表
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

