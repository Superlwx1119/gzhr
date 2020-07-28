<template>
  <!-- 管理岗位聘用表 -->
  <div>
    <div slot="table-title" class="box-header handle">
      <span class="box-title">管理岗位聘用表</span>
      <div slot="title-btns" class="box-tools">
        <el-button type="primary" @click="showDialog">新增</el-button>
      </div>
    </div>
    <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
      <template slot="operation">
        <el-button type="text" @click="isShowDetail = true">详情</el-button>
        <el-button type="text">编辑</el-button>
        <el-button type="text" class="delete">删除</el-button>
      </template>
    </my-table-view>
    <AddPerson ref="addForm" v-model="isShowAdd" :operation="operation" dialog-title="岗位首次聘用新增" @cloeseParent="cloeseParent" />
    <RowDetail ref="detailForm" v-model="isShowDetail" :operation="operation" dialog-title="岗位首次聘用新增" @cloeseParent="cloeseParent" />
  </div>
</template>

<script>
import AddPerson from './addPerson'
import RowDetail from './rowDetail'
export default {
  components: {
    AddPerson,
    RowDetail
  },
  props: {
    addFormData: {
      type: Object,
      default: function() { return {} }
    },
    arb261: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      addForm: {},
      rules: {},
      loading: false,
      operation: 'add',
      isShowAdd: false,
      isShowDetail: false,
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '状态', prop: 'aab069' },
        { label: '姓名', prop: 'c' },
        { label: '性别', prop: 'aab019' },
        { label: '出生年月', prop: 'rb0195' },
        { label: '民族', prop: 'rb0195' },
        { label: '身份证号', prop: 'rb0195' },
        { label: '政治面貌', prop: 'rb0195' },
        { label: '文化程度', prop: 'rb0195' },
        { label: '参加工作时间', prop: 'rb0195' },
        { label: '人员类别', prop: 'rb0195' },
        { label: '岗位名称', prop: 'rb0195' },
        { label: '岗位等级', prop: 'rb0195' },
        { label: '兼任岗位等级', prop: 'rb0195' },
        { label: '聘用时间', prop: 'rb0195' },
        { label: '操作', type: 'operation', fixed: 'right', width: '140px' }
      ],
      tableData: [{ aab019: '张三', aab022: '12312312313' }]
    }
  },
  watch: {
    addFormData: function(newValue) {
      this.addForm = newValue
      this.$emit('input', this.addForm)
    }
  },
  methods: {
    cloeseParent() {
      this.$emit('cloeseParent')
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    showDialog() {
      this.isShowAdd = true
      this.$refs.addForm.queryPostPerson(this.arb261)
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    save(formName) {}
  }
}
</script>

<style lang="scss" scoped>
  /deep/ .el-table .el-table__body-wrapper{
    z-index: 0;
  }
</style>
