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
        <el-form ref="addForm" :model="addForm" label-width="105px" style="margin-bottom:10px">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-form-item label="姓名" prop="姓名">
                <el-input v-model="addForm.姓名" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="证件号码" prop="证件号码">
                <el-input v-model="addForm.证件号码" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别" prop="性别">
                <el-input v-model="addForm.性别" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出生日期" prop="出生日期">
                <el-input v-model="addForm.出生日期" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="单位名称" prop="单位名称">
                <el-input v-model="addForm.单位名称" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="参加工作时间" prop="参加工作时间">
                <el-input v-model="addForm.参加工作时间" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休时人员类别" prop="退休时人员类别">
                <el-input v-model="addForm.退休时人员类别" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休时级别" prop="退休时级别">
                <el-input v-model="addForm.退休时级别" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休时任职务" prop="退休时任职务">
                <el-input v-model="addForm.退休时任职务" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休后管理单位" prop="退休后管理单位">
                <el-input v-model="addForm.退休后管理单位" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休日期" prop="退休日期">
                <el-date-picker
                  v-model="addForm.退休日期"
                  type="date"
                  value-format="yyyyMMdd"
                  style="width:100%;height:100%"
                  placeholder="选择日期"
                  @input="handleSelectChange"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休时年龄" prop="退休时年龄">
                <el-input v-model="addForm.退休时年龄" disabled />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退休批准号" prop="退休批准号">
                <el-input v-model="addForm.退休批准号" />
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item label="退休批准单位" prop="退休批准单位">
                <el-input v-model="addForm.退休批准单位" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注" prop="备注">
                <el-input v-model="addForm.备注" type="textarea" :rows="4" />
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

    <span slot="footer" class="dialog-footer">
      <el-button type="primary">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>
</template>

<script>

export default {
  components: {
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
      columns: [
        { label: '附件数', prop: '附件数', align: 'center' },
        { label: '材料名称', prop: '材料名称', align: 'center' },
        { label: '材料说明', prop: '材料说明', align: 'center', width: '300px' },
        { label: '是否必须', prop: '是否必须', align: 'center' }
      ],
      tableOperates: {
        width: '120px',
        fixed: 'right',
        list: [
          { show: true, label: '上传', type: 'text', method: () => {
          } }
        ]
      },
      tableData: [
        { 单位编码: '单位编码', 单位名称: '单位名称', 社会信用代码: '社会信用代码', 单位类型: '单位类型', 是否参公: '是否参公', 主管部门: '主管部门', 行业代码: '行业代码' },
        { 单位编码: '单位编码', 单位名称: '单位名称', 社会信用代码: '社会信用代码', 单位类型: '单位类型', 是否参公: '是否参公', 主管部门: '主管部门', 行业代码: '行业代码' },
        { 单位编码: '单位编码', 单位名称: '单位名称', 社会信用代码: '社会信用代码', 单位类型: '单位类型', 是否参公: '是否参公', 主管部门: '主管部门', 行业代码: '行业代码' }
      ]
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    reset() {
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
