<template>
  <!--合同管理-->
  <div class="rewardManagement">
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
        <span class="box-title">合同管理列表</span>
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="单位" slot-scope="{row}">
            <el-button type="text" @click="goOrganizationInfo">{{ row.a }}</el-button>
          </template>
          <template slot="姓名" slot-scope="{row}">
            <el-button type="text" @click="goPersonnelInfo">{{ row.b }}</el-button>
          </template>
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)">修改</el-button>
            <el-button type="text" class="delete" @click="deleteRow(scope.row)">删除</el-button>
          </template>
        </my-table-view>
        <Pagination :data="paginationQuery" />
      </template>
    </normal-layer>
    <OrganizationInfoView v-model="isShowOrganizationInfo" :operation="operation" dialog-title="单位信息查看" />
    <PersonnelInfoView v-model="isShowPersonnelInfoView" :operation="operation" dialog-title="个人信息查看" />
  </div>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import OrganizationName from '@/components/Select/OrganizationName'
import ContractSigningStatus from '@/components/Select/ContractSigningStatus'
import pageHandle from '@/mixins/pageHandle'
import OrganizationInfoView from '@/views/components/OrganizationInfoView/index'
import PersonnelInfoView from '@/views/components/PersonnelInfoView/index'
export default {
  name: 'RewardManagement',
  components: { FormItems, NormalLayer, ContractSigningStatus, OrganizationName, OrganizationInfoView,
    PersonnelInfoView },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      isShowOrganizationInfo: false,
      isShowPersonnelInfoView: false,
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
        { label: '单位', prop: 'a', type: 'custom', slotName: '单位' },
        { label: '姓名', prop: 'b', type: 'custom', slotName: '姓名' },
        { label: '奖励名称', prop: 'c' },
        { label: '奖励原因', prop: 'd' },
        { label: '批准日期', prop: 'e' },
        { label: '批准机关', prop: 'f' },
        { label: '操作', type: 'operation', fixed: 'right', width: '200px' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: '单位' + item, b: '姓名' + item, c: '警告', d: '警告', e: '2017-01-01', f: '人社局'
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
    goOrganizationInfo() {
      this.isShowOrganizationInfo = true
    },
    goPersonnelInfo() {
      this.isShowPersonnelInfoView = true
    },
    edit() {
      this.dialogTitle = '新增合同签订信息'
      this.showAddDialog = true
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
