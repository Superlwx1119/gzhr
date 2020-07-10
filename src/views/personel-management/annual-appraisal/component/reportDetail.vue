<template>
  <div class="box">
    <div class="box-body">
      <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
        <template slot="operation" slot-scope="{row}">
          <el-button type="text" @click="doAudit(row)">查看</el-button>
        </template>
      </my-table-view>
      <Pagination :data="pageInfo" @refresh="pageChange" />
      <!-- 查看详情 -->
      <reportIndex v-model="isShowAudit" :detail-info="detailInfo" />
    </div>
  </div>
</template>

<script>
import reportIndex from './reportIndex'
export default {
  components: {
    reportIndex
  },
  props: {
    detailInfo: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    return {
      queryForm: {},
      loading: false,
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      columns: [
        // { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '单位名称', prop: 'aab069' },
        { label: '考核状态', prop: 'c' },
        { label: '考核年度', prop: 'aab019' },
        { label: '优秀比例', prop: 'rb0195' },
        { label: '合格比例', prop: 'aab022' },
        { label: '基本合格比例', prop: 'aab023' },
        { label: '不合格比例', prop: 'aab023' }
      ],
      tableData: [1, 2, 3, 4, 4, 5, 2]
    }
  },
  watch: {
    detailInfo: function(newValue) {
      this.queryForm = newValue
    }
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    },
    pageChange(data) {
      this.pageInfo = data.pagination
    },
    doAudit(row) {
      this.detailInfo = row
      this.isShowAudit = true
    },
    save(formName) {}
  }
}
</script>

<style lang="scss" scoped>
  .appraisalDepartment{
    display: flex;
  }
</style>
