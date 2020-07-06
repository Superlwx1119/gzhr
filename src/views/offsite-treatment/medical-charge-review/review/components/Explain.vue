<template>
  <form-dialog :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <el-form ref="explainForm" :model="explainForm" label-width="105px">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-form-item label="业务交接号" prop="业务交接号">
            <el-input v-model="explainForm.业务交接号" clearable placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="是否扣减" prop="是否扣减">
            <el-select v-model="explainForm.是否扣减" clearable style="width: 100%">
              <el-option label="选项1" :value="1" />
              <el-option label="选项2" :value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="是否上传" prop="是否上传">
            <el-select v-model="explainForm.是否上传" clearable style="width: 100%">
              <el-option label="选项1" :value="1" />
              <el-option label="选项2" :value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="医疗机构" prop="医疗机构">
            <el-select v-model="explainForm.是否上传" filterable clearable style="width: 100%">
              <el-option label="选项1" :value="1" />
              <el-option label="选项2" :value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="16" align="right">
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="search">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <div class="box" style="height: auto">
      <div class="box-header">
        <span class="box-title">医疗机构审核说明</span>
      </div>
      <div class="box-body" style="height: 300px">
        自定义报表
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="uploadExplain">上传</el-button>
      <el-button type="primary" @click="cancelUpload">取消上传</el-button>
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
      }
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
      this.$refs.explainForm.resetFields()
      this.$emit('update:isShow', false)
    },
    uploadExplain() {

    },
    cancelUpload() {

    },
    reset() {
      this.$refs.explainForm.resetFields()
    },
    search() {

    }
  }

}
</script>

<style lang="scss" scoped>

</style>

