<template>
  <!-- 特岗聘用信息 -->
  <div>
    <div slot="table-title" class="box-header handle">
      <span class="box-title">特岗聘用信息</span>
    </div>
    <el-form ref="addForm" :model="addForm" label-width="105px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="姓名" prop="姓名">
            <el-input v-model="addForm.姓名" @input="handleSelectChange" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item>
            <el-button style="float:right" type="primary">查询</el-button>
            <el-button style="float:right;margin-right:10px" type="primary">新增</el-button>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
    <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
      <template slot="operation">
        <el-button type="text">详情</el-button>
        <el-button type="text">编辑</el-button>
        <el-button type="text">打印</el-button>
        <el-button type="text" class="delete">删除</el-button>
      </template>
    </my-table-view>
  </div>
</template>

<script>
export default {
  components: {
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
      rules: {},
      loading: false,
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'c' },
        { label: '性别', prop: 'aab019' },
        { label: '出生年月', prop: 'rb0195' },
        { label: '身份证号', prop: 'rb0195' },
        { label: '政治面貌', prop: 'rb0195' },
        { label: '学历', prop: 'rb0195' },
        { label: '岗位等级', prop: 'rb0195' },
        { label: '聘用开始时间', prop: 'rb0195' },
        { label: '聘用结束时间', prop: 'rb0195' },
        { label: '聘用理由', prop: 'rb0195' },
        { label: '核销日期', prop: 'rb0195' },
        { label: '操作', type: 'operation', fixed: 'right', width: '180px' }
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
    reset(formName) {
      this.$refs[formName].resetFields()
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
