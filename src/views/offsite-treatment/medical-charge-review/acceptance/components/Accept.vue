<template>
  <form-dialog :title="dialogTitle" width="508px" new-class="small" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <el-form ref="acceptForm" :model="acceptForm" :rules="rules" label-width="105px">
      <el-row>
        <el-col>
          <el-form-item label="联系电话" prop="联系电话">
            <el-input v-model="acceptForm.联系电话" clearable placeholder="请输入" />
          </el-form-item>
          <el-form-item label="说明" prop="说明">
            <el-input v-model="acceptForm.说明" clearable placeholder="请输入" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="save">保存</el-button>
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
      acceptForm: {
        联系电话: '',
        说明: ''
      },
      rules: {
        联系电话: [{ required: true, message: '请输入', trigger: 'blur' }]
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
      this.$refs.acceptForm.resetFields()
      this.$emit('update:isShow', false)
    },
    save() {
      this.$refs.acceptForm.validate(valid => {
        if (valid) {
          this.$emit('update:isShow', false)
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>

