<template>
  <section class="tab-component">
    <FormItems :items-datas="itemsDatas" :form-datas="formData">
      <template slot="单位信息1">
        <company-info v-model="formData.单位信息1" />
      </template>
      <el-button>重置</el-button>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">导出</el-button>
      <el-button type="primary">导入模板下载</el-button>
    </FormItems>
    <my-table-view style="height: calc(100% - 83px)!important;" :border="true" :columns="columns" :data="tableData">
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="delete" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </my-table-view>
    <Pagination />
  </section>
</template>

<script>
import CompanyInfo from '@/components/Select/fund-insurance-manage/CompanyInfo'

export default {
  name: 'CompanyMaintenance',
  components: { CompanyInfo },
  mixins: [],
  props: {},
  data() {
    return {
      itemsDatas: [
        { label: '单位信息', prop: '单位信息1', type: 'custom' },
        { label: '批量文件', prop: '批量文件1', type: 'file' }
      ],
      formData: {},
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '单位编码', prop: 'a' },
        { label: '单位名称', prop: 'b' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { 'a': 'CAC414288123' + item, 'b': '统筹区' + item, c: 'xxx', d: 'xxx', e: 'xxx', type: '2' }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    handleDelete() {
      this.$msgConfirm('是否删除？').then(res => {
        this.$msgSuccess('删除成功！')
      }).catch(err => {
        this.$msgInfo(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
