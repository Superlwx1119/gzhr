<template>
  <!-- 业务附件 -->
  <div>
    <div slot="table-title" class="box-header handle">
      <span class="box-title">业务附件</span>
      <div slot="title-btns" class="box-tools">
        <el-button type="primary">附件上传</el-button>
      </div>
    </div>
    <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
      <template slot="operation">
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
      addForm: {},
      rules: {},
      loading: false,
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '附件', prop: 'aab069' },
        { label: '材料名称', prop: 'c' },
        { label: '材料说明', prop: 'aab019' },
        { label: '是否必须', prop: 'rb0195' },
        { label: '操作', type: 'operation', fixed: 'right', width: '250px' }
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

</style>
