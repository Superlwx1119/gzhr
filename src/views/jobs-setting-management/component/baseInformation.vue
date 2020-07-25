<template>
  <!-- 基础信息 -->
  <div>
    <div slot="table-title" class="box-header handle">
      <span class="box-title">基础信息</span>
    </div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px" style="margin-bottom:10px">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-form-item label="单位名称" prop="单位名称">
            <el-input v-model="addForm.单位名称" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位规格" prop="单位规格">
            <el-select v-model="addForm.单位规格" placeholder="请选择" @input="handleSelectChange">
              <el-option label="在职教育" value="1" />
              <el-option label="全日制教育" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位主体岗位" prop="单位主体岗位">
            <EducationBackground v-model="addForm.单位主体岗位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位经费来源" prop="单位经费来源">
            <el-input v-model="addForm.单位经费来源" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位编制数" prop="单位编制数">
            <el-input v-model="addForm.单位编制数" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位岗位总量" prop="单位岗位总量">
            <el-input v-model="addForm.单位岗位总量" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位正式在册工作人员" prop="单位正式在册工作人员">
            <el-input v-model="addForm.单位正式在册工作人员" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import EducationBackground from '@/components/Select/EducationBackground'
export default {
  components: {
    EducationBackground
  },
  props: {
    addFormData: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    return {
      addForm: {},
      rules: {},
      loading: false
    }
  },
  watch: {
    addFormData: function(newValue) {
      this.addForm = newValue
      this.$emit('input', this.addForm)
    }
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    save(formName) {}
  }
}
</script>

<style lang="scss" scoped>

</style>
