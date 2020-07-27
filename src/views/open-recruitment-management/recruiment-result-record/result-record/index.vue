<template>
  <!--结果备案-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="2">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">结果备案列表</span>
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation">
            <el-button type="text">追踪</el-button>
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <Apply v-model="isShowAdd" dialog-title="结果申报" />
  </div>
</template>

<script>
import { list, deletePerson } from '@/api/BaseInformation/PersonalInformationManagement/index'
import FormItems from '@/views/components/PageLayers/form-items'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
import Apply from '../dialog/apply'
export default {
  name: 'ResultApply',
  components: { FormItems, NormalLayer, Apply },
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
        { label: '单位名称', prop: '单位名称', type: 'select' },
        { label: '在职状态', prop: '在职状态', type: 'select', options: [{ label: '试用', value: '0' }, { label: '正式', value: '1' }] }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '方案名称', prop: 'aab069' },
        { label: '主管单位名称', prop: 'c' },
        { label: '单位名称', prop: 'aab019' },
        { label: '导入状态', prop: 'rb0195' },
        { label: '计划招聘人数', prop: 'aab023' },
        { label: '聘用人数', prop: 'aab022' },
        { label: '年度招聘次数', prop: 'rb0705' },
        { label: '申报时间', prop: 'i' },
        { label: '结办时间', prop: 'k' },
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
