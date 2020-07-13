<template>
  <div class="HiringApply">
    <!-- 调配信息 -->
    <div class="box-header handle">
      <span class="box-title">调配信息</span>
    </div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-form-item label="现工作单位" prop="现工作单位">
            <el-input v-model="addForm.现工作单位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="职务" prop="职务">
            <JobsLevel v-model="addForm.职务" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位性质" prop="现单位性质">
            <OrganizationalNature v-model="addForm.现单位性质" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="调入单位" prop="调入单位">
            <el-input v-model="addForm.调入单位" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="拟任职务" prop="拟任职务">
            <JobsLevel v-model="addForm.拟任职务" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位性质" prop="调入单位性质">
            <OrganizationalNature v-model="addForm.调入单位性质" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="调入单位编制数" prop="调入单位编制数">
            <el-input v-model="addForm.调入单位编制数" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="实有人员数" prop="实有人员数">
            <el-input v-model="addForm.实有人员数" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="空编数" prop="空编数">
            <el-input v-model="addForm.空编数" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="空岗数" prop="空岗数">
            <el-input v-model="addForm.空岗数" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="">
            <el-input v-model="addForm.空岗数" style="visibility: hidden;" disabled @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="调动理由" prop="调动理由">
            <AllocateReson v-model="addForm.调动理由" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="理由说明" prop="理由说明">
            <el-input v-model="addForm.理由说明" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="来源渠道" prop="来源渠道">
            <PersonnelSource v-model="addForm.来源渠道" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="流动方向" prop="流动方向">
            <FlowDirection v-model="addForm.流动方向" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="简历" prop="简历">
            <el-input v-model="addForm.简历" type="textarea" :rows="4" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注" prop="备注">
            <el-input v-model="addForm.备注" type="textarea" :rows="4" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import JobsLevel from '@/components/Select/JobsLevel'
import OrganizationalNature from '@/components/Select/OrganizationalNature'
import AllocateReson from '@/components/Select/AllocateReson'
import PersonnelSource from '@/components/Select/PersonnelSource'
import FlowDirection from '@/components/Select/FlowDirection'

export default {
  components: { JobsLevel, OrganizationalNature, AllocateReson, PersonnelSource, FlowDirection },
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
        现工作单位: [{ required: true, message: '请输入全日制教育学历', trigger: 'blur' }],
        职务: [{ required: true, message: '请选择职务', trigger: 'change' }],
        现单位性质: [{ required: true, message: '请选择现单位性质', trigger: 'change' }],
        调入单位: [{ required: true, message: '请输入调入单位', trigger: 'blur' }],
        拟任职务: [{ required: true, message: '请选择拟任职务', trigger: 'change' }],
        调入单位性质: [{ required: true, message: '请选择调入单位性质', trigger: 'change' }],
        调入单位编制数: [{ required: true, message: '请输入调入单位编制数', trigger: 'blur' }],
        实有人员数: [{ required: true, message: '请输入实有人员数', trigger: 'blur' }],
        空编数: [{ required: true, message: '请输入空编数', trigger: 'blur' }],
        空岗数: [{ required: true, message: '请输入空岗数', trigger: 'blur' }],
        调动理由: [{ required: true, message: '请选择调动理由', trigger: 'change' }],
        来源渠道: [{ required: true, message: '请选择来源渠道', trigger: 'change' }],
        流动方向: [{ required: true, message: '请选择流动方向', trigger: 'change' }],
        简历: [{ required: true, message: '请输入简历', trigger: 'blur' }]
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
