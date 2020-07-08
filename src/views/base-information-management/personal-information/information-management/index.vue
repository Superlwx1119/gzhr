<template>
  <!--人员信息管理-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="7">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位">
            <OrganizationName v-model="queryForm.单位" />
          </template>
          <template slot="进入方式">
            <EnterType v-model="queryForm.进入方式" />
          </template>
          <template slot="岗位等级">
            <JobsLevel v-model="queryForm.岗位等级" />
          </template>
          <template slot="单位级别">
            <OrganizationLevel v-model="queryForm.单位级别" />
          </template>
          <template slot="附件状态">
            <el-select
              :value="queryForm.附件状态"
              style="width: 100%"
              placeholder="请选择"
            >
              <el-option label="存在" value="1" />
              <el-option label="不存在" value="1" />
            </el-select>
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">人员信息管理列表</span>
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="showDialog('edit',scope.row)">编辑</el-button>
            <el-button type="text">追踪</el-button>
            <el-button type="text">申报</el-button>
            <el-button type="text" class="delete" @click="deleteRow(scope.row)">删除</el-button>
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <!-- 编辑 -->
    <EditDialog v-model="isShowDetail" :detail-info="detailInfo" :operation="operation" dialog-title="人员信息编辑" />
    <!-- 新增登记 -->
    <AddDialog v-model="isShowAdd" :detail-info="detailInfo" dialog-title="人员进入登记" />
  </div>
</template>

<script>
import { list, deletePerson } from '@/api/BaseInformation/PersonalInformationManagement/index'
import FormItems from '@/views/components/PageLayers/form-items'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import EditDialog from './dialog/edit'
import AddDialog from './dialog/add'
import OrganizationLevel from '@/components/Select/OrganizationLevel'
import EnterType from '@/components/Select/EnterType'
import OrganizationName from '@/components/Select/OrganizationName'
import JobsLevel from '@/components/Select/JobsLevel'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'StaffRegistration',
  components: { AddDialog, FormItems, NormalLayer, EditDialog, OrganizationLevel, EnterType, OrganizationName, JobsLevel },
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
      isShowAdd: false,
      reportVisible: false,
      operation: 'detail',
      itemsDatas: [
        // { label: '年度', prop: '年度1', type: 'dateYear' },
        { label: '单位', prop: '单位', type: 'custom' },
        { label: '姓名', prop: '姓名', type: 'input' },
        { label: '身份证号', prop: '身份证号', type: 'input' },
        { label: '进入方式', prop: '进入方式', type: 'custom' },
        { label: '岗位等级', prop: '岗位等级', type: 'custom' },
        { label: '进入单位时间', prop: '进入单位时间', type: 'dateRange' },
        { label: '附件状态', prop: '附件状态', type: 'custom' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '入职附件', prop: 'aab001' },
        { label: '审核状态', prop: 'aab069' },
        { label: '单位名称', prop: 'c' },
        { label: '姓名', prop: 'aab019' },
        { label: '性别', prop: 'rb0195' },
        { label: '身份证号码', prop: 'aab023' },
        { label: '人员类型', prop: 'aab022' },
        { label: '岗位等级', prop: 'rb0705' },
        { label: '兼任的岗位等级', prop: 'i' },
        { label: '进入方式', prop: 'k' },
        { label: '进入单位时间', prop: 'l' },
        { label: '最高学历', prop: 'm' },
        { label: '现状态', prop: 'n' },
        { label: '人员动态', prop: 'o' },
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
