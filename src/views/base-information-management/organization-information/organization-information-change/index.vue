<template>
  <!--单位信息变更记录-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="3">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位">
            <OrganizationName v-model="queryForm.单位" />
          </template>
          <template slot="信息项">
            <InformationOptions v-model="queryForm.信息项" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">单位信息变更记录</span>
      </div>
      <template>
        <my-table-view :border="true" :max-cloumns="20" :columns="columns" :data="tableData" />
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <DetailDialog v-model="isShowDetail" :operation="operation" dialog-title="单位信息查看" />
  </div>
</template>

<script>
import { queryChangeCorpList } from '@/api/BaseInformation/OrganizationInformationManagement/AddOrganizationApply'
import FormItems from '@/views/components/PageLayers/form-items'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import DetailDialog from '@/views/components/DetailDialog/index'
import InformationOptions from '@/components/Select/InformationOptions'
import OrganizationName from '@/components/Select/OrganizationName'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'NewOrganizationApply',
  components: { FormItems, NormalLayer, DetailDialog, InformationOptions, OrganizationName },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      isShowDetail: false,
      reportVisible: false,
      operation: 'detail',
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      itemsDatas: [
        // { label: '年度', prop: '年度1', type: 'dateYear' },
        { label: '单位', prop: '单位', type: 'custom' },
        // { label: '信息项', prop: '信息项', type: 'custom' },
        { label: '变更时间', prop: '变更时间', type: 'dateRange' }
      ],
      columns: [
        // { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '单位名称', prop: 'aab069' },
        { label: '信息项', prop: 'b' },
        { label: '变更前', prop: 'c' },
        { label: '变更后', prop: 'd' },
        { label: '是否参公', prop: 'e' },
        { label: '变更时间', prop: 'f' }
      ],
      tableData: []
    }
  },
  computed: {},
  watch: {},
  created() {
    this.search()
  },
  mounted() {
  },
  methods: {
    pageChange(data) {
      this.pageInfo = data.pagination
      this.search()
    },
    showDialog(type) {
      this.operation = type
      this.isShowDetail = true
    },
    search() {
      const form = Object.assign(this.queryForm, { pageNum: this.pageInfo.pageNum, pageSize: this.pageInfo.pageSize })
      this.$search(queryChangeCorpList, form)
    },
    deleteRow(row) {
      this.$msgConfirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$msgSuccess('删除成功')
      }).catch(() => {
        this.$msgInfo('已取消删除')
      })
    },
    handleSave() {
      this.$msgSuccess('保存成功！')
    },
    calculate() { this.reportVisible = true }
  }
}
</script>

<style scoped lang="scss">
  /deep/ .el-table .el-table__body-wrapper{
    z-index: 0;
  }
</style>
