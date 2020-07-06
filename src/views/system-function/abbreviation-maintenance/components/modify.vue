<template>
  <!-- 修改缩略语 -->
  <form-dialog title="修改缩略语" :is-show="visible" @update:isShow="updateIsShow">
    <el-form ref="modifyForm" :model="modifyForm" :rules="rules">
      <el-row :gutter="12">
        <el-col :span="12">
          <el-form-item label="中文名称" label-width="100px" prop="CnName">
            <el-input v-model="modifyForm.CnName" placeholder="请输入中文名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="英文名称" label-width="100px" prop="EngName">
            <el-input v-model="modifyForm.EngName" placeholder="请输入英文名称" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="12">
          <el-form-item label="英文缩略语" label-width="100px" prop="EngAbbreviation">
            <el-input v-model="modifyForm.EngAbbreviation" placeholder="请输入英文缩略语" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="管理域" label-width="100px" prop="domainAdmin">
            <el-select
              v-model="modifyForm.domainAdmin"
              clearable
              placeholder="请选择管理域"
              allow-create
              style="width:100%"
            >
              <el-option label="abc" value="1" />
              <el-option label="def" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item align="right">
        <el-button @click="cancelEdit()">取消</el-button>
        <el-button type="primary" @click="submit('modifyForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </form-dialog>
</template>

<script>
export default {
  name: '',
  components: {},
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
      rules: {}
    }
  },
  computed: {
    modifyForm: function() {
      return this.form
    }
  },
  watch: {
    show: function(newVal, oldVal) {
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
      this.$refs.modifyForm.resetFields()
    },
    submit(formName) {
      console.log(this.modifyForm.EngName)
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
      this.$refs.modifyForm.clearValidate()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang = "sass" scoped>

</style>
