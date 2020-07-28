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
    <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
      <template slot="operation" slot-scope="{row}">
        <el-button type="text" @click="showAdd(row)">下一步</el-button>
      </template>
    </my-table-view>
    <Pagination :data="pageInfo" @refresh="pageChange" />

    <!-- <span slot="footer" class="dialog-footer">
      <el-button type="primary">保存</el-button>
      <el-button @click="closeDialog">关闭</el-button>
    </span> -->
    <!-- 下一步新增 -->
    <AddForm ref="addForm" v-model="isShowAddForm" :operation="operation" dialog-title="岗位首次聘用新增" @cloeseParent="cloeseParent" />
  </form-dialog>
</template>

<script>
import { queryPostPerson } from '@/api/JobsSettingManagement/hire'
import AddForm from './addInformation'
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
    }
  },
  data() {
    return {
      operation: 'add',
      queryForm: {},
      activeName: '1',
      isShowAddForm: false,
      loading: false,
      pageInfo: {
        pageNum: 1,
        pageSize: 15
      },
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'aac003' },
        { label: '身份证号码', prop: 'aac002' },
        { label: '学位及学历', prop: 'aac006' },
        { label: '性别', prop: 'aac004' },
        { label: '现聘职务', prop: 'aab023' },
        { label: '职称、技术等级或职业资格名称', prop: 'rb0705' },
        { label: '职称、技术等级或职业资格获得时间', prop: 'aac007' },
        { label: '现聘岗位类别', prop: 'rc0301' },
        { label: '现岗位名称及等级', prop: 'rc0301' },
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
    queryPostPerson(arb261) {
      const form = {
        aab001: 1282,
        arb261: arb261,
        pageNum: this.pageInfo.pageNum,
        pageSize: this.pageInfo.pageSize
      }
      this.$search(queryPostPerson, form)
    },
    reset() {
      // this.$refs.queryForm.resetFields()
    },
    showAdd(row) {
      this.isShowAddForm = true
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
