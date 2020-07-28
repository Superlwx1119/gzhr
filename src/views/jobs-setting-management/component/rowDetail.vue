<template>
  <!-- 基础信息 -->
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    width="1200px"
    :loading="loading"
    @update:isShow="isShow"
    @resetForm="reset"
  >
    <div class="box">

      <div class="box-body">
        <div slot="table-title" class="box-header handle">
          <span class="box-title">人员聘用信息</span>
        </div>
        <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px" style="margin-bottom:10px">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-form-item label="姓名" prop="aab069">
                <OrganizationName v-model="addForm.aab069" :disabled="true" @input="function(){return handleSelectChange(addForm.aab069,'aab069')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出生年月" prop="rb0150">
                <OrganizationLevel v-model="addForm.rb0150" :disabled="true" @input="function(){return handleSelectChange(addForm.rb0150,'rb0150')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别" prop="b0163">
                <EducationBackground v-model="addForm.b0163" :disabled="true" @input="function(){return handleSelectChange(addForm.b0163,'b0163')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="民族" prop="rb0460">
                <el-input v-model="addForm.rb0460" disabled @input="function(){return handleSelectChange(addForm.rb0460,'rb0460')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出生日期" prop="rb0181">
                <el-input v-model="addForm.rb0181" disabled @input="function(){return handleSelectChange(addForm.rb0181,'rb0181')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="身份证号" prop="rb0181">
                <el-input v-model="addForm.rb0181" disabled @input="function(){return handleSelectChange(addForm.rb0181,'rb0181')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="政治面貌" prop="brb213">
                <el-input v-model="addForm.brb213" @input="function(){return handleSelectChange(addForm.brb213,'brb213')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="文化程度" prop="brb213">
                <el-input v-model="addForm.brb213" @input="function(){return handleSelectChange(addForm.brb213,'brb213')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="参加工作时间" prop="brb213">
                <el-input v-model="addForm.brb213" @input="function(){return handleSelectChange(addForm.brb213,'brb213')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="人员类别" prop="brb213">
                <el-input v-model="addForm.brb213" @input="function(){return handleSelectChange(addForm.brb213,'brb213')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="岗位名称" prop="brb213">
                <el-input v-model="addForm.brb213" @input="function(){return handleSelectChange(addForm.brb213,'brb213')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="岗位等级" prop="brb213">
                <el-input v-model="addForm.brb213" @input="function(){return handleSelectChange(addForm.brb213,'brb213')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="聘用时间" prop="brb213">
                <el-input v-model="addForm.brb213" @input="function(){return handleSelectChange(addForm.brb213,'brb213')}" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="table-title" class="box-header handle">
          <span class="box-title">业务附件</span>
        </div>
      </div>
    </div>
  </form-dialog>
</template>

<script>
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
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    addFormData: {
      type: Object,
      default: function() { return {} }
    },
    dialogTitle: {
      type: String,
      default: '信息查看'
    },
    isDialogVisible: {
      type: Boolean,
      default: false
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
    isShow(v) {
      this.$emit('closeAll', false)
    },
    addPostFlow() {
      addPostFlow({ aab001: 1282 }).then(res => {
        if (res.code === 0) {
          this.addForm = res.data
        }
      })
    },
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    reset(formName) {
      this.$refs.addForm.resetFields()
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
