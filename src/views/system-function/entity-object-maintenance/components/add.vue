<template>
  <form-dialog :is-show="visible" title="新增数据元" @update:isShow="updateIsShow" @resetForm="resetForm">
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="100px">
      <el-row :gutter="12">
        <el-col :span="12">
          <el-form-item label="实体对象编码" prop="objectCode">
            <el-input v-model="addForm.objectCode" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实体对象名称" prop="objectName">
            <el-input v-model="addForm.objectName" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实体对象标识" prop="objectIdentifier">
            <el-input v-model="addForm.objectIdentifier" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="分配方案" prop="plan">
            <el-select v-model="addForm.plan" style="width: 100%" placeholder="请选择">
              <el-option label="aaa" value="1" />
              <el-option label="bbb" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="数据元标识符" prop="dataIdentifier">
            <el-input v-model="addForm.dataIdentifier" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="管理域" prop="manageDomain">
            <el-select v-model="addForm.manageDomain" style="width: 100%" placeholder="请选择">
              <el-option label="aaa" value="1" />
              <el-option label="bbb" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row style="text-align: right;">
        <el-button size="small" @click="close()">取消</el-button>
        <el-button type="primary" size="small" @click="submit('addForm')">保存</el-button>
      </el-row>
    </el-form>
  </form-dialog>
</template>

<script>
export default {
  name: '',
  components: {},
  mixins: [],
  props: {
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      visible: this.show,
      addForm: {
        objectCode: '',
        objectName: '',
        dataIdentifier: '',
        objectIdentifier: '',
        plan: '',
        manageDomain: ''
      },
      rules: {
        objectCode: { required: true, message: '请输入实体对象编码', trigger: 'blur' },
        objectName: { required: true, message: '请输入实体对象名称', trigger: 'blur' },
        dataIdentifier: { required: true, message: '请输入数据元标识符', trigger: 'blur' },
        objectIdentifier: { required: true, message: '请输入实体对象标识', trigger: 'blur' },
        plan: { required: true, message: '请选择分配方案', trigger: 'change' }
      }
    }
  },
  computed: {},
  watch: {
    show() {
      this.visible = this.show
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    resetForm() {
      this.$refs.addForm.resetFields()
    },
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.close()
          this.$alert(`<div class="myalert-header">操作成功</div>
            <div class="myalert-content">保存成功</div>`, {
            dangerouslyUseHTMLString: true, confirmButtonText: '确定',
            type: 'success'
          })
        } else {
          return false
        }
      })
    },
    close() {
      this.visible = false
      this.resetForm()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss"></style>
