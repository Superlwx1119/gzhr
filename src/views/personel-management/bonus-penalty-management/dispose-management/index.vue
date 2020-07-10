<template>
  <!--处分管理-->
  <div class="disposeManagement">
    <normal-layer :search-number="5">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位">
            <OrganizationName v-model="queryForm.单位" />
          </template>
          <template slot="处分类别">
            <PunishmentType v-model="queryForm.奖励名称" />
          </template>
          <template slot="审核状态">
            <ApprovalStatus v-model="queryForm.审核状态" />
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
            <el-button type="text" @click="apply(scope.row)">申报</el-button>
            <el-button type="text" class="delete" @click="deleteRow(scope.row)">删除</el-button>
          </template>
        </my-table-view>
        <Pagination :data="paginationQuery" />
      </template>
    </normal-layer>
    <OrganizationInfoView v-model="isShowOrganizationInfo" :operation="operation" dialog-title="单位信息查看" />
    <PersonnelInfoView v-model="isShowPersonnelInfoView" :operation="operation" dialog-title="个人信息查看" />
    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
    <apply-dialog v-model="showApplyDialog" :dialog-title="dialogTitle" />
  </div>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import OrganizationName from '@/components/Select/OrganizationName'
import PunishmentType from '@/components/Select/PunishmentType'
import ApprovalStatus from '@/components/Select/ApprovalStatus'
import pageHandle from '@/mixins/pageHandle'
import OrganizationInfoView from '@/views/components/OrganizationInfoView/index'
import PersonnelInfoView from '@/views/components/PersonnelInfoView/index'
import EditDialog from './edit'
import ApplyDialog from './apply'
export default {
  name: 'DisposeManagement',
  components: { FormItems, NormalLayer, OrganizationName, PunishmentType, ApprovalStatus, OrganizationInfoView, PersonnelInfoView, EditDialog, ApplyDialog },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      isShowOrganizationInfo: false,
      isShowPersonnelInfoView: false,
      showApplyDialog: false,
      showEditDialog: false,
      dialogTitle: '',
      operation: 'detail',
      itemsDatas: [
        { label: '单位', prop: '单位', type: 'custom' },
        { label: '姓名', prop: '姓名', type: 'input' },
        { label: '处分类别', prop: '处分类别', type: 'custom' },
        { label: '期满', prop: '期满', type: 'dateRange' },
        { label: '审核状态', prop: '审核状态', type: 'custom' }

      ],
      columns: [
        { type: 'index', label: '序号' },
        { label: '审核状态', prop: 'aa' },
        { label: '单位', prop: 'a', type: 'custom', slotName: '单位' },
        { label: '姓名', prop: 'b', type: 'custom', slotName: '姓名' },
        { label: '处分类别', prop: 'c' },
        { label: '处分名称', prop: 'd' },
        { label: '处分名称', prop: 'dd' },
        { label: '批准日期', prop: 'e' },
        { label: '批准机关', prop: 'f' },
        { label: '处分期(月)', prop: 'g' },
        { label: '期满日期', prop: 'e' },
        { label: '操作', type: 'operation', fixed: 'right', width: '200px' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          aa: '审批完成', a: '单位' + item, b: '姓名' + item, c: '党纪处分', d: '警告', dd: '违反政治纪律的行为', e: '2017-01-01', f: '党中央、国务院', g: '5'
        }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
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
      this.dialogTitle = '修改处分信息'
      this.showEditDialog = true
    },
    apply() {
      this.dialogTitle = '审核处分信息'
      this.showApplyDialog = true
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

