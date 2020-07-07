<template>
  <div class="box">
    <div class="box-body">
      <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
        <el-row :gutter="12">
          <el-col :span="16">
            <el-row :gutter="12">
              <el-col :span="24">
                <el-form-item label="单位" prop="单位">
                  <OrganizationName v-model="addForm.单位" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="姓名" prop="姓名">
                  <el-input v-model="addForm.姓名" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="身份证号" prop="身份证号">
                  <el-input v-model="addForm.身份证号" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="性别" prop="性别">
                  <el-input v-model="addForm.性别" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="出生日期" prop="出生日期">
                  <el-date-picker
                    v-model="addForm.出生日期"
                    type="date"
                    value-format="yyyyMMdd"
                    style="width:100%;height:100%"
                    placeholder="选择日期"
                    @input="handleSelectChange"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="参加工作时间" prop="参加工作时间">
                  <el-date-picker
                    v-model="addForm.参加工作时间"
                    type="date"
                    value-format="yyyyMMdd"
                    style="width:100%;height:100%"
                    placeholder="选择日期"
                    @input="handleSelectChange"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="进入单位时间" prop="进入单位时间">
                  <el-date-picker
                    v-model="addForm.进入单位时间"
                    type="date"
                    value-format="yyyyMMdd"
                    style="width:100%;height:100%"
                    placeholder="选择日期"
                    @input="handleSelectChange"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="进入方式" prop="进入方式">
                  <EnterType v-model="addForm.进入方式" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="民族" prop="民族">
                  <National v-model="addForm.民族" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="籍贯" prop="籍贯">
                  <el-input v-model="addForm.籍贯" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="港澳台侨属" prop="港澳台侨属">
                  <OverseasChinese v-model="addForm.港澳台侨属" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="户口所在地" prop="户口所在地">
                  <el-input v-model="addForm.户口所在地" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="国籍" prop="国籍">
                  <el-input v-model="addForm.国籍" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="人员类别" prop="人员类别">
                  <StaffType v-model="addForm.人员类别" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="新进人员登记表编号" prop="新进人员登记表编号">
                  <el-input v-model="addForm.新进人员登记表编号" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="原单位名称" prop="原单位名称">
                  <el-input v-model="addForm.原单位名称" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="原单位职务" prop="原单位职务">
                  <el-input v-model="addForm.原单位职务" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="招聘方式" prop="招聘方式">
                  <el-select v-model="addForm.招聘方式" placeholder="请选择" @input="handleSelectChange">
                    <el-option label="考试" value="1" />
                    <el-option label="考察" value="2" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="来源类型" prop="来源类型">
                  <el-select v-model="addForm.来源类型" placeholder="请选择" @input="handleSelectChange">
                    <el-option label="应届毕业生" value="1" />
                    <el-option label="社会人员" value="2" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="健康状况" prop="健康状况">
                  <HealthType v-model="addForm.健康状况" @input="handleSelectChange" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="婚姻状况" prop="婚姻状况">
                  <el-select v-model="addForm.婚姻状况" placeholder="请选择" @input="handleSelectChange">
                    <el-option label="未婚" value="1" />
                    <el-option label="已婚" value="2" />
                    <el-option label="丧偶" value="3" />
                    <el-option label="离婚" value="4" />
                    <el-option label="其他" value="5" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
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
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-col :span="24">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon" />
              </el-upload>
            </el-col>
            <el-col :span="24">
              <el-form-item label="入职批准情况" prop="入职批准情况">
                <el-select v-model="addForm.入职批准情况" placeholder="请选择" @input="handleSelectChange">
                  <el-option label="经组织或人社部门批准进入" value="1" />
                  <el-option label="经主管部门同意进入" value="2" />
                  <el-option label="单位自行聘用" value="3" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="原单位岗位级别" prop="原单位岗位级别">
                <JobsLevel v-model="addForm.原单位岗位级别" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="试用期限" prop="试用期限">
                <el-select v-model="addForm.试用期限" placeholder="请选择" @input="handleSelectChange">
                  <el-option label="1个月" value="1" />
                  <el-option label="3个月" value="2" />
                  <el-option label="6个月" value="3" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="专长" prop="专长">
                <el-input v-model="addForm.专长" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="联系人手机" prop="联系人手机">
                <el-input v-model="addForm.联系人手机" />
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
        <el-col :span="24">
          <el-form-item label="备注" prop="备注">
            <el-input v-model="addForm.备注" type="textarea" :rows="4" />
          </el-form-item>
        </el-col>
      </el-form>
      <div class="box-header handle">
        <span class="box-title">业务材料</span>
      </div>
      <List :is-border="true" :is-index="true" :columns="columns" :operation="tableOperates" :data="tableData" />
    </div>
  </div>

</template>

<script>
import HealthType from '@/components/Select/HealthType'
import StaffType from '@/components/Select/StaffType'
import OverseasChinese from '@/components/Select/OverseasChinese'
import JobsLevel from '@/components/Select/JobsLevel'
import National from '@/components/Select/National'
import EnterType from '@/components/Select/EnterType'
import OrganizationName from '@/components/Select/OrganizationName'
export default {
  components: {
    OrganizationName,
    EnterType,
    National,
    HealthType,
    StaffType,
    OverseasChinese,
    JobsLevel
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
        单位: [
          { required: true, message: '请选择单位名称', trigger: 'change' }
        ],
        姓名: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        身份证号: [
          { required: true, message: '请输入身份证号', trigger: 'blur' }
        ],
        性别: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        出生日期: [
          { required: true, message: '请选择出生日期', trigger: 'change' }
        ],
        参加工作时间: [
          { required: true, message: '请选择参加工作时间', trigger: 'change' }
        ],
        进入单位时间: [
          { required: true, message: '请选择进入单位时间', trigger: 'change' }
        ],
        进入方式: [
          { required: true, message: '请选择进入方式', trigger: 'change' }
        ],
        人员类别: [
          { required: true, message: '请选择人员类别', trigger: 'change' }
        ],
        招聘方式: [
          { required: true, message: '请选择招聘方式', trigger: 'change' }
        ],
        来源类型: [
          { required: true, message: '请选择来源类型', trigger: 'change' }
        ],
        试用期限: [
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
  methods: {
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
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
