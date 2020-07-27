<template>
  <!--面试审批-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="3">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">面试审批列表</span>
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation">
            <el-button type="text">追踪</el-button>
            <el-button type="text">审核</el-button>
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <Choose v-model="isShowDetail" @showAdd="isShowAdd = true" />
    <Add v-model="isShowAdd" />
  </div>
</template>

<script>
import { list, deletePerson } from '@/api/BaseInformation/PersonalInformationManagement/index'
import FormItems from '@/views/components/PageLayers/form-items'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
import Choose from '../dialog/choose'
import Add from '../dialog/add'
export default {
  name: 'InterviewApply',
  components: { FormItems, NormalLayer, Choose, Add },
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
      reportVisible: false,
      operation: 'detail',
      itemsDatas: [
        { label: '单位名称', prop: '单位名称', type: 'custom' },
        { label: '年度', prop: '年度', type: 'dateYear' },
        { label: '状态', prop: '状态', type: 'select' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '单位名称', prop: 'c' },
        { label: '主管部门', prop: 'aab019' },
        { label: '方案名称', prop: 'rb0195' },
        { label: '年度', prop: 'aab023' },
        { label: '方案类型', prop: 'aab022' },
        { label: '招聘管理人员', prop: 'rb0705' },
        { label: '招聘专技人员', prop: 'i' },
        { label: '招聘工勤人员', prop: 'k' },
        { label: '经办日期', prop: 'k' },
        { label: '结办日期', prop: 'k' },
        { label: '状态位', prop: 'k' },
        { label: '操作', type: 'operation', fixed: 'right', width: '200px' }
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
    showDialog(type, row) {
      if (type === 'add') {
        this.isShowAdd = true
      } else {
        this.isShowDetail = true
      }
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
        deletePerson({ aac001: row.aac001 }).then(res => {
          if (res.code === 0) {
            this.$msgSuccess('删除成功')
            this.search()
          } else {
            this.$msgError(res.message)
          }
        })
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
