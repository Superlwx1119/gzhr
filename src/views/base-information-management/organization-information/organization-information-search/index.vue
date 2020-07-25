<template>
  <!--单位信息查询-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="7">
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
          <template slot="主管部门">
            <Department v-model="queryForm.主管部门" />
          </template>
          <template slot="行业代码">
            <Industry v-model="queryForm.行业代码" @input="handleSelectChange" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">单位信息列表</span>
        <!-- <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="calculate">计算</el-button>
        </div> -->
      </div>
      <template>
        <!-- <List :is-border="true" :is-index="true" :is-selection="true" :columns="firstTableColumns" :operates="tableOperates" :data="firstTableData" /> -->
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="{row}">
            <el-button type="text" @click="getDetail(row.aab001)">详情</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
    <DetailDialog v-model="isShowDetail" :detail-info="detailInfo" dialog-title="单位信息查看" />
  </div>
</template>

<script>
import { queryCorpList, queryCorpDetail } from '@/api/BaseInformation/OrganizationInformationManagement/AddOrganizationApply'
import FormItems from '@/views/components/PageLayers/form-items'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import DetailDialog from '@/views/components/DetailDialog/index'
import pageHandle from '@/mixins/pageHandle'
import OrganizationLevel from '@/components/Select/OrganizationLevel'
import OrganizationType from '@/components/Select/OrganizationType'
import OrganizationName from '@/components/Select/OrganizationName'
import IfElseJoin from '@/components/Select/IfElseJoin'
import Department from '@/components/Select/Department'
import Industry from '@/components/Select/Industry'
export default {
  name: 'OrganizationInformationSearch',
  components: { Industry, FormItems, NormalLayer, DetailDialog, OrganizationLevel, OrganizationType, Department, OrganizationName, IfElseJoin },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      detailInfo: {},
      loading: false,
      isShowDetail: false,
      reportVisible: false,
      itemsDatas: [
        // { label: '年度', prop: '年度1', type: 'dateYear' },
        { label: '单位', prop: '单位', type: 'custom' },
        { label: '单位类型', prop: '单位类型', type: 'custom' },
        { label: '是否参公', prop: '是否参公', type: 'custom' },
        { label: '单位级别', prop: '单位级别', type: 'custom' },
        { label: '组织机构代码', prop: '组织机构代码', type: 'input' },
        { label: '主管部门', prop: '主管部门', type: 'custom' },
        { label: '行业代码', prop: '行业代码', type: 'custom' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '单位编码', prop: 'aab001' },
        { label: '单位名称', prop: 'aab069' },
        { label: '社会信用代码', prop: 'c' },
        { label: '单位类型', prop: 'aab019' },
        { label: '是否参公', prop: 'rb0195' },
        { label: '主管部门', prop: 'aab023' },
        { label: '行业代码', prop: 'aab022' },
        { label: '编制数', prop: 'rb0705' },
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
    search() {
      const form = Object.assign(this.queryForm, { pageNum: this.pageInfo.pageNum, pageSize: this.pageInfo.pageSize })
      this.$search(queryCorpList, form)
    },
    handleSave() {
      this.$msgSuccess('保存成功！')
    },
    getDetail(id) {
      queryCorpDetail({ id: id }).then(res => {
        this.detailInfo = res.data
        this.isShowDetail = true
      })
    },
    handleSelectChange(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style scoped lang="scss">
/deep/ .el-table .el-table__body-wrapper{
    z-index: 0;
  }</style>
