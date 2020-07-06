<template>
  <form-dialog :is-show="visible" title="修改数据集对象" @update:isShow="updateIsShow">
    <el-form ref="editForm" :model="editForm" :rules="rules" label-width="100px">
      <el-row :gutter="12">
        <el-col :span="12">
          <el-form-item label="管理域" prop="manageDomain">
            <el-select v-model="editForm.manageDomain" style="width: 100%" placeholder="请选择">
              <el-option label="aaa" value="1" />
              <el-option label="bbb" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实体对象标识" prop="objectIdentifier">
            <el-input v-model="editForm.objectIdentifier" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实体对象编码" prop="objectCode">
            <el-input v-model="editForm.objectCode" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实体对象名称" prop="objectName">
            <el-input v-model="editForm.objectName" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="数据元标识符" prop="dataIdentifier">
            <el-input v-model="editForm.dataIdentifier" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="数据元编码" prop="dataCode">
            <el-input v-model="editForm.dataCode" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="数据元中文名" prop="dataName">
            <el-input v-model="editForm.dataName" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="数据元类型" prop="dataType">
            <el-select v-model="editForm.dataType" style="width: 100%" placeholder="请选择">
              <el-option label="aaa" value="1" />
              <el-option label="bbb" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="数据元精度" prop="dataPrecision">
            <el-input v-model="editForm.dataPrecision" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="分配方案" prop="plan">
            <el-select v-model="editForm.plan" style="width: 100%" placeholder="请选择">
              <el-option label="aaa" value="1" />
              <el-option label="bbb" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row style="text-align: right;">
        <el-button size="small" @click="close()">取消</el-button>
        <el-button type="primary" size="small" @click="submit('editForm')">保存</el-button>
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
    form: {
      type: Object,
      default: () => {}
    },
    show: { type: Boolean, default: () => false }
  },
  data() {
    return {
      visible: this.show,
      rules: {
        objectCode: { required: true, message: '请输入实体对象编码', trigger: 'blur' },
        objectName: { required: true, message: '请输入实体对象名称', trigger: 'blur' },
        dataIdentifier: { required: true, message: '请输入数据元标识符', trigger: 'blur' },
        objectIdentifier: { required: true, message: '请输入实体对象标识', trigger: 'blur' },
        plan: { required: true, message: '请选择分配方案', trigger: 'change' },
        dataType: { required: true, message: '请选择数据元类型', trigger: 'change' },
        dataPrecision: { required: true, message: '请输入数据元精度', trigger: 'blur' },
        dataCode: { required: true, message: '请输入数据元编码', trigger: 'blur' },
        dataName: { required: true, message: '请输入数据元中文名', trigger: 'blur' }
      }
    }
  },
  computed: {
    editForm: function() {
      return this.form
    }
  },
  watch: {
    show: function(newVal, oldVal) {
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
      this.$refs.editForm.resetFields()
    },
    close() {
      this.visible = false
      this.$refs.editForm.clearValidate()
      this.$emit('update:show', false)
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
    }
  }
}
</script>

<style scoped lang="scss"></style>
