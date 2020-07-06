<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box">
      <box-title title-name="二维码" />
      <el-col :span="24">
        <el-button type="primary" style="float: right" @click="closeDialog">打印</el-button>
        <el-button type="primary" style="float: right" @click="closeDialog">关闭</el-button>
      </el-col>
    </div>
  </form-dialog>
</template>
<script>
import BoxTitle from '@/views/components/PageLayers/box-title'

export default {
  components: {
    BoxTitle
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
    }
  },
  methods: {
    // resetForm() {
    //   this.$emit('closeAll', false)
    //   this.$refs.ruleFrom.elForm.resetFields()
    // },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveEvent() {
      this.$msgSuccess('保存成功')
      this.$emit('closeAll', false)
    },
    // },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style lang="scss">
</style>
