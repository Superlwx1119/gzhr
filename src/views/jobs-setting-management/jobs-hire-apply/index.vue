<template>
  <!--岗位首次聘用申报-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="7">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="业务状态">
            <BusinessState v-model="queryForm.业务状态" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">岗位首次聘用申报列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="showDialog('add')">新增</el-button>
          <!-- <el-button type="primary">申报</el-button> -->
          <!-- <el-button type="danger">删除</el-button> -->
        </div>
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation">
            <el-button type="text" @click="showDialog('detail')">详情</el-button>
            <el-button type="text" @click="isShowTheDetail = true">编辑</el-button>
            <el-button type="text" @click="isShowEdit = true">追踪</el-button>
            <el-button type="text" @click="isShowEdit = true">申报</el-button>
            <el-button type="text" class="delete" @click="isShowEdit = true">删除</el-button>
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <!-- 新增/详情 -->
    <JobsHire v-model="isShowAdd" :dialog-title="dialogTitle" />
  </div>
</template>

<script>
import { list } from '@/api/BaseInformation/PersonalInformationManagement/index'
import JobsHire from '../dialog/jobsHire'
import FormItems from '@/views/components/PageLayers/form-items'
import BusinessState from '@/components/Select/BusinessState'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'JobsHireApply',
  components: { FormItems, NormalLayer, BusinessState, JobsHire },
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
      dialogTitle: '岗位设置新增',
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
        { label: '单位名称', prop: '单位名称', type: 'input' },
        { label: '经办时间', prop: '经办时间', type: 'date' },
        { label: '业务状态', prop: '业务状态', type: 'custom' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '单位名称', prop: 'aab069' },
        { label: '岗位设置序号', prop: 'c' },
        { label: '主管部门', prop: 'aab019' },
        { label: '单位编制数', prop: 'rb0195' },
        { label: '管理岗位', prop: 'aab022' },
        { label: '专业技术岗位', prop: 'aab023' },
        { label: '工勤技能岗位', prop: 'rb0705' },
        { label: '经办时间', prop: 'i' },
        { label: '经办人', prop: 'i' },
        { label: '结办时间', prop: 'i' },
        { label: '结办人', prop: 'i' },
        { label: '操作', type: 'operation', fixed: 'right', width: '250px' }
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
    search() {
      const form = Object.assign(this.queryForm, { pageNum: this.pageInfo.pageNum, pageSize: this.pageInfo.pageSize })
      this.$search(list, form)
    },
    pageChange(data) {
      this.pageInfo = data.pagination
      this.search()
    },
    showDialog(type) {
      if (type === 'add') {
        this.dialogTitle = '岗位设置新增'
      } else {
        this.dialogTitle = '岗位设置修改'
      }
      this.isShowAdd = true
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
