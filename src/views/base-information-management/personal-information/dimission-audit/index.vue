<template>
  <!--离退审核-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="6">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位">
            <OrganizationName v-model="queryForm.单位" />
          </template>
          <template slot="退休前级别">
            <JobsLevel v-model="queryForm.退休前级别" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">离退审核列表</span>
        <!-- <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="isShowAdd = true">新增</el-button>
          <el-button type="primary">数据导入</el-button>
        </div> -->
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="{row}">
            <el-button type="text" @click="showDialog(row)">审核</el-button>
            <!-- <el-button type="text" @click="retireAudit(row,true)">审核通过</el-button>
            <el-button type="text" class="delete" @click="retireAudit(row,false)">审核不通过</el-button> -->
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <!-- 新增 -->
    <!-- <AddDialog v-model="isShowAdd" :detail-info="detailInfo" dialog-title="选择需要退休人员" /> -->
    <!-- 修改 -->
    <!-- <EditDialog v-model="isShowEdit" :detail-info="detailInfo" dialog-title="人员退休登记" /> -->
    <!-- 查看 -->
    <DetailDialog ref="detail" v-model="isShowDetail" :operation="operation" :add-form-data="addForm" dialog-title="人员退休登记" @search="search" />
    <!-- 明细 -->
    <!-- <TheDetail v-model="isShowTheDetail" :detail-info="detailInfo" :operation="operation" dialog-title="人员进入登记" /> -->
  </div>
</template>

<script>
import { querypendinglist, retireAudit } from '@/api/BaseInformation/PersonalInformationManagement/DimissionAudit'
import FormItems from '@/views/components/PageLayers/form-items'
import OrganizationName from '@/components/Select/OrganizationName'
import JobsLevel from '@/components/Select/JobsLevel'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
// import EditDialog from './dialog/edit'
// import AddDialog from './dialog/add'
import DetailDialog from '../dimission-management/dialog/detail'
// import TheDetail from '../component/index'
export default {
  name: 'DismissAudit',
  components: { DetailDialog, FormItems, NormalLayer, OrganizationName, JobsLevel },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 15
      },
      detailInfo: {},
      loading: false,
      isShowDetail: false,
      isShowAdd: false,
      isShowEdit: false,
      isShowTheDetail: false,
      reportVisible: false,
      operation: 'audit',
      itemsDatas: [
        // { label: '年度', prop: '年度1', type: 'dateYear' },
        { label: '单位', prop: '单位', type: 'custom' },
        { label: '姓名', prop: '姓名', type: 'input' },
        { label: '性别', prop: '性别', type: 'select', options: [{ label: '男', value: '1' }, { label: '女', value: '2' }, { label: '未说明', value: '3' }] },
        { label: '身份证号', prop: '身份证号', type: 'input' },
        { label: '退休前级别', prop: '退休前级别', type: 'custom' },
        { label: '退休时间', prop: '退休时间', type: 'dateRange' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'aac003' },
        { label: '身份证号码', prop: 'aac002' },
        { label: '单位名称', prop: 'aab069' },
        { label: '性别', prop: 'aac004' },
        { label: '人员类别', prop: 'rc0215' },
        { label: '离退类别', prop: 'rc0901' },
        { label: '离退日期', prop: 'rc0902' },
        { label: '离退前级别', prop: 'rc0903' },
        { label: '离退前职务', prop: 'rc0908' },
        { label: '离退批准准文号', prop: 'rc0905' },
        { label: '离退批准单位', prop: 'rc0906' },
        { label: '操作', type: 'operation', fixed: 'right', width: '120px' }
      ],
      tableData: [],
      addForm: {}
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
    showDialog(row) {
      this.isShowDetail = true
      this.$refs.detail.info(row)
    },
    search() {
      const form = Object.assign(this.queryForm, { pageNum: this.pageInfo.pageNum, pageSize: this.pageInfo.pageSize, workflowNodes: [2] })
      this.$search(querypendinglist, form)
    },
    pageChange(data) {
      this.pageInfo = data.pagination
      this.search()
    },
    retireAudit(row, type) {
      this.$msgConfirm(`确定${type ? '审核通过?' : '审核不通过?'}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(this.addForm)
        const form = {
          busId: row.arc081,
          businessKey: 'B01-01-03',
          isPass: type,
          workflowNode: [2]
        }
        console.log(form)
        this.loading = true
        retireAudit(form).then(res => {
          this.loading = false
          this.search()
          this.$msgSuccess(res.message)
        }).catch(() => {
          this.loading = false
        })
      }).catch(() => {
        this.$msgInfo('已取消')
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
