<template>
  <!-- 新增缩略语 -->
  <form-dialog title="新增缩略语" :is-show="visible" @update:isShow="updateIsShow" @resetForm="resetForm">
    <el-form ref="addForm" :model="addForm" :rules="rules">
      <el-row :gutter="12">
        <el-col :span="12">
          <el-form-item label="中文名称" label-width="100px" prop="CnName">
            <el-input v-model="addForm.CnName" placeholder="请输入中文名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="英文名称" label-width="100px" prop="EngName">
            <el-input v-model="addForm.EngName" placeholder="请输入英文名称" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="12">
          <el-form-item label="英文缩略语" label-width="100px" prop="EngAbbreviation">
            <el-input v-model="addForm.EngAbbreviation" placeholder="请输入英文缩略语" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="管理域" label-width="100px" prop="domainAdmin">
            <el-select
              v-model="addForm.domainAdmin"
              clearable
              placeholder="请选择管理域"
              allow-create
              style="width:100%"
            >
              <el-option label="aaa" value="1" />
              <el-option label="bbb" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item align="right">
        <el-button @click="cancelEdit()">取消</el-button>
        <el-button type="primary" @click="submit('addForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </form-dialog>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    show: { type: Boolean, default: false }
  },
  data() {
    return {
      visible: false,
      addForm: {
        CnName: '',
        EngName: '',
        EngAbbreviation: '',
        domainAdmin: ''
      },
      rules: {
        CnName: [
          { required: true, message: '请输入中文名称', trigger: 'blur' }
        ],
        EngName: [
          { required: true, message: '请输入英文名称', trigger: 'blur' }
        ],
        EngAbbreviation: [
          { required: true, message: '请输入英文缩略语', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {
    show() {
      this.visible = this.show
    }
  },
  created() {},
  mounted() {},
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
          this.cancelEdit()
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
    cancelEdit() {
      this.visible = false
      this.resetForm()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang = "sass" scoped>

</style>
