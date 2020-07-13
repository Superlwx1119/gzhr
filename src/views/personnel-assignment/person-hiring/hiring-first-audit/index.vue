<template>
  <!--人员聘用初审-->
  <div class="HiringFirstAudit">
    <normal-layer :search-number="5">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="上一单位">
            <OrganizationName v-model="queryForm.上一单位" />
          </template>
          <template slot="流程状态">
            <ProcessSate v-model="queryForm.流程状态" />
          </template>
          <template slot="聘用单位">
            <OrganizationName v-model="queryForm.聘用单位" />
          </template>
          <template slot="聘用方式">
            <HiringType v-model="queryForm.聘用方式" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">人员聘用初审列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary">通过</el-button>
          <el-button type="danger">不通过</el-button>
        </div>
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation">
            <el-button type="text" @click="shosDialog(['add'])">编辑</el-button>
            <el-button type="text" @click="shosDialog(['detail'])">查看</el-button>
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <!-- 人员信息 -->
    <PersonnelInfoView v-model="isShowDetail" :operation-type="operationType" dialog-title="查看信息" />
  </div>
</template>

<script>
import { list } from '@/api/BaseInformation/PersonalInformationManagement/index'
import PersonnelInfoView from '../../component/index'
import FormItems from '@/views/components/PageLayers/form-items'
import OrganizationName from '@/components/Select/OrganizationName'
import ProcessSate from '@/components/Select/ProcessSate'
import HiringType from '@/components/Select/HiringType'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'HiringFirstAudit',
  components: { FormItems, NormalLayer, OrganizationName, ProcessSate, HiringType, PersonnelInfoView },
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
      operationType: [],
      itemsDatas: [
        { label: '姓名', prop: '姓名', type: 'input' },
        { label: '流程状态', prop: '流程状态', type: 'custom' },
        { label: '上一单位', prop: '上一单位', type: 'custom' },
        { label: '聘用单位', prop: '聘用单位', type: 'custom' },
        { label: '聘用方式', prop: '聘用方式', type: 'custom' }

      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'aab069' },
        { label: '上一单位名称', prop: 'c' },
        { label: '聘用单位名称', prop: 'aab019' },
        { label: '聘用方式', prop: 'rb0195' },
        { label: '聘用单位性质', prop: 'aab022' },
        { label: '申报时间', prop: 'aab023' },
        { label: '流程状态', prop: 'rb0705' },
        { label: '操作', type: 'operation', fixed: 'right', width: '120px' }
      ],
      tableData: [{ aab019: '张三', aab022: '12312312313' }]
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
    shosDialog(type) {
      this.operationType = type
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

