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
          <span class="box-title">基本信息</span>
          <!-- <div slot="title-btns" class="box-tools">
            <el-button type="primary">新增</el-button>
          </div> -->
        </div>
        <el-form ref="addForm" :model="addForm" label-width="105px" style="margin-bottom:10px">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-form-item label="单位名称" prop="aac003">
                <el-input v-model="addForm.aac003" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="方案名称" prop="aac002">
                <el-input v-model="addForm.aac002" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="年度" prop="aac004">
                <el-input v-model="addForm.aac004" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="主管单位" prop="aac006">
                <el-input v-model="addForm.aac006" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="招聘类型" prop="aab069">
                <OrganizationName v-model="addForm.aab069" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单位网址" prop="aac007">
                <el-input v-model="addForm.aac007" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单位咨询电话" prop="单位咨询电话">
                <el-input v-model="addForm.单位咨询电话" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单位纪检监督电话" prop="rc0903">
                <JobsLevel v-model="addForm.rc0903" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="主管单位网址" prop="rc0908">
                <el-input v-model="addForm.rc0908" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="主管单位咨询电话" prop="rc0904">
                <el-input v-model="addForm.rc0904" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="主管单位纪检监督电话" prop="rc0902">
                <el-date-picker
                  v-model="addForm.rc0902"
                  type="date"
                  value-format="yyyyMMdd"
                  style="width:100%;height:100%"
                  placeholder="选择日期"
                  @input="handleSelectChange"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="管理目标岗位数" prop="rc0909">
                <el-input v-model="addForm.rc0909" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="专技目标岗位数" prop="rc0905">
                <el-input v-model="addForm.rc0905" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="工勤目标岗位数" prop="rc0906">
                <el-input v-model="addForm.rc0906" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="管理现在岗人数" prop="rc0906">
                <el-input v-model="addForm.rc0906" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="专技现在岗人数" prop="rc0906">
                <el-input v-model="addForm.rc0906" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="工勤现在岗人数" prop="rc0906">
                <el-input v-model="addForm.rc0906" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="管理岗位空缺数" prop="rc0906">
                <el-input v-model="addForm.rc0906" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="专技岗位空缺数" prop="rc0906">
                <el-input v-model="addForm.rc0906" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="工勤岗位空缺数" prop="rc0906">
                <el-input v-model="addForm.rc0906" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="管理岗位拟招聘岗位情况" prop="rc0906">
                <el-input v-model="addForm.rc0906" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="专技岗位拟招聘岗位情况" prop="rc0906">
                <el-input v-model="addForm.rc0906" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="工勤岗位拟招聘岗位情况" prop="rc0906">
                <el-input v-model="addForm.rc0906" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注" prop="rc0907">
                <el-input v-model="addForm.rc0907" type="textarea" :rows="4" @input="handleSelectChange" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="table-title" class="box-header handle">
          <span class="box-title">招聘单位信息表</span>
          <div slot="title-btns" class="box-tools">
            <el-button type="primary" @click="showDialog('add')">新增</el-button>
          </div>
        </div>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="showDialog('edit',scope.row)">详情</el-button>
            <el-button type="text" @click="showDialog('edit',scope.row)">编辑</el-button>
            <el-button type="text" class="delete" @click="showDialog('edit',scope.row)">删除</el-button>
          </template>
        </my-table-view>
        <div class="box-header handle">
          <span class="box-title">业务材料</span>
        </div>
        <!-- <List :is-border="true" :is-index="true" :columns="columns" :operation="tableOperates" :data="tableData" /> -->
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <!-- 新增 -->
      <el-button v-if="operation === 'add'" type="primary" @click="retire">保存</el-button>
      <!-- 修改 -->
      <el-button v-if="operation === 'edit'" type="primary" @click="retireChange">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
    <AddHire v-model="isShowAdd" :dialog-titlee="title " />
  </form-dialog>
</template>

<script>
import OrganizationName from '@/components/Select/OrganizationName'
import JobsLevel from '@/components/Select/JobsLevel'
import { info, retire, retireChange } from '@/api/BaseInformation/PersonalInformationManagement/DimissionAudit'
import AddHire from './addHire'
export default {
  components: {
    OrganizationName,
    JobsLevel,
    AddHire
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
      default: '信息查看'
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
      title: '',
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
      hireOperation: 'add',
      tableData: []
    }
  },
  methods: {
    info(row) {
      row.aab019 = row.aab019.toString()
      this.addForm = row
    },
    showDialog(type, row) {
      this.hireOperation = type
      this.isShowAdd = true
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
