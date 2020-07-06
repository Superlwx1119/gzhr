<template>
  <form-dialog :title="dialogTitle" :is-show="isDialogVisible" @update:isShow="isShow" @resetForm="resetForm">
    <el-form ref="administrativeDomainForm" :model="addForm" :rules="rules">
      <el-form-item label="管理域名称" label-width="90px" prop="name">
        <el-input v-model="addForm.name" placeholder="请输入管理域名称" />
      </el-form-item>
      <el-form-item label="管理域描述" label-width="90px" prop="description">
        <el-input v-model="addForm.description" placeholder="请输入管理域描述" />
      </el-form-item>
      <el-form-item align="right">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="saveAddministrativeDomain">保存</el-button>
      </el-form-item>
    </el-form>
  </form-dialog>
</template>
<script>
export default {
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '新增管理域'
    },
    administrativeDomainForm: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      addForm: {
        name: '',
        description: ''
      },
      rules: {
        name: [{ required: true, message: '请输入管理域名称', trigger: 'blur' }],
        description: [{ required: true, message: '请输入管理域描述', trigger: 'blur' }]
      }
    }
  },
  watch: {
    administrativeDomainForm: {
      handler(val) {
        this.addForm = val
      },
      immediate: true
    }
  },
  methods: {
    resetForm() {
      this.$emit('update:isShow', false)
      this.$refs.administrativeDomainForm.resetFields()
    },
    closeDialog() {
      this.$emit('update:isShow', false)
    },
    saveAddministrativeDomain() {
      this.$refs.administrativeDomainForm.validate((valid) => {
        if (valid) {
          this.$emit('saveAddministrativeDomain', this.addForm)
        }
      })
    },
    isShow(v) {
      this.$emit('update:isShow', v)
    }
  }
}
</script>
