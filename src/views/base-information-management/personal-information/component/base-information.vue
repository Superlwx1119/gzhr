<template>
  <!-- 基础信息 -->
  <div class="box">
    <div class="box-body">
      <div slot="table-title" class="box-header handle">
        <span class="box-title">基础信息</span>
      </div>
      <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
        <el-row :gutter="12">
          <el-col :span="16">
            <el-row :gutter="12">
              <el-col :span="24">
                <el-form-item label="单位" prop="aab001">
                  <OrganizationName v-model="addForm.aab001" @input="function(){return handleSelectChange(addForm.aab001,'aab001')}" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="姓名" prop="aac003">
                  <el-input v-model="addForm.aac003" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="身份证号" prop="aac002">
                  <el-input v-model="addForm.aac002" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="性别" prop="aac004">
                  <Gender v-model="addForm.aac004" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="出生日期" prop="aac006">
                  <el-date-picker
                    v-model="addForm.aac006"
                    type="date"
                    value-format="yyyyMMdd"
                    style="width:100%;height:100%"
                    placeholder="选择日期"
                    @input="handleSelectChange"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="参加工作时间" prop="aac007">
                  <el-date-picker
                    v-model="addForm.aac007"
                    type="date"
                    value-format="yyyyMMdd"
                    style="width:100%;height:100%"
                    placeholder="选择日期"
                    @input="handleSelectChange"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="进入单位时间" prop="rc0301">
                  <el-date-picker
                    v-model="addForm.rc0301"
                    type="date"
                    value-format="yyyyMMdd"
                    style="width:100%;height:100%"
                    placeholder="选择日期"
                    @input="handleSelectChange"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="进入方式" prop="rc0206">
                  <EnterType v-model="addForm.rc0206" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="民族" prop="aac005">
                  <National v-model="addForm.aac005" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <!-- <el-col :span="12">
                <el-form-item label="籍贯" prop="籍贯">
                  <el-input v-model="addForm.籍贯" @input="handleSelectChange"/>
                </el-form-item>
              </el-col> -->
              <el-col :span="12">
                <el-form-item label="港澳台侨属" prop="rc0181">
                  <OverseasChinese v-model="addForm.rc0181" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="户口所在地" prop="aac010">
                  <el-input v-model="addForm.aac010" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <!-- <el-col :span="12">
                <el-form-item label="国籍" prop="国籍">
                  <el-input v-model="addForm.国籍" @input="handleSelectChange"/>
                </el-form-item>
              </el-col> -->
              <el-col :span="12">
                <el-form-item label="人员类别" prop="rc0215">
                  <StaffType v-model="addForm.rc0215" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <!-- <el-col :span="12">
                <el-form-item label="新进人员登记表编号" prop="新进人员登记表编号">
                  <el-input v-model="addForm.新进人员登记表编号" @input="handleSelectChange" />
                </el-form-item>
              </el-col> -->
              <el-col :span="12">
                <el-form-item label="原单位名称" prop="rc0302">
                  <el-input v-model="addForm.rc0302" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="原单位职务" prop="rc0303">
                  <el-input v-model="addForm.rc0303" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="招聘方式" prop="rc0311">
                  <HireType v-model="addForm.rc0311" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="来源类型" prop="rc0212">
                  <SourceType v-model="addForm.rc0212" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="健康状况" prop="aac033">
                  <HealthType v-model="addForm.aac033" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="婚姻状况" prop="aac017">
                  <MaritalStatus v-model="addForm.aac017" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <!-- <el-col :span="12">
                <el-form-item label="联系人姓名" prop="联系人姓名">
                  <el-input v-model="addForm.联系人姓名" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人电话" prop="联系人电话">
                  <el-input v-model="addForm.联系人电话" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="档案所在地" prop="档案所在地">
                  <el-input v-model="addForm.档案所在地" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="家庭住址" prop="家庭住址">
                  <el-input v-model="addForm.家庭住址" />
                </el-form-item>
              </el-col> -->
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-col :span="24">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon" />
              </el-upload>
            </el-col>
            <!-- <el-col :span="24">
              <el-form-item label="入职批准情况" prop="入职批准情况">
                <el-select v-model="addForm.入职批准情况" placeholder="请选择" @input="handleSelectChange">
                  <el-option label="经组织或人社部门批准进入" value="1" />
                  <el-option label="经主管部门同意进入" value="2" />
                  <el-option label="单位自行聘用" value="3" />
                </el-select>
              </el-form-item>
            </el-col> -->
            <!-- <el-col :span="24">
              <el-form-item label="原单位岗位级别" prop="原单位岗位级别">
                <JobsLevel v-model="addForm.原单位岗位级别" @input="handleSelectChange" />
              </el-form-item>
            </el-col> -->
            <el-col :span="24">
              <el-form-item label="试用期限" prop="rc0310">
                <ProbationPeriod v-model="addForm.rc0310" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <!-- <el-col :span="24">
              <el-form-item label="专长" prop="专长">
                <el-input v-model="addForm.专长" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="联系人手机" prop="联系人手机">
                <el-input v-model="addForm.联系人手机" />
              </el-form-item>
            </el-col>
          </el-col> -->

          </el-col></el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="备注" prop="rc0307">
              <el-input v-model="addForm.rc0307" type="textarea" :rows="4" @input="handleSelectChange" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="box-header handle">
        <span class="box-title">业务材料</span>
      </div>
      <List :is-border="true" :is-index="true" :columns="columns" :operation="tableOperates" :data="tableData" />
    </div>
  </div>

