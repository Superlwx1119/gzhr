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
        <el-tabs type="border-card">
          <el-tab-pane label="面试方案信息">
            <el-form ref="addForm" :model="addForm" label-width="105px" style="margin-bottom:10px">
              <el-row :gutter="12">
                <el-col :span="24">
                  <el-form-item label="面试方案名称" prop="aac003">
                    <el-input v-model="addForm.aac003" @input="handleSelectChange" />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="公开招聘方案名称" prop="aac002">
                    <el-input v-model="addForm.aac002" @input="handleSelectChange" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="单位名称" prop="aac004">
                    <el-input v-model="addForm.aac004" @input="handleSelectChange" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="主管部门" prop="aac006">
                    <el-input v-model="addForm.aac006" @input="handleSelectChange" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="专技岗位计划招聘数" prop="aab069">
                    <OrganizationName v-model="addForm.aab069" @input="handleSelectChange" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="工勤岗位计划招聘数" prop="aac007">
                    <el-input v-model="addForm.aac007" @input="handleSelectChange" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="管理岗位计划招聘数" prop="单位咨询电话">
                    <el-input v-model="addForm.单位咨询电话" @input="handleSelectChange" />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="处理记录" prop="rc0907">
                    <el-input v-model="addForm.rc0907" type="textarea" :rows="4" @input="handleSelectChange" />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="面试方案信息">面试方案信息</el-tab-pane>
        </el-tabs>

      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary">保存</el-button>
      <el-button type="primary">申报</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>
import OrganizationName from '@/components/Select/OrganizationName'
export default {
  components: {
    OrganizationName
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
      default: '面试方案需求申报'
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
