<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    width="1200px"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-body">
        <div slot="table-title" class="box-header handle">
          <span class="box-title">人员基础信息</span>
          <div slot="title-btns" class="box-tools">
            <el-button type="primary">新增</el-button>
          </div>
        </div>
        <el-form ref="addForm" :model="addForm" label-width="105px" style="margin-bottom:10px">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-form-item label="姓名" prop="aac003">
                <el-input v-model="addForm.aac003" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="身份证好" prop="aac002">
                <el-input v-model="addForm.aac002" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别" prop="aac004">
                <el-input v-model="addForm.aac004" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="学历" prop="aac006">
                <el-input v-model="addForm.aac006" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="学位" prop="aab069">
                <OrganizationName v-model="addForm.aab069" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="人员类别" prop="aac007">
                <el-input v-model="addForm.aac007" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="应聘岗位" prop="单位咨询电话">
                <el-input v-model="addForm.单位咨询电话" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="部门名称" prop="rc0903">
                <JobsLevel v-model="addForm.rc0903" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="年龄" prop="rc0908">
                <el-input v-model="addForm.rc0908" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="所学专业" prop="rc0904">
                <el-input v-model="addForm.rc0904" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="工作经历" prop="rc0909">
                <el-input v-model="addForm.rc0909" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注" prop="rc0907">
                <el-input v-model="addForm.rc0907" type="textarea" :rows="4" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="box-header handle">
          <span class="box-title">业务材料</span>
        </div>
        <!-- <List :is-border="true" :is-index="true" :columns="columns" :operation="tableOperates" :data="tableData" /> -->
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import OrganizationName from '@/components/Select/OrganizationName'
import JobsLevel from '@/components/Select/JobsLevel'
import { info, retire, retireChange } from '@/api/BaseInformation/PersonalInformationManagement/DimissionAudit'
export default {
  components: {
    OrganizationName,
    JobsLevel
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    detailInfo: {
      type: Object,
      default: function() { return {} }
    },
    dialogTitle: {
      type: String,
      default: '结果申报信息'
    },
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    operation: {
      type: String,
      default: 'detail'
    }
  },
  data() {
    return {
      addForm: {},
      activeName: '1',
      isShowAdd: false,
      loading: false,
      detailId: '',
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '招聘单位名称', prop: 'aab069' },
        { label: '职位名称', prop: 'c' },
        { label: '主管部门名称', prop: 'aab019' },
        { label: '岗位类别', prop: 'rb0195' },
        { label: '岗位等级', prop: 'aab023' },
        { label: '职业代码', prop: 'rb0705' },
        { label: '招聘计划', prop: 'aab022' },
        { label: '职位描述', prop: 'i' },
        { label: '面试入围比例', prop: 'k' },
        { label: '专业工作经历', prop: 'k' },
        { label: '学 历', prop: 'k' },
        { label: '学 位', prop: 'k' },
        { label: '其他条件', prop: 'k' },
        { label: '考试类别', prop: 'k' },
        { label: '操作', type: 'operation', fixed: 'right', width: '220px' }
      ],
      tableData: []
    }
  },
  methods: {
    info(row) {
      row.aab019 = row.aab019.toString()
      this.addForm = row
    },
    retireChange() {
      this.loading = true
      retireChange(Object.assign(this.addForm, { arc081: this.detailId })).then(res => {
        this.loading = false
        if (res.code === 0) {
          this.$msgSuccess(res.message)
          this.closeDialog()
          this.cloeseParent()
        }
      })
    },
    getDetail(row) {
      this.loading = true
      this.detailId = row.arc081
      info({ arc081: row.arc081 }).then(res => {
        this.loading = false
        if (res.code === 0) {
          if (res.data.aab019)res.data.aab019 = res.data.aab019.toString()
          if (res.data.rc0902)res.data.rc0902 = res.data.rc0902.toString()
          this.addForm = res.data
        }
      }).catch(() => {
        this.loading = false
      })
    },
    retire() {
      this.loading = true
      retire(this.addForm).then(res => {
        this.loading = false
        if (res.code === 0) {
          this.$msgSuccess(res.message)
          this.closeDialog()
          this.cloeseParent()
        }
      })
    },
    cloeseParent() {
      this.$emit('cloeseParent', false)
    },
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    reset() {
      this.detailId = ''
      this.$refs.addForm.resetFields()
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
