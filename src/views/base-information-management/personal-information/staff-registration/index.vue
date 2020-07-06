<template>
  <!--新增单位申报-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="3">
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
        <span class="box-title">新增单位申报列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="showDialog('add')">新增</el-button>
          <el-button type="primary">人员简历打印</el-button>
          <el-button type="primary">人员信息导出</el-button>
          <el-button type="primary">人员信息导出</el-button>
          <el-button type="primary">打印在职人员名册</el-button>
        </div>
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
    <EditDialog v-model="isShowDetail" :detail-info="detailInfo" :operation="operation" dialog-title="人员进入登记" />
  </div>
</template>

<script>
import { queryCorpList, queryCorpDetail } from '@/api/OrganizationInformationManagement/AddOrganizationApply'
import FormItems from '@/views/components/PageLayers/form-items'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import EditDialog from './dialog/edit'
import OrganizationLevel from '@/components/Select/OrganizationLevel'
import EnterType from '@/components/Select/EnterType'
import OrganizationName from '@/components/Select/OrganizationName'
import JobsLevel from '@/components/Select/JobsLevel'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'NewOrganizationApply',
  components: { FormItems, NormalLayer, EditDialog, OrganizationLevel, EnterType, OrganizationName, JobsLevel },
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
        { label: '姓名', prop: 'rb0195' },
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
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '单位编码', b: '单位名称', c: '社会信用代码', d: '单位类型' + item, e: '岗位等级', f: '主管部门', g: '行业代码', h: '编制数', i: '法人代表', j: '奖励金发放比率', k: '联系人', l: '联系电话', m: '地址', n: '批准编制日期', o: '批准编制文号'
        }
      })
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
      this.isShowDetail = true
    },
    search() {
      const form = Object.assign(this.queryForm, { pageNum: this.pageInfo.pageNum, pageSize: this.pageInfo.pageSize })
      this.$search(queryCorpList, form)
    },
    getDetail(id) {
      queryCorpDetail({ id: id }).then(res => {
        this.detailInfo = res.data
        this.isShowDetail = true
      })
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
