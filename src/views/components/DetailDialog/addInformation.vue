<template>
  <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
    <el-row :gutter="12">
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="单位名称" prop="aab069">
          <el-input v-model="addForm.aab069" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="上级单位" prop="bab023">
          <OrganizationName v-model="addForm.bab023" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="单位类型" prop="aab019">
          <OrganizationType v-model="addForm.aab019" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="单位隶属关系" prop="aab021">
          <SubordinateRelations v-model="addForm.aab021" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="单位级别" prop="rb0150">
          <OrganizationLevel v-model="addForm.rb0150" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="经费来源" prop="经费来源">
              <FundSources v-model="addForm.经费来源" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="国民经济分类" prop="国民经济分类">
              <SubordinateRelations v-model="addForm.国民经济分类" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="社会信用代码" prop="社会信用代码">
              <el-input v-model="addForm.社会信用代码" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="行政主管部门" prop="aab023">
          <OrganizationName v-model="addForm.aab023" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="所属系统" prop="rb0174">
          <SubordinateRelations v-model="addForm.rb0174" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="所属行业" prop="aab022">
          <Industry v-model="addForm.aab022" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="单位简称" prop="单位简称">
              <el-input v-model="addForm.单位简称" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="机构类别" prop="机构类别">
              <SubordinateRelations v-model="addForm.机构类别" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="行政区划" prop="aab226">
          <OrganizationName v-model="addForm.aab226" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="内设机构数" prop="内设机构数">
              <el-input v-model="addForm.内设机构数" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="批准编制单位" prop="rb0425">
          <el-input v-model="addForm.rb0425" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="批准编制日期" prop="批准编制日期">
              <el-date-picker
                v-model="addForm.批准编制日期"
                type="date"
                style="width:100%;height:100%"
                value-format="yyyyMMdd"
                placeholder="选择日期"
                @input="handleSelectChange"
              />
            </el-form-item>
          </el-col> -->
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="批准编制文号" prop="批准编制文号">
              <el-input v-model="addForm.批准编制文号" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="编制总数" prop="rb0705">
          <el-input v-model="addForm.rb0705" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="单位合同编号" prop="单位合同编号">
              <el-input v-model="addForm.单位合同编号" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="单位地址" prop="单位地址">
              <el-input v-model="addForm.单位地址" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="正职领导职数" prop="rb0741">
          <el-input v-model="addForm.rb0741" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="副职领导职数" prop="rb0742">
          <el-input v-model="addForm.rb0742" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="单位领导职数" prop="rb0740">
          <el-input v-model="addForm.rb0740" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="正职非领导职数" prop="rb0746">
          <el-input v-model="addForm.rb0746" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="副职非领导职数" prop="rb0747">
          <el-input v-model="addForm.rb0747" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="单位非领导职数" prop="rb0745">
          <el-input v-model="addForm.rb0745" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="法人代表" prop="法人代表">
              <el-input v-model="addForm.法人代表" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="法人证件号码" prop="法人证件号码">
              <el-input v-model="addForm.法人证件号码" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="批准成立文号" prop="rb0808">
          <el-input v-model="addForm.rb0808" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="批准成立日期" prop="rb0806">
          <el-date-picker
            v-model="addForm.rb0806"
            type="date"
            value-format="yyyyMMdd"
            style="width:100%;height:100%"
            placeholder="选择日期"
            @input="handleSelectChange"
          />
        </el-form-item>
      </el-col>
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="联系人" prop="联系人">
              <el-input v-model="addForm.联系人" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <!-- <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="联系人电话" prop="联系人电话">
              <el-input v-model="addForm.联系人电话" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="经办人姓名" prop="rb0214">
          <el-input v-model="addForm.rb0214" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="经办人员电话" prop="rb0216">
          <el-input v-model="addForm.rb0216" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="审核人员姓名" prop="rb0217">
          <el-input v-model="addForm.rb0217" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <el-col :md="12" :lg="8" :xl="6">
        <el-form-item label="审核人员电话	" prop="rb0219	">
          <el-input v-model="addForm.rb0219	" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
      <!-- <el-col :md="24" :lg="24" :xl="24">
            <el-form-item label="主要工作职责" prop="主要工作职责">
              <el-input v-model="addForm.主要工作职责" type="textarea" :rows="4" @input="handleSelectChange" />
            </el-form-item>
          </el-col> -->
      <el-col :md="24" :lg="24" :xl="24">
        <el-form-item label="备注" prop="aae013">
          <el-input v-model="addForm.aae013" type="textarea" :rows="4" @input="handleSelectChange" />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import OrganizationName from '@/components/Select/OrganizationName'
import OrganizationType from '@/components/Select/OrganizationType'
import SubordinateRelations from '@/components/Select/SubordinateRelations'
import OrganizationLevel from '@/components/Select/OrganizationLevel'
import FundSources from '@/components/Select/FundSources'
import Industry from '@/components/Select/Industry'
export default {
  components: {
    OrganizationName,
    OrganizationType,
    SubordinateRelations,
    OrganizationLevel,
    FundSources,
    Industry
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
      rules: {
        aab069: [
          { required: true, message: '请输入单位名称', trigger: 'blur' }
        ],
        bab023: [
          { required: true, message: '请选择上级单位', trigger: 'change' }
        ],
        aab019: [
          { required: true, message: '请选择单位类型', trigger: 'change' }
        ],
        aab021: [
          { required: true, message: '请选择单位隶属关系', trigger: 'change' }
        ],
        rb0150: [
          { required: true, message: '请选择单位级别', trigger: 'change' }
        ],
        rb0174: [
          { required: true, message: '请选择所属系统', trigger: 'change' }
        ],
        aab022: [
          { required: true, message: '请选择所属行业', trigger: 'change' }
        ],
        aab226: [
          { required: true, message: '请选择行政区划', trigger: 'change' }
        ],
        rb0705: [
          { required: true, message: '请输入编制总数', trigger: 'blur' }
        ],
        rb0741: [
          { required: true, message: '请输入正职领导职数', trigger: 'blur' }
        ],
        rb0742: [
          { required: true, message: '请输入副职领导职数', trigger: 'blur' }
        ],
        rb0746: [
          { required: true, message: '请输入正职非领导职数', trigger: 'blur' }
        ],
        rb0747: [
          { required: true, message: '请输入副职非领导职数', trigger: 'blur' }
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
    addperson() { // 新增申报
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
