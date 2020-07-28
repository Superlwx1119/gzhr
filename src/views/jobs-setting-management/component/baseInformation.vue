<template>
  <!-- 基础信息 -->
  <div>
    <div slot="table-title" class="box-header handle">
      <span class="box-title">基础信息</span>
    </div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px" style="margin-bottom:10px">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-form-item label="单位名称" prop="aab069">
            <OrganizationName v-model="addForm.aab069" :disabled="true" @input="function(){return handleSelectChange(addForm.aab069,'aab069')}" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位规格" prop="rb0150">
            <OrganizationLevel v-model="addForm.rb0150" :disabled="true" @input="function(){return handleSelectChange(addForm.rb0150,'rb0150')}" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位主体岗位" prop="b0163">
            <EducationBackground v-model="addForm.b0163" :disabled="true" @input="function(){return handleSelectChange(addForm.b0163,'b0163')}" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位经费来源" prop="rb0460">
            <el-input v-model="addForm.rb0460" disabled @input="function(){return handleSelectChange(addForm.rb0460,'rb0460')}" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位编制数" prop="rb0181">
            <el-input v-model="addForm.rb0181" disabled @input="function(){return handleSelectChange(addForm.rb0181,'rb0181')}" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位岗位总量" prop="rb0181">
            <el-input v-model="addForm.rb0181" disabled @input="function(){return handleSelectChange(addForm.rb0181,'rb0181')}" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="单位正式在册工作人员" prop="brb213">
            <el-input v-model="addForm.brb213" @input="function(){return handleSelectChange(addForm.brb213,'brb213')}" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { addPostSetup, editPostSetup } from '@/api/JobsSettingManagement/index'
import { addPostFlow } from '@/api/JobsSettingManagement/hire'
import EducationBackground from '@/components/Select/EducationBackground'
import OrganizationName from '@/components/Select/OrganizationName'
import OrganizationLevel from '@/components/Select/OrganizationLevel'
export default {
  components: {
    EducationBackground,
    OrganizationName,
    OrganizationLevel
  },
  props: {
    addFormData: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    return {
      addForm: this.addFormData,
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
    addPostFlow() {
      addPostFlow({ aab001: 1282 }).then(res => {
        if (res.code === 0) {
          this.addForm = res.data
          this.$emit('changeArb', res.data.arb261)
        }
      })
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    editPostSetup(row) {
      editPostSetup({ aab001: row.aab001, arb211: row.arb211 }).then(res => {
        if (res.code === 0) {
          this.addForm = res.data
        }
      })
    },
    addPostSetup() {
      this.loading = true
      addPostSetup({ aab001: 1282 }).then(res => {
        this.loading = false
        if (res.code === 0) {
          this.addForm = res.data
          this.$emit('input', this.addForm)
        }
      }).catch(() => {
        this.loading = false
      })
    },
    handleSelectChange(v, type) {
      this.addForm[type] = v
      this.$emit('input', this.addForm)
    },
    save(formName) {}
  }
}
</script>

<style lang="scss" scoped>

</style>
