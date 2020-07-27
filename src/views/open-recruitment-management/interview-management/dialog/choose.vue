<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    width="674px"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-body">
        <el-form ref="addForm" :model="addForm" label-width="105px" style="margin-bottom:10px">
          <el-row :gutter="12">
            <el-col :span="12">
              <el-form-item label="申报单位" prop="aac003">
                <el-input v-model="addForm.aac003" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="年度" prop="aac002">
                <el-input v-model="addForm.aac002" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="招聘计划" prop="aac002">
                <el-input v-model="addForm.aac002" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="choosePlan">确定</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
// import JobsLevel from '@/components/Select/JobsLevel'
export default {
  components: {
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
      default: '招聘类型'
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
      isShowAdd: false,
      loading: false,
      detailId: ''
    }
  },
  methods: {
    choosePlan() {
      this.$emit('showAdd')
      this.closeDialog()
    },
    cloeseParent() {
      this.$emit('cloeseParent', false)
    },
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    reset() {
      this.detailId = ''
      this.$refs.addForm.resetFields()
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
