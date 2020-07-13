<template>
  <div class="HiringApply">
    <!-- 教育信息 -->
    <div class="box-header handle">
      <span class="box-title">教育信息</span>
    </div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-form-item label="全日制教育学历" prop="全日制教育学历">
            <EducationBackground v-model="addForm.全日制教育学历" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="学位" prop="全日学位">
            <EducationDegree v-model="addForm.全日学位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="毕业时间" prop="全日毕业时间">
            <el-date-picker
              v-model="addForm.全日毕业时间"
              type="date"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              placeholder="选择日期"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="毕业院校" prop="全日毕业院校">
            <el-input v-model="addForm.全日毕业院校" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="专业" prop="全日专业">
            <el-input v-model="addForm.全日专业" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="">
            <el-input v-model="addForm.专业" style="visibility: hidden;" disabled @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="在职教育学历" prop="在职教育学历">
            <EducationBackground v-model="addForm.在职教育学历" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="学位" prop="在职学位">
            <EducationDegree v-model="addForm.在职学位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="毕业时间" prop="在职毕业时间">
            <el-date-picker
              v-model="addForm.在职毕业时间"
              type="date"
              value-format="yyyyMMdd"
              style="width:100%;height:100%"
              placeholder="选择日期"
              @input="handleSelectChange"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="毕业院校" prop="在职毕业院校">
            <el-input v-model="addForm.在职毕业院校" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="专业" prop="在职专业">
            <el-input v-model="addForm.在职专业" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import EducationBackground from '@/components/Select/EducationBackground'
import EducationDegree from '@/components/Select/EducationDegree'
export default {
  components: {
    EducationDegree,
    EducationBackground
  },
  mixins: [],
  props: {
    addFormData: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    return {
      addForm: {},
      rules: {
        全日制教育学历: [{ required: true, message: '请选择全日制教育学历', trigger: 'change' }],
        全日学位: [{ required: true, message: '请选择全日学位', trigger: 'change' }],
        全日毕业时间: [{ required: true, message: '请选择全日毕业时间', trigger: 'change' }],
        全日毕业院校: [{ required: true, message: '请输入全日毕业院校', trigger: 'blur' }],
        全日专业: [{ required: true, message: '请输入全日专业', trigger: 'blur' }],
        在职教育学历: [{ required: true, message: '请选择在职教育学历', trigger: 'change' }],
        在职学位: [{ required: true, message: '请选择在职学位', trigger: 'change' }],
        在职毕业时间: [{ required: true, message: '请选择在职毕业时间', trigger: 'change' }],
        在职毕业院校: [{ required: true, message: '请输入在职毕业院校', trigger: 'blur' }],
        在职专业: [{ required: true, message: '请输入在职专业', trigger: 'blur' }]
      }
    }
  },
  computed: {},
  watch: {
    addFormData: function(newValue) {
      this.addForm = newValue
      this.$emit('input', this.addForm)
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleSelectChange(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style scoped lang="scss">
  .HiringApply{
    >div {
      height: 100%;
    }
  }
</style>
