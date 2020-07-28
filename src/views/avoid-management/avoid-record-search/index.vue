<template>
  <!--回避备案查询-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="7">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位名称">
            <OrganizationName v-model="queryForm.单位名称" />
          </template>
          <template slot="回避类型">
            <AvoidType v-model="queryForm.回避类型" />
          </template>
          <template slot="主体岗位">
            <MainJobs v-model="queryForm.主体岗位" />
          </template>
          <template slot="备案类型">
            <MainJobs v-model="queryForm.备案类型" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">回避备案查询列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary">导出数据</el-button>
        </div>
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation">
            <el-button type="text" @click="isShowAdd = true">详情</el-button>
            <el-button type="text" @click="isShowAdd = true">打印</el-button>
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <!-- 新增 -->
    <Add v-model="isShowAdd" :operation="operation" :dialog-title="dialogTitle" />
  </div>
</template>

<script>
import { list } from '@/api/BaseInformation/PersonalInformationManagement/index'
import Add from '../dialog/add'
import FormItems from '@/views/components/PageLayers/form-items'
import OrganizationName from '@/components/Select/OrganizationName'
import AvoidType from '@/components/Select/AvoidType'
import MainJobs from '@/components/Select/MainJobs'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'TrainingManagement',
  components: { FormItems, NormalLayer, OrganizationName, AvoidType, MainJobs, Add },
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
      detailName: '',
      detailInfo: {},
      loading: false,
      isShowDetail: false,
      isShowAdd: false,
      isShowEdit: false,
      isShowTheDetail: false,
      reportVisible: false,
      operation: 'detail',
      itemsDatas: [
        // { label: '年度', prop: '年度1', type: 'dateYear' },
        { label: '单位名称', prop: '单位名称', type: 'custom' },
        { label: '主体岗位', prop: '主体岗位', type: 'custom' },
        { label: '流程状态', prop: '流程状态', type: 'dateRange' },
        { label: '回避类型', prop: '回避类型', type: 'custom' },
        { label: '备案类型', prop: '备案类型', type: 'input' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '单位名称', prop: 'aab069' },
        { label: '备案人', prop: 'c' },
        { label: '身份证号码', prop: 'aab019' },
        { label: '主体岗位', prop: 'rb0195' },
        { label: '回避事项', prop: 'aab022' },
        { label: '备案类型', prop: 'aab023' },
        { label: '流程状态', prop: 'rb0705' },
        { label: '培训总时长(时)', prop: 'k' },
        { label: '操作', type: 'operation', fixed: 'right', width: '250px' }
      ],
      tableData: [],
      dialogTitle: '回避备案'
    }
  },
  computed: {},
  watch: {},
  created() {
    // this.search()
  },
  mounted() {
  },
  methods: {
    getDetail(row) {
      this.detailName = row.aab019
      this.isShowDetail = true
    },
    search() {
      const form = Object.assign(this.queryForm, { pageNum: this.pageInfo.pageNum, pageSize: this.pageInfo.pageSize })
      this.$search(list, form)
    },
    pageChange(data) {
      this.pageInfo = data.pagination
      this.search()
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
