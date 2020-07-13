<template>
  <div class="HiringApply">
    <!-- 配偶信息 -->
    <div class="box-header handle">
      <span class="box-title">配偶信息</span>
    </div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-form-item label="姓名" prop="配偶姓名">
            <el-input v-model="addForm.配偶姓名" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="学历" prop="学历">
            <EducationBackground v-model="addForm.学历" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="学位" prop="学位">
            <EducationDegree v-model="addForm.学位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="政治面貌" prop="配偶政治面貌">
            <PoliticsStatus v-model="addForm.配偶政治面貌" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="工作单位" prop="配偶工作单位">
            <OrganizationName v-model="addForm.配偶工作单位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="职务" prop="配偶职务">
            <el-input v-model="addForm.配偶职务" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import EducationBackground from '@/components/Select/EducationBackground'
import EducationDegree from '@/components/Select/EducationDegree'
import PoliticsStatus from '@/components/Select/PoliticsStatus'
import OrganizationName from '@/components/Select/OrganizationName'
export default {
  components: {
    EducationDegree,
    EducationBackground,
    PoliticsStatus,
    OrganizationName
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
        配偶姓名: [{ required: true, message: '请输入配偶姓名', trigger: 'blur' }],
        学历: [{ required: true, message: '请选择学历', trigger: 'change' }],
        学位: [{ required: true, message: '请选择学位', trigger: 'change' }],
        配偶政治面貌: [{ required: true, message: '请选择配偶政治面貌', trigger: 'change' }],
        配偶工作单位: [{ required: true, message: '请选择工作单位', trigger: 'change' }],
        配偶职务: [{ required: true, message: '请选择配偶职务', trigger: 'blur' }]
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
