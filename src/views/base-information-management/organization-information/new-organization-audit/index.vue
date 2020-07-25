<template>
  <!--新增单位审核-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="8">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位">
            <OrganizationName v-model="queryForm.单位" />
          </template>
          <template slot="单位类型">
            <OrganizationType v-model="queryForm.单位类型" />
          </template>
          <template slot="是否参公">
            <IfElseJoin v-model="queryForm.是否参公" />
          </template>
          <template slot="单位级别">
            <OrganizationLevel v-model="queryForm.单位级别" />
          </template>
          <template slot="主体岗位">
            <RetroMark v-model="queryForm.主体岗位" />
          </template>
          <template slot="主管部门">
            <OrganizationName v-model="queryForm.主管部门" />
          </template>
          <template slot="行业代码">
            <Industry v-model="queryForm.行业代码" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">新增单位审核列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="showDialog('audit')">批量审核通过</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation">
            <el-button type="text" @click="showDialog('audit')">审核</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
    <DetailDialog v-model="isShowDetail" :operation="operation" dialog-title="单位信息查看" />
  </div>
</template>

<script>
import { queryCorpList } from '@/api/BaseInformation/OrganizationInformationManagement/AddOrganizationApply'
import FormItems from '@/views/components/PageLayers/form-items'
import Industry from '@/components/Select/Industry'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import DetailDialog from '@/views/components/DetailDialog/index'
import OrganizationLevel from '@/components/Select/OrganizationLevel'
import OrganizationType from '@/components/Select/OrganizationType'
import OrganizationName from '@/components/Select/OrganizationName'
import IfElseJoin from '@/components/Select/IfElseJoin'
import RetroMark from '@/components/Select/RetroMark'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'NewOrganizationApply',
  components: { Industry, FormItems, NormalLayer, DetailDialog, OrganizationLevel, OrganizationType, RetroMark, OrganizationName, IfElseJoin },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      isShowDetail: false,
      reportVisible: false,
      operation: 'detail',
      itemsDatas: [
        // { label: '年度', prop: '年度1', type: 'dateYear' },
        { label: '单位', prop: '单位', type: 'custom' },
        { label: '是否参公', prop: '是否参公', type: 'custom' },
        { label: '单位级别', prop: '单位级别', type: 'custom' },
        { label: '主管部门', prop: '主管部门', type: 'custom' },
        { label: '主体岗位', prop: '主体岗位', type: 'custom' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '单位编码', prop: 'a' },
        { label: '单位名称', prop: 'b' },
        { label: '社会信用代码', prop: 'c' },
        { label: '单位类型', prop: 'd' },
        { label: '是否参公', prop: 'e' },
        { label: '主管部门', prop: 'f' },
        { label: '行业代码', prop: 'g' },
        { label: '编制数', prop: 'h' },
        { label: '法人代表', prop: 'i' },
        { label: '联系人', prop: 'k' },
        { label: '联系电话', prop: 'l' },
        { label: '地址', prop: 'm' },
        { label: '批准编制日期', prop: 'n' },
        { label: '批准编制文号', prop: 'o' },
        { label: '法人单位编码', prop: 'p' },
        { label: '单位主要工作职责', prop: 'r' },
        { label: '操作', type: 'operation', fixed: 'right', width: '120px' }

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
    showDialog(type) {
      this.operation = type
      this.isShowDetail = true
    },
    search() {
      const form = Object.assign(this.queryForm, { pageNum: this.paginationQuery.pageNum, pageSize: this.paginationQuery.pageSize, aae016: '2' })
      this.$search(queryCorpList, form)
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
