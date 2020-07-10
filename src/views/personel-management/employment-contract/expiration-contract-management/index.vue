<template>
  <!--到期合同管理-->
  <div class="expirationContractManagement">
    <normal-layer :search-number="6">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位">
            <OrganizationName v-model="queryForm.单位" />
          </template>
          <template slot="合同签订状态">
            <ContractSigningStatus v-model="queryForm.合同签订状态" />
          </template>

          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">到期合同管理列表</span>

      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="signContract(scope.row)">合同签订</el-button>
            <el-button type="text" @click="goHistoricalContract(scope.row)">历史合同</el-button>
          </template>
        </my-table-view>
        <Pagination :data="paginationQuery" />
      </template>
    </normal-layer>
    <add-dialog v-model="showAddDialog" :dialog-title="dialogTitle" />
    <historical-contract-dialog v-model="showHistoricalContractDialog" :dialog-title="dialogTitle" />
  </div>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import AddDialog from './add'
import HistoricalContractDialog from './historicalContract'
import OrganizationName from '@/components/Select/OrganizationName'
import ContractSigningStatus from '@/components/Select/ContractSigningStatus'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'ExpirationContractManagement',
  components: { FormItems, NormalLayer, ContractSigningStatus, OrganizationName, AddDialog, HistoricalContractDialog },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      showAddDialog: false,
      showHistoricalContractDialog: false,
      dialogTitle: '',
      itemsDatas: [
        { label: '单位', prop: '单位', type: 'custom' },
        { label: '姓名', prop: '姓名', type: 'input' },
        { label: '身份证号', prop: '身份证号', type: 'input' },
        { label: '聘期', prop: '聘期', type: 'dateRange' },
        { label: '合同签订状态', prop: '合同签订状态', type: 'custom' }

      ],
      columns: [
        { type: 'index', label: '序号' },
        { label: '单位', prop: 'a' },
        { label: '姓名', prop: 'b' },
        { label: '性别', prop: 'c' },
        { label: '身份证号', prop: 'd' },
        { label: '岗位等级', prop: 'e' },
        { label: '合同签订状态', prop: 'f' },
        { label: '聘用起始日期', prop: 'g' },
        { label: '聘用结束日期', prop: 'h' },
        { label: '是否试用期', prop: 'i' },
        { label: '聘期考核结果', prop: 'k' },
        { label: '操作', type: 'operation', fixed: 'right', width: '200px' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '单位' + item, b: '姓名' + item, c: '男', d: '身份证号' + item, e: '岗位等级', f: '合同签订状态', g: '2019-02-03', h: '2020-02-03', i: '是', k: '合格'
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
    signContract() {
      this.dialogTitle = '新增合同签订信息'
      this.showAddDialog = true
    },
    goHistoricalContract() {
      this.dialogTitle = '历史合同'
      this.showHistoricalContractDialog = true
    },
    search() {
      // const form = Object.assign(this.queryForm, { pageNum: this.paginationQuery.pageNum, pageSize: this.paginationQuery.pageSize })
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
    }
  }
}
</script>

<style scoped lang="scss">
  /deep/ .el-table .el-table__body-wrapper{
    z-index: 0;
  }
</style>
