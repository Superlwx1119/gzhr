<template>
  <!-- 基础信息 -->
  <div>
    <div slot="table-title" class="box-header handle">
      <span class="box-title">基础信息</span>
    </div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px" style="margin-bottom:10px">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-form-item label="申报单位" prop="申报单位">
            <el-input v-model="addForm.申报单位" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="主管部门" prop="主管部门">
            <el-input v-model="addForm.主管部门" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位主体岗位" prop="单位主体岗位">
            <EducationBackground v-model="addForm.单位主体岗位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="申报岗位名称" prop="申报岗位名称">
            <el-input v-model="addForm.申报岗位名称" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="申报岗位等级" prop="申报岗位等级">
            <el-input v-model="addForm.申报岗位等级" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="申报数量" prop="申报数量">
            <el-input v-model="addForm.申报数量" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="目标类型" prop="目标类型">
            <el-input v-model="addForm.目标类型" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位岗位总量" prop="单位岗位总量">
            <el-input v-model="addForm.单位岗位总量" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="占常设岗位比例" prop="占常设岗位比例">
            <el-input v-model="addForm.占常设岗位比例" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="占常设岗位比例" prop="占常设岗位比例">
            <el-input v-model="addForm.占常设岗位比例" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="同级常设岗数" prop="同级常设岗数">
            <el-input v-model="addForm.同级常设岗数" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="同级常设岗已聘数" prop="同级常设岗已聘数">
            <el-input v-model="addForm.同级常设岗已聘数" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="职称获得时间" prop="职称获得时间">
            <el-date-picker
              v-model="addForm.职称获得时间"
              type="date"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              placeholder="选择日期"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="聘期" prop="聘期">
            <el-date-picker
              v-model="addForm.聘期"
              type="daterange"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="工作单位" prop="工作单位">
            <el-input v-model="addForm.工作单位" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="专业技术(技能)任职资格" prop="专业技术(技能)任职资格">
            <el-input v-model="addForm.专业技术任职资格" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="核销日期" prop="核销日期">
            <el-date-picker
              v-model="addForm.核销日期"
              type="date"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              placeholder="选择日期"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="申报岗位职责" prop="申报岗位职责">
            <el-input v-model="addForm.申报岗位职责" type="textarea" :rows="3" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="申报岗位条件" prop="申报岗位条件">
            <el-input v-model="addForm.申报岗位条件" type="textarea" :rows="3" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="申报岗位原因" prop="申报岗位原因">
            <el-input v-model="addForm.申报岗位原因" type="textarea" :rows="3" />
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
