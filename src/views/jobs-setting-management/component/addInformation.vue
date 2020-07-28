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
          <span class="box-title">人员基础信息</span>
        </div>
        <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px" style="margin-bottom:10px">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-form-item label="姓名" prop="aac003">
                <OrganizationName v-model="addForm.aac003" @input="function(){return handleSelectChange(addForm.aac003,'aac003')}" />
              </el-form-item>
            </el-col>
            <!-- <el-col :span="8">
              <el-form-item label="单位规格" prop="rb0150">
                <OrganizationLevel v-model="addForm.rb0150" @input="function(){return handleSelectChange(addForm.rb0150,'rb0150')}" />
              </el-form-item>
            </el-col> -->
            <el-col :span="8">
              <el-form-item label="身份证号" prop="b0163">
                <EducationBackground v-model="addForm.b0163" @input="function(){return handleSelectChange(addForm.b0163,'b0163')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别" prop="aac004">
                <Gender v-model="addForm.aac004" @input="function(){return handleSelectChange(addForm.aac004,'aac004')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出生日期" prop="aac006">
                <el-input v-model="addForm.aac006" @input="function(){return handleSelectChange(addForm.aac006,'aac006')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单位名称" prop="rb0181">
                <el-input v-model="addForm.rb0181" @input="function(){return handleSelectChange(addForm.rb0181,'rb0181')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="学历" prop="aac011">
                <el-input v-model="addForm.aac011" @input="function(){return handleSelectChange(addForm.aac011,'aac011')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="学位" prop="rc0440">
                <el-input v-model="addForm.rc0440" @input="function(){return handleSelectChange(addForm.rc0440,'rc0440')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="合同编号" prop="brc219">
                <el-input v-model="addForm.brc219" @input="function(){return handleSelectChange(addForm.brc219,'brc219')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="专技/政工任职时间" prop="brc214">
                <el-input v-model="addForm.brc214" @input="function(){return handleSelectChange(addForm.brc214,'brc214')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="现享受岗位待遇" prop="rc2441">
                <el-input v-model="addForm.rc2441" @input="function(){return handleSelectChange(addForm.rc2441,'rc2441')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="拟聘岗位及等级" prop="brc215">
                <el-input v-model="addForm.brc215" @input="function(){return handleSelectChange(addForm.brc215,'brc215')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="岗位等级说明" prop="rc2430">
                <el-input v-model="addForm.rc2430" @input="function(){return handleSelectChange(addForm.rc2430,'rc2430')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="现政工等级" prop="brc208">
                <el-input v-model="addForm.brc208" @input="function(){return handleSelectChange(addForm.brc208,'brc208')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="“双肩挑”专技等级" prop="brc206">
                <el-input v-model="addForm.brc206" @input="function(){return handleSelectChange(addForm.brc206,'brc206')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="“双身份”拟保等级" prop="brc207">
                <el-input v-model="addForm.brc207" @input="function(){return handleSelectChange(addForm.brc207,'brc207')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="专技人员专业类别" prop="brc232">
                <el-input v-model="addForm.brc232" @input="function(){return handleSelectChange(addForm.brc232,'brc232')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="职务名称" prop="brc209">
                <el-input v-model="addForm.brc209" @input="function(){return handleSelectChange(addForm.brc209,'brc209')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="任职时间" prop="brc210">
                <el-input v-model="addForm.brc210" @input="function(){return handleSelectChange(addForm.brc210,'brc210')}" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="是否有工作经验" prop="rc3774">
                <el-select v-model="addForm.rc3774" placeholder="请选择" @input="function(){return handleSelectChange(addForm.rc3774,'rc3774')}">
                  <el-option label="是" value="1" />
                  <el-option label="否" value="0" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="现专技/政工职务" prop="brc213">
                <el-input v-model="addForm.brc213" @input="function(){return handleSelectChange(addForm.brc213,'brc213')}" />

              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注" prop="brc221">
                <el-input v-model="addForm.brc221" type="textarea" :rows="4" @input="function(){return handleSelectChange(addForm.brc221,'brc221')}" />
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
import Gender from '@/components/Select/Gender'
export default {
  components: {
    EducationBackground,
    OrganizationName,
    Gender
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
    info(row) {
      this.addForm = row
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
