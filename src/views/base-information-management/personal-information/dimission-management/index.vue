<template>
  <!--离退管理-->
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
        <span class="box-title">离退管理列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="showDialog('add')">新增</el-button>
          <el-button type="primary">数据导入</el-button>
        </div>
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="{row}">
            <!-- <el-button type="text" @click="isShowTheDetail = true">基本信息</el-button> -->
            <el-button type="text" @click="showDialog('edit',row)">修改</el-button>
            <el-button type="text" @click="showDialog('detail',row)">查看</el-button>
            <el-button type="text" @click="retireApply(row)">申报</el-button>
            <el-button type="text" class="delete" @click="deleteRow(row)">删除</el-button>
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <!-- 新增 -->
    <AddDialog ref="add" v-model="isShowAdd" :detail-info="detailInfo" dialog-title="选择需要退休人员" @search="search" />
    <!-- 修改 -->
    <EditDialog ref="edit" v-model="isShowEdit" :operation="operation" dialog-title="人员离退登记信息修改" @cloeseParent="cloeseParent" />
    <!-- 查看 -->
    <DetailDialog ref="detail" v-model="isShowDetail" :operation="operation" dialog-title="人员离退登记信息详情" />
    <!-- 明细 -->
    <TheDetail v-model="isShowTheDetail" :detail-info="detailInfo" :operation="operation" dialog-title="人员进入登记" />
  </div>
</template>

<script>
import { list, retireApply, retireDelete } from '@/api/BaseInformation/PersonalInformationManagement/DimissionAudit'
import FormItems from '@/views/components/PageLayers/form-items'
import OrganizationName from '@/components/Select/OrganizationName'
import JobsLevel from '@/components/Select/JobsLevel'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
import EditDialog from './dialog/edit'
import AddDialog from './dialog/add'
import DetailDialog from './dialog/detail'
import TheDetail from '../component/index'
export default {
  name: 'DismissManagement',
  components: { TheDetail, FormItems, NormalLayer, OrganizationName, JobsLevel, EditDialog, AddDialog, DetailDialog },
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
      isShowEdit: false,
      isShowTheDetail: false,
      reportVisible: false,
      operation: 'detail',
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
        { label: '操作', type: 'operation', fixed: 'right', width: '250px' }
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
      this.operation = type
      if (type === 'add') {
        this.isShowAdd = true
        this.$refs.add.canBeList()
      } else if (type === 'detail') {
        this.$refs.detail.info(row)
        this.isShowDetail = true
      } else if (type === 'edit') {
        this.isShowEdit = true
        this.$refs.edit.getDetail(row)
      }
    },
    cloeseParent() {
      this.search()
    },
    search() {
      const form = Object.assign(this.queryForm, { pageNum: this.pageInfo.pageNum, pageSize: this.pageInfo.pageSize })
      this.$search(list, form)
    },
    pageChange(data) {
      this.pageInfo = data.pagination
      this.search()
    },
    retireApply(row) {
      this.$msgConfirm('确认进入离退申报?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading = true
        retireApply({ arc081: Number(row.arc081) }).then(res => {
          this.loading = false
          if (res.code === 0) {
            this.search()
            this.$msgSuccess(res.message)
          }
        }).catch(() => {
          this.loading = false
        })
      }).catch(() => {
        this.$msgInfo('已取消')
      })
    },
    deleteRow(row) {
      this.$msgConfirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.loading = true
        retireDelete({ arc081: Number(row.arc081) }).then(res => {
          this.loading = false
          if (res.code === 0) {
            this.search()
            this.$msgSuccess(res.message)
          }
        }).catch(() => {
          this.loading = false
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
