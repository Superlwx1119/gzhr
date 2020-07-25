<template>
  <div class="box">
    <div class="box-body">
      <div slot="table-title" class="box-header handle">
        <span class="box-title">审核意见</span>
      </div>
      <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
        <el-row>
          <el-col :span="24">
            <el-form-item prop="message" label="审核意见">
              <el-input v-model="addForm.message" type="textarea" :rows="4" @input="handleSelectChange" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addFormData: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    return {
      addForm: this.addFormData,
      rules: {
        message: [
          { required: true, message: '请输入审核意见', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    addFormData: function(newValue) {
      this.addForm = newValue
      this.$emit('input', this.addForm)
    }
  },
  methods: {
    handleSelectChange(v, type) {
      this.$emit('input', v)
    }
  }
}
</script>

<style>

</style>
