<template>
  <form-dialog title="体检项目修改" :is-show="visible" width="720px" size="middle" @update:isShow="updateIsShow">
    <el-form ref="editForm" :model="editForm" :rules="rules" label-width="105px">
      <div class="box">
        <div class="box-body">
          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item label="项目编码：" prop="projectNo">
                <project-no v-model="editForm.projectNo" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目名称：" prop="projectName">
                <project-name v-model="editForm.projectName" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="五笔编码：" prop="wubi">
                <el-input v-model="editForm.wubi" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="拼音编码：" prop="pinyin">
                <el-input v-model="editForm.pinyin" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="标准单价：" prop="price">
                <el-input v-model="editForm.price" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="标准单位：" prop="unit">
                <el-input v-model="editForm.unit" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="生效时间：" prop="beginDate">
                <el-date-picker v-model="editForm.beginDate" type="date" style="width: 100%;" placeholder="选择日期" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="失效时间：" prop="endDate">
                <el-date-picker v-model="editForm.endDate" type="date" style="width: 100%;" placeholder="选择日期" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="统计类型：" prop="type">
                <statistical-type v-model="editForm.type" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注：" prop="remark">
                <el-input v-model="editForm.remark" type="textarea" :rows="4" placeholder="请输入" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel('editForm')">取消</el-button>
      <el-button type="primary" @click="submit('editForm')">保存</el-button>
    </span>
  </form-dialog>
</template>

<script>
import ProjectNo from '@/components/Select/health-manage/ProjectNo'
import ProjectName from '@/components/Select/health-manage/ProjectName'
import StatisticalType from '@/components/Select/health-manage/StatisticalType'
export default {
  name: 'Add',
  components: {
    ProjectNo,
    ProjectName,
    StatisticalType
  },
  mixins: [],
  props: {
    show: { type: Boolean, default: () => false },
    form: { type: Object, default: () => {} }
  },
  data() {
    return {
      visible: this.show,
      editForm: this.form,
      rules: {
        projectName: { required: true, message: '请选择项目名称', trigger: 'change' },
        projectNo: { required: true, message: '请选择项目编码', trigger: 'change' },
        beginDate: { required: true, message: '请选择生效时间', trigger: 'change' },
        type: { required: true, message: '请选择统计类型', trigger: 'change' },
        wubi: { required: true, message: '请输入五笔编码', trigger: 'blur' },
        pinyin: { required: true, message: '请输入拼音编码', trigger: 'blur' }
      }
    }
  },
  computed: {
  },
  watch: {
    show: function(newVal, oldVal) {
      this.visible = this.show
    },
    form: function(newVal, oldVal) {
      this.editForm = this.form
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    updateIsShow(v) {
      this.$emit('update:show', v)
    },
    resetForm() {
      this.$refs.editForm.resetFields()
    },
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.cancel()
          this.$msgSuccess('修改成功!')
        } else {
          return false
        }
      })
    },
    cancel() {
      this.visible = false
      this.$refs.editForm.clearValidate()
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>

</style>
