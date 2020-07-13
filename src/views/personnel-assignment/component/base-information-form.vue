<template>
  <div class="HiringApply">
    <!-- 基本信息表单 -->
    <div class="box-header handle">
      <span class="box-title">基本信息表单</span>
    </div>
    <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
      <el-row :gutter="12">
        <el-col :span="8">
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
        <el-col :span="16">
          <el-row :gutter="12">
            <el-col :span="12">
              <el-form-item label="姓名" prop="姓名">
                <el-input v-model="addForm.姓名" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="身份证号" prop="身份证号">
                <el-input v-model="addForm.身份证号" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="性别" prop="性别">
                <el-radio-group v-model="addForm.性别" @input="handleSelectChange">
                  <el-radio :label="3">男</el-radio>
                  <el-radio :label="6">女</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="出生年月" prop="出生年月">
                <el-date-picker
                  v-model="addForm.出生年月"
                  type="date"
                  value-format="yyyyMMdd"
                  style="width:100%;height:100%"
                  placeholder="选择日期"
                  @input="handleSelectChange"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="籍贯" prop="籍贯">
                <el-input v-model="addForm.籍贯" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="出生地" prop="出生地">
                <el-input v-model="addForm.出生地" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="户口所在地" prop="户口所在地">
                <National v-model="addForm.户口所在地" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="民族" prop="民族">
                <National v-model="addForm.民族" @input="handleSelectChange" />
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
              <el-form-item label="政治面貌" prop="政治面貌">
                <PoliticsStatus v-model="addForm.政治面貌" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="专业技术职务" prop="专业技术职务">
                <TechnicalPosition v-model="addForm.专业技术职务" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="健康状况" prop="健康状况">
                <HealthType v-model="addForm.健康状况" @input="handleSelectChange" />
              </el-form-item>
            </el-col>

          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import National from '@/components/Select/National'
import HealthType from '@/components/Select/HealthType'
import TechnicalPosition from '@/components/Select/TechnicalPosition'
import PoliticsStatus from '@/components/Select/PoliticsStatus'
export default {
  components: { National, PoliticsStatus, HealthType, TechnicalPosition },
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
      imageUrl: '',
      rules: {
        姓名: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        身份证号: [{ required: true, message: '请输入身份证号', trigger: 'blur' }],
        性别: [{ required: true, message: '请选择性别', trigger: 'change' }],
        籍贯: [{ required: true, message: '请输入籍贯', trigger: 'blur' }],
        出生地: [{ required: true, message: '请输入出生地', trigger: 'blur' }],
        户口所在地: [{ required: true, message: '请输入户口所在地', trigger: 'blur' }],
        民族: [{ required: true, message: '请选择民族', trigger: 'change' }],
        参加工作时间: [{ required: true, message: '请选择参加工作时间', trigger: 'change' }],
        政治面貌: [{ required: true, message: '请选择政治面貌', trigger: 'change' }],
        专业技术职务: [{ required: true, message: '请选择专业技术职务', trigger: 'change' }],
        出生年月: [{ required: true, message: '请选择出生年月', trigger: 'change' }],
        健康状况: [{ required: true, message: '请选择健康状况', trigger: 'change' }]
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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    handleSelectChange(v) {
      this.$emit('input', v)
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

<style scoped lang="scss">
  .HiringApply{
    >div {
      height: 100%;
    }
  }
  /deep/ .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-left: 88px;
  }
  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  /deep/ .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 288px;
    height: 288px;
    line-height: 288px;
    text-align: center;
  }
  /deep/ .avatar {
    width: 288px;
    height: 288px;
    display: block;
  }
</style>
