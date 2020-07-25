<template>
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
    <!-- <el-form ref="queryForm" :model="queryForm" label-width="105px" style="margin-bottom:10px">
      <el-row :gutter="12">
        <el-col :md="12" :lg="8" :xl="6">
          <el-form-item label="姓名" prop="姓名">
            <el-input v-model="queryForm.姓名" />
          </el-form-item>
        </el-col>
        <el-col :md="12" :lg="8" :xl="6">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </el-form> -->
    <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
      <template slot="operation" slot-scope="{row}">
        <el-button type="text" @click="showAdd(row)">下一步</el-button>
      </template>
    </my-table-view>
    <Pagination :data="pageInfo" @refresh="pageChange" />

    <span slot="footer" class="dialog-footer">
      <el-button type="primary">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span>
    <!-- 下一步新增 -->
    <AddForm ref="addForm" v-model="isShowAdd" :operation="operation" dialog-title="人员退休登记" @cloeseParent="cloeseParent" />
  </form-dialog>
</template>

<script>
import { canBeList } from '@/api/BaseInformation/PersonalInformationManagement/DimissionAudit'
import AddForm from './edit'
export default {
  components: {
    AddForm
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
      default: 'add'
    }
  },
  data() {
    return {
      queryForm: {},
      activeName: '1',
      isShowAdd: false,
      loading: false,
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '人员姓名', prop: 'aac003' },
        { label: '身份证号码', prop: 'aac002' },
        { label: '性别', prop: 'aac004' },
        { label: '出生日期', prop: 'aac006' },
        { label: '年龄(周岁)', prop: 'aab023' },
        { label: '现状态', prop: 'rb0705' },
        { label: '参加工作时间', prop: 'aac007' },
        { label: '进入本单位时间', prop: 'rc0301' },
        { label: '操作', type: 'operation', fixed: 'right', width: '120px' }
      ],
      tableData: []
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeAll', false)
      this.reset()
    },
    cloeseParent() {
      this.closeDialog()
      this.$emit('search')
    },
    canBeList() {
      this.$search(canBeList)
    },
    reset() {
      this.$refs.queryForm.resetFields()
    },
    showAdd(row) {
      this.isShowAdd = true
      this.$refs.addForm.info(row)
    },
    pageChange(data) {
      this.pageInfo = data.pagination
      this.search()
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style scoped lang="scss">
  /deep/ .el-table .el-table__body-wrapper{
    z-index: 0;
  }
</style>