</template>

<script>
import validator from '@/utils/el-validator.js'
import uploadAttachment from '@/api/Common/Api'
import HealthType from '@/components/Select/HealthType'
import StaffType from '@/components/Select/StaffType'
import SourceType from '@/components/Select/SourceType'
import OverseasChinese from '@/components/Select/OverseasChinese'
import HireType from '@/components/Select/HireType'
import OrganizationName from '@/components/Select/OrganizationName'
// import JobsLevel from '@/components/Select/JobsLevel'
import National from '@/components/Select/National'
import EnterType from '@/components/Select/EnterType'
import ProbationPeriod from '@/components/Select/ProbationPeriod'
import MaritalStatus from '@/components/Select/MaritalStatus'
import Gender from '@/components/Select/Gender'
export default {
  components: {
    OrganizationName,
    Gender,
    MaritalStatus,
    ProbationPeriod,
    EnterType,
    National,
    HealthType,
    StaffType,
    SourceType,
    OverseasChinese,
    HireType
    // JobsLevel
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
      imageUrl: '',
      uploadUrl: '',
      columns: [
        { label: '附件数', prop: '附件数', align: 'center' },
        { label: '材料名称', prop: '材料名称', align: 'center' },
        { label: '材料说明', prop: '材料说明', align: 'center', width: '300px' },
        { label: '是否必须', prop: '是否必须', align: 'center' }
      ],
      tableData: [
        { 单位编码: '单位编码', 单位名称: '单位名称', 社会信用代码: '社会信用代码', 单位类型: '单位类型', 是否参公: '是否参公', 主管部门: '主管部门', 行业代码: '行业代码' },
        { 单位编码: '单位编码', 单位名称: '单位名称', 社会信用代码: '社会信用代码', 单位类型: '单位类型', 是否参公: '是否参公', 主管部门: '主管部门', 行业代码: '行业代码' },
        { 单位编码: '单位编码', 单位名称: '单位名称', 社会信用代码: '社会信用代码', 单位类型: '单位类型', 是否参公: '是否参公', 主管部门: '主管部门', 行业代码: '行业代码' }
      ],
      tableOperates: {
        width: '120px',
        fixed: 'right',
        list: [
          { show: true, label: '上传', type: 'text', method: () => {
          } }
        ]
      },
      rules: {
        aab001: [
          { required: true, message: '请选择单位名称', trigger: 'change' }
        ],
        aac003: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        aac002: [
          { required: true, validator: validator, regexp: 'identityCard', trigger: 'blur' }
        ],
        aac004: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        aac006: [
          { required: true, message: '请选择出生日期', trigger: 'change' }
        ],
        aac007: [
          { required: true, message: '请选择参加工作时间', trigger: 'change' }
        ],
        rc0301: [
          { required: true, message: '请选择进入单位时间', trigger: 'change' }
        ],
        rc0206: [
          { required: true, message: '请选择进入方式', trigger: 'change' }
        ],
        rc0215: [
          { required: true, message: '请选择人员类别', trigger: 'change' }
        ],
        rc0311: [
          { required: true, message: '请选择招聘方式', trigger: 'change' }
        ],
        rc0212: [
          { required: true, message: '请选择来源类型', trigger: 'change' }
        ],
        rc0310: [
          { required: true, message: '请选择试用期限', trigger: 'change' }
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
  created() {
    this.uploadUrl = process.env.VUE_APP_BASE_API + uploadAttachment.uploadAttachment
  },
  methods: {
    handleSelectChange(v, type) {
      if (type === 'aab001') {
        this.$store.state.dictionary.dictionary.aab069.forEach(item => {
          if (item.aab001 === v) {
            this.addForm.aab069 = item.aab069
          }
        })
      }

      this.$emit('input', v)
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg'
      // const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/ .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  /deep/ .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 365px;
    height: 380px;
    line-height: 380px;
    text-align: center;
  }
  /deep/ .avatar {
    width: 365px;
    height: 380px;
    display: block;
  }
</style>
